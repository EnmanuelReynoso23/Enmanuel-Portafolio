import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Experiencia() {
  const { experiencia } = datosPortafolio

  return (
    <PageShell title="Experiencia Laboral">
      {experiencia.map((entry, index) => (
        <div key={index} className="page-card">
          <h3 className="page-card__title">{entry.rol}</h3>
          <p className="page-card__subtitle">{entry.empresa}</p>
          <p className="page-card__period">{entry.periodo}</p>
          <p className="page-card__text">{entry.descripcion}</p>
          <div className="tech-tags">
            {entry.tecnologias.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </PageShell>
  )
}
