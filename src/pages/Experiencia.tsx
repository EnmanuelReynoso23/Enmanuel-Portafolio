import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Experiencia() {
  const { experiencia } = datosPortafolio

  return (
    <PageShell title="Experiencia Laboral">
      <div className="timeline">
        {experiencia.map((entry, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item__dot">
              {entry.actual && <span className="timeline-item__pulse" />}
            </div>
            <div className="page-card timeline-item__card">
              <div className="timeline-item__top">
                <h3 className="page-card__title">{entry.rol}</h3>
                {entry.actual && <span className="badge badge--current">Actual</span>}
              </div>
              <p className="page-card__subtitle">{entry.empresa}</p>
              <div className="timeline-item__meta">
                <span className="page-card__period">{entry.periodo}</span>
                {entry.tipo && <span className="meta-chip">{entry.tipo}</span>}
                {entry.ubicacion && <span className="meta-chip meta-chip--muted">{entry.ubicacion}</span>}
              </div>
              <p className="page-card__text" style={{ whiteSpace: 'pre-line', marginTop: '10px' }}>{entry.descripcion}</p>
              <div className="tech-tags">
                {entry.tecnologias.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
