import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { datosPortafolio } from '@/data/portfolio'
import { portfolioData } from '@/data/portfolio.en'
import { textos } from '@/i18n/strings'
import type { Idioma } from '@/i18n/strings'
import { LanguageContext } from '@/i18n/useLanguage'
import type { ValorIdioma } from '@/i18n/useLanguage'

const CLAVE = 'portafolio:idioma'

function idiomaInicial(): Idioma {
  try {
    const guardado = localStorage.getItem(CLAVE)
    if (guardado === 'es' || guardado === 'en') return guardado
  } catch {
    // Storage bloqueado: se cae al idioma del navegador.
  }
  // Quien llega con el navegador en español ve español; el resto, inglés.
  return typeof navigator !== 'undefined' && navigator.language?.startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Idioma>(idiomaInicial)

  useEffect(() => {
    // Mantener <html lang> en sincronía: lo usan lectores de pantalla,
    // los traductores del navegador y los buscadores.
    document.documentElement.lang = lang
    try {
      localStorage.setItem(CLAVE, lang)
    } catch {
      // Sin persistencia, pero la sesión actual funciona igual.
    }
  }, [lang])

  const valor = useMemo<ValorIdioma>(
    () => ({
      lang,
      setLang: setLangState,
      toggleLang: () => setLangState((prev) => (prev === 'es' ? 'en' : 'es')),
      t: textos[lang],
      datos: lang === 'es' ? datosPortafolio : portfolioData,
    }),
    [lang],
  )

  return <LanguageContext.Provider value={valor}>{children}</LanguageContext.Provider>
}
