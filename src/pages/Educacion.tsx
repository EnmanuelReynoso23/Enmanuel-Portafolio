import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Educacion() {
  const { educacion } = datosPortafolio

  return (
    <PageShell title="Educación">
      {educacion.map((entry, index) => (
        <div key={index} className="page-card">
          <h3 className="page-card__title">{entry.titulo}</h3>
          <p className="page-card__subtitle">{entry.institucion}</p>
          <p className="page-card__period">{entry.periodo}</p>
          <p className="page-card__text">{entry.descripcion}</p>
        </div>
      ))}
    </PageShell>
  )
}
