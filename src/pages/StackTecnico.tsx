import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function StackTecnico() {
  const { stackTecnico } = datosPortafolio

  return (
    <PageShell title="Stack Técnico">
      <p className="page-intro">
        Tecnologías y herramientas que utilizo para construir productos de principio a fin.
      </p>
      <div className="stack-grid">
        {stackTecnico.map(category => (
          <div key={category.categoria} className="page-card stack-card">
            <h3 className="stack-card__title">
              {category.icono && <span className="stack-card__icon">{category.icono}</span>}
              {category.categoria}
            </h3>
            <div className="tech-tags">
              {category.tecnologias.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
