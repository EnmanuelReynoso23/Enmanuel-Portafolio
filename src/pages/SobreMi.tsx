import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function SobreMi() {
  const { sobreMi } = datosPortafolio

  return (
    <PageShell title="Sobre Mí">
      <div className="profile">
        <div className="profile__avatar">
          <img src={sobreMi.avatar} alt={sobreMi.nombre} />
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{sobreMi.nombre}</h2>
          <p className="profile__title">{sobreMi.headline}</p>
          <div className="profile__badges">
            <span className="profile__badge profile__badge--location">📍 {sobreMi.ubicacion}</span>
            <span className="profile__badge profile__badge--available">🟢 {sobreMi.disponibilidad}</span>
          </div>
        </div>
      </div>

      {/* Logros destacados */}
      <div className="stats-grid">
        {sobreMi.logros.map((logro, i) => (
          <div key={i} className="stat-card">
            <span className="stat-card__icon">{logro.icono}</span>
            <span className="stat-card__value">{logro.valor}</span>
            <span className="stat-card__label">{logro.etiqueta}</span>
          </div>
        ))}
      </div>

      {/* Biografía */}
      <div className="page-section">
        <h2 className="page-section__title">👋 Quién soy</h2>
        <div className="page-card">
          <p className="page-card__text" style={{ whiteSpace: 'pre-line' }}>{sobreMi.biografia}</p>
        </div>
      </div>

      {/* Aptitudes principales */}
      <div className="page-section">
        <h2 className="page-section__title">⭐ Aptitudes principales</h2>
        <div className="tech-tags">
          {sobreMi.aptitudesPrincipales.map(apt => (
            <span key={apt} className="tech-tag tech-tag--lg">{apt}</span>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
