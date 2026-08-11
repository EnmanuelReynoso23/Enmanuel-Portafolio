import { PageShell } from '@/components/layout/PageShell'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import './pages.css'

export function Idiomas() {
  const { idiomas } = usePortafolio()
  const t = useTextos()

  return (
    <PageShell title={t.tituloIdiomas}>
      <p className="page-intro">
        {t.introIdiomas}
      </p>
      <div className="lang-grid">
        {idiomas.map((idioma, index) => (
          <div key={index} className="lang-card">
            <div className="lang-card__header">
              <span className="lang-card__flag">{idioma.bandera}</span>
              <div className="lang-card__names">
                <h3 className="lang-card__name">{idioma.nombre}</h3>
                <span className="lang-card__level">{idioma.nivel}</span>
              </div>
              <span className="lang-card__pct">{idioma.porcentaje}%</span>
            </div>
            <div className="lang-bar">
              <div
                className="lang-bar__fill"
                style={{ width: `${idioma.porcentaje}%` }}
              />
            </div>
            {idioma.detalle && <p className="lang-card__detail">{idioma.detalle}</p>}
          </div>
        ))}
      </div>
    </PageShell>
  )
}
