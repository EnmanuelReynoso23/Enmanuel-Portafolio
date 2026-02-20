import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function StackTecnico() {
  const { stackTecnico } = datosPortafolio

  return (
    <PageShell title="Stack Técnico">
      {stackTecnico.map(category => (
        <div key={category.categoria} className="page-card">
          <h3 className="page-card__title">{category.categoria}</h3>
          <div className="tech-tags">
            {category.tecnologias.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </PageShell>
  )
}
