import { createContext, useContext } from 'react'
import type { Idioma, Textos } from './strings'
import type { DatosPortafolio } from '@/types'

export interface ValorIdioma {
  lang: Idioma
  setLang: (lang: Idioma) => void
  toggleLang: () => void
  /** Textos de la interfaz en el idioma activo. */
  t: Textos
  /** Contenido del portafolio en el idioma activo. */
  datos: DatosPortafolio
}

/**
 * El contexto y sus hooks viven aquí, separados del provider, porque un
 * archivo que exporta componentes y funciones a la vez rompe el fast refresh.
 */
export const LanguageContext = createContext<ValorIdioma | null>(null)

export function useLanguage(): ValorIdioma {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return ctx
}

/** Atajo para las páginas que solo necesitan el contenido. */
export function usePortafolio(): DatosPortafolio {
  return useLanguage().datos
}

/** Atajo para los textos de interfaz. */
export function useTextos(): Textos {
  return useLanguage().t
}
