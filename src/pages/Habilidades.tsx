import { PageShell } from '@/components/layout/PageShell'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import './pages.css'

export function Habilidades() {
  const { habilidades } = usePortafolio()
  const t = useTextos()

  const categories = [...new Set(habilidades.map(s => s.categoria))]

  return (
    <PageShell title={t.tituloHabilidades}>
      <p className="page-intro">
        {t.introHabilidades}
      </p>
      {categories.map(category => (
        <div key={category} className="page-section">
          <h2 className="page-section__title">{category}</h2>
          <div className="page-card">
            <div className="tech-tags">
              {habilidades
                .filter(s => s.categoria === category)
                .map(skill => (
                  <span key={skill.nombre} className="tech-tag">{skill.nombre}</span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </PageShell>
  )
}
