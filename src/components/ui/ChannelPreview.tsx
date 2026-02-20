import { useState } from 'react'
import type { Canal } from '@/types'
import './ChannelPreview.css'

interface ChannelPreviewProps {
  canal: Canal
  onClose: () => void
  onStart: () => void
  onNext: () => void
  onPrev: () => void
}

export function ChannelPreview({ canal, onClose, onStart, onNext, onPrev }: ChannelPreviewProps) {
  const [isExiting, setIsExiting] = useState(false)
  const [isStarting, setIsStarting] = useState(false)

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(onClose, 300)
  }

  const handleStart = () => {
    setIsStarting(true)
    setTimeout(onStart, 750) // Aumentamos el tiempo a 750ms para una cámara más lenta y cinemática
  }

  return (
    <div className={`channel-preview-overlay ${isExiting ? 'fade-out' : 'fade-in'} ${isStarting ? 'zoom-in' : ''}`}>
      
      {/* Botones laterales para navegar entre previsualizaciones */}
      <button className="preview-nav-btn preview-nav-btn--left" onClick={onPrev}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button className="preview-nav-btn preview-nav-btn--right" onClick={onNext}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div className="channel-preview-content">
        
        {/* Ícono grande en el centro */}
        <div className="channel-preview-icon">
          <div className={canal.animacion || ''} style={{ width: '100%', height: '100%' }}>
            {canal.icono && (
              typeof canal.icono === 'string' 
                ? <img key={canal.icono} src={canal.icono} alt={canal.titulo} className="animate-icon" />
                : <div key={`icon-${canal.id}`} className="animate-icon">{canal.icono}</div>
            )}
          </div>
        </div>
        
        {/* Título y descripción */}
        <div className="channel-preview-info">
          <h1 className="channel-preview-title" key={`t-${canal.id}`}>{canal.titulo}</h1>
          <p className="channel-preview-desc" key={`d-${canal.id}`}>
            {canal.descripcion || 'Entra para explorar este canal.'}
          </p>
        </div>

        {/* Botones estilo Wii abajo */}
        <div className="channel-preview-buttons">
          <button className="preview-btn preview-btn--back" onClick={handleClose}>
            Menú de Wii
          </button>
          <button className="preview-btn preview-btn--start" onClick={handleStart}>
            Comenzar
          </button>
        </div>

      </div>
    </div>
  )
}
