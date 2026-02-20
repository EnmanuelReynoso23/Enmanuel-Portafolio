import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Contacto() {
  const { contacto } = datosPortafolio

  return (
    <PageShell title="Contacto">
      <div className="page-section">
        <a
          href={`mailto:${contacto.gmail}`}
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email: {contacto.gmail}
        </a>
        <a
          href={contacto.github}
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: {contacto.github}
        </a>
        <a
          href={contacto.linkedin}
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: {contacto.linkedin}
        </a>
        {contacto.twitter && (
          <a
            href={contacto.twitter}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter: {contacto.twitter}
          </a>
        )}
      </div>
    </PageShell>
  )
}
