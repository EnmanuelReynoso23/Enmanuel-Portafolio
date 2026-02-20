import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Habilidades() {
  const { habilidades } = datosPortafolio

  const categories = [...new Set(habilidades.map(s => s.categoria))]

  return (
    <PageShell title="Habilidades">
      {categories.map(category => (
        <div key={category} className="page-section">
          <h2 className="page-section__title">{category}</h2>
          {habilidades
            .filter(s => s.categoria === category)
            .map(skill => (
              <div key={skill.nombre} className="skill-item">
                <div className="skill-item__header">
                  <span className="skill-item__name">{skill.nombre}</span>
                  <span className="skill-item__level">{skill.nivel}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar__fill"
                    style={{ width: `${skill.nivel}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      ))}
    </PageShell>
  )
}
