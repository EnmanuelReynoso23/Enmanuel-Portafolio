import { useLanguage } from '@/i18n/useLanguage'
import './LanguageToggle.css'

/**
 * Selector ES/EN. Muestra las dos opciones a la vez en vez de un solo botón
 * que alterna: así se ve qué idioma está activo sin tener que pulsarlo.
 */
export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      className={`lang-toggle ${compact ? 'lang-toggle--compact' : ''}`}
      role="group"
      aria-label={t.idioma}
    >
      <button
        type="button"
        className={`lang-toggle__opt ${lang === 'es' ? 'is-active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        lang="es"
      >
        ES
      </button>
      <button
        type="button"
        className={`lang-toggle__opt ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        lang="en"
      >
        EN
      </button>
    </div>
  )
}
