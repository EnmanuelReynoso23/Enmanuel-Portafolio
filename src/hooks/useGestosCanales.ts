import { useCallback, useRef, useState } from 'react'

/** Tiempo que hay que mantener pulsado antes de poder mover un canal. */
const RETARDO_PULSACION = 350
/** Movimiento que cancela la pulsación larga (el dedo iba a deslizar). */
const TOLERANCIA = 12
/** Desplazamiento horizontal mínimo para cambiar de página. */
const UMBRAL_DESLIZAR = 55

interface Opciones {
  onMover: (desdeId: number, hastaId: number) => void
  onAnterior: () => void
  onSiguiente: () => void
}

/**
 * Gestos del menú de canales, con eventos de puntero para que funcionen
 * igual con ratón y con el dedo.
 *
 * La API de arrastre de HTML5 no dispara en pantallas táctiles, así que en
 * Android el reordenado no existía. Aquí el arrastre se activa manteniendo
 * pulsado; si el dedo se mueve antes, se interpreta como deslizamiento para
 * cambiar de página.
 */
export function useGestosCanales({ onMover, onAnterior, onSiguiente }: Opciones) {
  const [arrastrado, setArrastrado] = useState<number | null>(null)
  const [objetivo, setObjetivo] = useState<number | null>(null)

  const est = useRef({
    x: 0,
    y: 0,
    id: null as number | null,
    temporizador: 0,
    activo: false,
    gestionado: false,
  })

  const cancelarTemporizador = () => {
    if (est.current.temporizador) {
      clearTimeout(est.current.temporizador)
      est.current.temporizador = 0
    }
  }

  const reiniciar = useCallback(() => {
    cancelarTemporizador()
    est.current.id = null
    est.current.activo = false
    setArrastrado(null)
    setObjetivo(null)
  }, [])

  /** Handlers para cada tarjeta de canal. */
  const propsCanal = useCallback(
    (id: number, movible: boolean) => ({
      'data-canal-id': id,
      onPointerDown: (e: React.PointerEvent) => {
        if (!movible || e.button > 0) return
        est.current.x = e.clientX
        est.current.y = e.clientY
        est.current.id = id
        est.current.gestionado = false
        cancelarTemporizador()
        est.current.temporizador = window.setTimeout(() => {
          est.current.activo = true
          setArrastrado(id)
          // Señal háptica donde el dispositivo la soporte
          navigator.vibrate?.(15)
        }, RETARDO_PULSACION)
      },
      onPointerMove: (e: React.PointerEvent) => {
        if (est.current.id === null) return
        const dx = e.clientX - est.current.x
        const dy = e.clientY - est.current.y

        if (!est.current.activo) {
          // Se movió antes de tiempo: no era una pulsación larga
          if (Math.hypot(dx, dy) > TOLERANCIA) cancelarTemporizador()
          return
        }

        e.preventDefault()
        const bajo = document.elementFromPoint(e.clientX, e.clientY)
        const destino = bajo?.closest('[data-canal-id]')
        const idDestino = destino ? Number(destino.getAttribute('data-canal-id')) : null
        setObjetivo(idDestino !== null && idDestino !== est.current.id ? idDestino : null)
      },
      onPointerUp: () => {
        if (est.current.activo && est.current.id !== null && objetivo !== null) {
          onMover(est.current.id, objetivo)
          est.current.gestionado = true
        }
        reiniciar()
      },
      onPointerCancel: reiniciar,
      // Tras un arrastre el navegador dispara igualmente el click
      onClickCapture: (e: React.MouseEvent) => {
        if (est.current.gestionado) {
          e.preventDefault()
          e.stopPropagation()
          est.current.gestionado = false
        }
      },
    }),
    [objetivo, onMover, reiniciar],
  )

  /** Handlers del contenedor: deslizar para cambiar de página. */
  const deslizar = useRef({ x: 0, activo: false })

  const propsContenedor = {
    onPointerDown: (e: React.PointerEvent) => {
      deslizar.current = { x: e.clientX, activo: true }
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (!deslizar.current.activo) return
      deslizar.current.activo = false
      // Si se estaba reordenando, el deslizamiento no aplica
      if (est.current.activo) return
      const dx = e.clientX - deslizar.current.x
      if (dx <= -UMBRAL_DESLIZAR) onSiguiente()
      else if (dx >= UMBRAL_DESLIZAR) onAnterior()
    },
    onPointerCancel: () => {
      deslizar.current.activo = false
    },
  }

  return { arrastrado, objetivo, propsCanal, propsContenedor, arrastrando: arrastrado !== null }
}
