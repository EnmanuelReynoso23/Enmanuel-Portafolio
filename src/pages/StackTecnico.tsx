import { PageShell } from '@/components/layout/PageShell'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import './pages.css'

export function StackTecnico() {
  const { stackTecnico } = usePortafolio()
  const t = useTextos()

  return (
    <PageShell title={t.tituloStack}>
      <p className="page-intro">
        {t.introStack}
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
