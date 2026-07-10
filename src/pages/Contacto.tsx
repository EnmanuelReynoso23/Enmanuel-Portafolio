import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Contacto() {
  const { contacto } = datosPortafolio

  const enlaces = [
    { icono: '✉️', etiqueta: 'Email', valor: contacto.gmail, href: `mailto:${contacto.gmail}` },
    { icono: '💼', etiqueta: 'LinkedIn', valor: 'in/enmanuel-reynoso-salazar', href: contacto.linkedin },
    { icono: '💻', etiqueta: 'GitHub', valor: 'EnmanuelReynoso23', href: contacto.github },
    ...(contacto.sitioWeb ? [{ icono: '🌐', etiqueta: 'Sitio Web', valor: contacto.sitioWeb.replace(/^https?:\/\//, ''), href: contacto.sitioWeb }] : []),
    ...(contacto.twitter ? [{ icono: '🐦', etiqueta: 'Twitter', valor: contacto.twitter, href: contacto.twitter }] : []),
  ]

  return (
    <PageShell title="Contacto">
      <p className="page-intro">
        ¿Tienes un proyecto en mente o una oportunidad? Hablemos. 🚀
      </p>
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
