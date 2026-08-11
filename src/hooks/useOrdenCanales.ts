import { useCallback, useMemo, useState } from 'react'
import type { Canal } from '@/types'

const CLAVE = 'portafolio:orden-canales'

function leerOrden(): number[] {
  try {
    const guardado = localStorage.getItem(CLAVE)
    if (!guardado) return []
    const datos: unknown = JSON.parse(guardado)
    return Array.isArray(datos) ? datos.filter((n): n is number => typeof n === 'number') : []
  } catch {
    return []
  }
}

/**
 * Orden personalizado de los canales del menú, como en la Wii.
 *
 * Se guardan solo los IDs, no los canales enteros: así el contenido puede
 * cambiar (títulos, idioma, proyectos nuevos) sin arrastrar datos viejos.
 */
export function useOrdenCanales(canales: Canal[]) {
  const [orden, setOrden] = useState<number[]>(leerOrden)

  const ordenados = useMemo(() => {
    if (orden.length === 0) return canales

    const porId = new Map(canales.map((c) => [c.id, c]))
    const resultado: Canal[] = []

    for (const id of orden) {
      const canal = porId.get(id)
      if (canal) {
        resultado.push(canal)
        porId.delete(id)
      }
    }
    // Un canal añadido después de guardar el orden (un proyecto nuevo) no
    // está en la lista guardada: va al final en vez de desaparecer.
    for (const canal of canales) {
      if (porId.has(canal.id)) resultado.push(canal)
    }
    return resultado
  }, [canales, orden])

  const guardar = useCallback((lista: Canal[]) => {
    const ids = lista.map((c) => c.id)
    setOrden(ids)
    try {
      localStorage.setItem(CLAVE, JSON.stringify(ids))
    } catch {
      // Sin persistencia el reordenado sigue funcionando en esta sesión.
    }
  }, [])

  /** Mueve un canal a la posición de otro, desplazando el resto. */
  const mover = useCallback(
    (desdeId: number, hastaId: number) => {
      if (desdeId === hastaId) return
      const lista = [...ordenados]
      const desde = lista.findIndex((c) => c.id === desdeId)
      const hasta = lista.findIndex((c) => c.id === hastaId)
      if (desde === -1 || hasta === -1) return
      const [movido] = lista.splice(desde, 1)
      lista.splice(hasta, 0, movido)
      guardar(lista)
    },
    [ordenados, guardar],
  )

  const restablecer = useCallback(() => {
    setOrden([])
    try {
      localStorage.removeItem(CLAVE)
    } catch {
      // Nada que limpiar.
    }
  }, [])

  return { canales: ordenados, mover, restablecer, personalizado: orden.length > 0 }
}
