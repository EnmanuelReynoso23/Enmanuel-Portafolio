import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Educacion() {
  const { educacion } = datosPortafolio

  return (
    <PageShell title="Educación">
      <p className="page-intro">
        Mi formación académica y profesional.
      </p>
      <div className="edu-list">
        {educacion.map((entry, index) => (
          <div key={index} className="edu-card">
            <div className="edu-card__icon">🎓</div>
            <div className="edu-card__body">
              <div className="edu-card__top">
                <h3 className="edu-card__title">{entry.titulo}</h3>
                <span className="edu-card__period">{entry.periodo}</span>
              </div>
              <p className="edu-card__institution">{entry.institucion}</p>
              <p className="page-card__text">{entry.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
