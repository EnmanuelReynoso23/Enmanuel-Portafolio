import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Certificaciones() {
  const { certificaciones } = datosPortafolio

  return (
    <PageShell title="Certificaciones">
      <p className="page-intro">
        Formación continua en desarrollo de software, tecnologías web e idiomas.
      </p>
      <div className="cert-grid">
        {certificaciones.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-card__badge">🎖️</div>
            <div className="cert-card__body">
              <h3 className="cert-card__title">{cert.titulo}</h3>
              <p className="cert-card__entity">{cert.entidad}</p>
              <div className="cert-card__meta">
                <span className="cert-card__date">{cert.fecha}</span>
                {cert.horas && <span className="cert-card__hours">{cert.horas}</span>}
              </div>
              {cert.credencialId && (
                <p className="cert-card__id">ID: {cert.credencialId}</p>
              )}
              {cert.urlCredencial && (
                <a
                  href={cert.urlCredencial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link"
                >
                  Ver credencial →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
