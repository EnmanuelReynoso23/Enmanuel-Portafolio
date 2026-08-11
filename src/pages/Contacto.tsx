import { PageShell } from '@/components/layout/PageShell'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import { Download } from 'lucide-react'
import './pages.css'

export function Contacto() {
  const { contacto } = usePortafolio()
  const t = useTextos()

  const enlaces = [
    { icono: '✉️', etiqueta: t.etiquetaEmail, valor: contacto.gmail, href: `mailto:${contacto.gmail}` },
    { icono: '💼', etiqueta: 'LinkedIn', valor: 'in/enmanuel-reynoso-salazar', href: contacto.linkedin },
    { icono: '💻', etiqueta: 'GitHub', valor: 'EnmanuelReynoso23', href: contacto.github },
    ...(contacto.sitioWeb ? [{ icono: '🌐', etiqueta: t.etiquetaSitioWeb, valor: contacto.sitioWeb.replace(/^https?:\/\//, ''), href: contacto.sitioWeb }] : []),
    ...(contacto.twitter ? [{ icono: '🐦', etiqueta: 'Twitter', valor: contacto.twitter, href: contacto.twitter }] : []),
  ]

  return (
    <PageShell title={t.tituloContacto} subtitle={t.subtituloContacto}>
      <p className="page-intro">
        {t.introContacto} 🚀
      </p>

      {contacto.cv && (
        <a className="cv-download" href={contacto.cv} download>
          <span className="cv-download__icon">
            <Download size={20} />
          </span>
          <span className="cv-download__body">
            <span className="cv-download__title">{t.descargarCV}</span>
            <span className="cv-download__meta">{t.metaCV}</span>
          </span>
        </a>
      )}

      <div className="contact-grid">
        {enlaces.map(enlace => (
          <a
            key={enlace.etiqueta}
            href={enlace.href}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">{enlace.icono}</span>
            <div className="contact-card__body">
              <span className="contact-card__label">{enlace.etiqueta}</span>
              <span className="contact-card__value">{enlace.valor}</span>
            </div>
            <span className="contact-card__arrow">→</span>
          </a>
        ))}
      </div>
    </PageShell>
  )
}
