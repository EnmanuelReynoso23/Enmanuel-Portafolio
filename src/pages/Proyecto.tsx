import { useParams, Navigate } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function Proyecto() {
  const { id } = useParams<{ id: string }>()
  const proyectoId = parseInt(id || '0', 10)
  const proyecto = datosPortafolio.proyectos.find(p => p.id === proyectoId)

  if (!proyecto) {
    return <Navigate to="/" replace />
  }

  return (
    <PageShell title={proyecto.titulo}>
      {/* Cabecera */}
      <div className="project-hero">
        <div className="project-hero__head">
          <h2 className="project-hero__title">{proyecto.titulo}</h2>
          {proyecto.destacado && <span className="badge badge--featured">★ Proyecto destacado</span>}
        </div>
        {proyecto.subtitulo && <p className="project-hero__subtitle">{proyecto.subtitulo}</p>}
      </div>

      {/* Imagen si la hay */}
      {proyecto.imagen && (
        <div style={{ marginBottom: '20px', borderRadius: '18px', overflow: 'hidden' }}>
          <img
            src={proyecto.imagen}
            alt={`Vista previa de ${proyecto.titulo}`}
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      )}

      {/* Logros */}
      {proyecto.logros && proyecto.logros.length > 0 && (
        <div className="project-achievements">
          {proyecto.logros.map((logro, i) => (
            <span key={i} className="project-achievement">{logro}</span>
          ))}
        </div>
      )}

      {/* Descripción */}
      <div className="page-section">
        <h2 className="page-section__title">🗒️ Sobre este proyecto</h2>
        <div className="page-card">
          <p className="page-card__text" style={{ whiteSpace: 'pre-line' }}>{proyecto.descripcion}</p>
        </div>
      </div>

      {/* Características */}
      {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
        <div className="page-section">
          <h2 className="page-section__title">✨ Características</h2>
          <div className="page-card">
            <ul className="feature-list">
              {proyecto.caracteristicas.map((c, i) => (
                <li key={i} className="feature-list__item">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tecnologías */}
      <div className="page-section">
        <h2 className="page-section__title">🛠️ Tecnologías</h2>
        <div className="tech-tags">
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Enlaces */}
      {(proyecto.urlEnVivo || proyecto.urlRepositorio || proyecto.urlGooglePlay) && (
        <div className="page-section">
          <h2 className="page-section__title">🔗 Enlaces</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {proyecto.urlEnVivo && (
              <a href={proyecto.urlEnVivo} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ fontSize: '1.2rem' }}>🌐</div>
                <div style={{ flex: 1 }}>Visitar sitio en vivo</div>
                <div>→</div>
              </a>
            )}
            {proyecto.urlGooglePlay && (
              <a href={proyecto.urlGooglePlay} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ fontSize: '1.2rem' }}>📱</div>
                <div style={{ flex: 1 }}>Descargar en Google Play</div>
                <div>→</div>
              </a>
            )}
            {proyecto.urlRepositorio && (
              <a href={proyecto.urlRepositorio} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ fontSize: '1.2rem' }}>💻</div>
                <div style={{ flex: 1 }}>Ver código fuente (Repo)</div>
                <div>→</div>
              </a>
            )}
          </div>
        </div>
      )}
    </PageShell>
  )
}
