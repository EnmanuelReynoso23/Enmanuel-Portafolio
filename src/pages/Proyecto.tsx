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

      {/* Descripción y Tecnologías */}
      <div className="page-section">
        <h2 className="page-section__title">🗒️ Sobre este proyecto</h2>
        <div className="page-card">
          <p className="page-card__text" style={{ whiteSpace: 'pre-line' }}>{proyecto.descripcion}</p>
          
          <div style={{ marginTop: '20px' }}>
            <h3 className="page-card__subtitle">🛠️ Tecnologías Usadas</h3>
            <div className="tech-tags">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enlaces */}
      {(proyecto.urlEnVivo || proyecto.urlRepositorio) && (
        <div className="page-section">
          <h2 className="page-section__title">🔗 Enlaces</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {proyecto.urlEnVivo && (
              <a 
                href={proyecto.urlEnVivo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <div style={{ fontSize: '1.2rem' }}>🌐</div>
                <div style={{ flex: 1 }}>Visitar sitio en vivo</div>
                <div>→</div>
              </a>
            )}
            
            {proyecto.urlRepositorio && (
              <a 
                href={proyecto.urlRepositorio} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link"
              >
                <div style={{ fontSize: '1.2rem' }}>💻</div>
                <div style={{ flex: 1 }}>Ver Código Fuente (Repo)</div>
                <div>→</div>
              </a>
            )}
          </div>
        </div>
      )}
    </PageShell>
  )
}
