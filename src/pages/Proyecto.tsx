import { useParams, Navigate } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import { FileText, Sparkles, Wrench, Link2 } from 'lucide-react'
import './pages.css'

export function Proyecto() {
  const { id } = useParams<{ id: string }>()
  const proyectoId = parseInt(id || '0', 10)
  const { proyectos } = usePortafolio()
  const t = useTextos()
  const proyecto = proyectos.find(p => p.id === proyectoId)

  if (!proyecto) {
    return <Navigate to="/" replace />
  }

  return (
    // El título y el subtítulo ya los pinta la cabecera del shell:
    // repetirlos aquí duplicaba el nombre del proyecto en pantalla.
    <PageShell title={proyecto.titulo} subtitle={proyecto.subtitulo}>
      {proyecto.destacado && (
        <div className="project-hero">
          <span className="badge badge--featured">★ {t.proyectoDestacado}</span>
        </div>
      )}

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
        <h2 className="page-section__title">
            <span className="section-icon"><FileText size={17} /></span>
            {t.sobreProyecto}
          </h2>
        <div className="page-card">
          <p className="page-card__text" style={{ whiteSpace: 'pre-line' }}>{proyecto.descripcion}</p>
        </div>
      </div>

      {/* Características */}
      {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
        <div className="page-section">
          <h2 className="page-section__title">
            <span className="section-icon"><Sparkles size={17} /></span>
            {t.caracteristicas}
          </h2>
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
        <h2 className="page-section__title">
            <span className="section-icon"><Wrench size={17} /></span>
            {t.tecnologias}
          </h2>
        <div className="tech-tags">
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Enlaces */}
      {(proyecto.urlEnVivo || proyecto.urlRepositorio || proyecto.urlGooglePlay) && (
        <div className="page-section">
          <h2 className="page-section__title">
            <span className="section-icon"><Link2 size={17} /></span>
            {t.enlaces}
          </h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {proyecto.urlEnVivo && (
              <a href={proyecto.urlEnVivo} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ fontSize: '1.2rem' }}>🌐</div>
                <div style={{ flex: 1 }}>{t.verEnVivo}</div>
                <div>→</div>
              </a>
            )}
            {proyecto.urlGooglePlay && (
              <a href={proyecto.urlGooglePlay} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ fontSize: '1.2rem' }}>📱</div>
                <div style={{ flex: 1 }}>{t.verEnGooglePlay}</div>
                <div>→</div>
              </a>
            )}
            {proyecto.urlRepositorio && (
              <a href={proyecto.urlRepositorio} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ fontSize: '1.2rem' }}>💻</div>
                <div style={{ flex: 1 }}>{t.verRepositorio}</div>
                <div>→</div>
              </a>
            )}
          </div>
        </div>
      )}
    </PageShell>
  )
}
