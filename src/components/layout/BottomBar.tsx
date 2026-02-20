import { useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useClock } from '@/hooks/useClock'
import { useAudio } from '@/context/AudioContext'
import { datosPortafolio } from '@/data/portfolio'
import './BottomBar.css'

export function BottomBar() {
  const { timeString, dateString } = useClock()
  const navigate = useNavigate()
  const location = useLocation()
  const [showPlayer, setShowPlayer] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const { isPlaying, togglePlay, videoUrl, setVideoUrl } = useAudio()
  const [urlInput, setUrlInput] = useState(videoUrl)

  const isHome = location.pathname === '/'

  const closePlayer = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      setShowPlayer(false)
      setIsClosing(false)
    }, 200) // duración de la animación
  }, [])

  const applyUrl = () => {
    const trimmed = urlInput.trim()
    if (trimmed && trimmed !== videoUrl) {
      setVideoUrl(trimmed)
    }
  }

  if (!isHome) return null

  return (
    <div className="bottom-bar">
      <div className="bottom-bar__left">
        <button
          className="circle-btn"
          onClick={() => navigate('/configuracion')}
          title="Configuración"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="circle-btn__icon">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>

        {/* Enlace a GitHub */}
        <a
          href={datosPortafolio.contacto.github}
          target="_blank"
          rel="noopener noreferrer"
          className="circle-btn"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="circle-btn__icon" style={{ width: '22px', height: '22px' }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
        
      <div className="bottom-bar__center">
        <div className="bottom-bar__time">
          {timeString.replace(/ AM| PM/i, '')}
          <span className="bottom-bar__time-ampm">
            {timeString.includes('AM') ? 'AM' : timeString.includes('PM') ? 'PM' : ''}
          </span>
        </div>
        <span className="bottom-bar__date">{dateString}</span>
      </div>

      <div className="bottom-bar__right">
        {/* Enlace a LinkedIn */}
        <a
          href={datosPortafolio.contacto.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="circle-btn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="circle-btn__icon" style={{ width: '22px', height: '22px' }}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        {/* Panel Reproductor Desplegable */}
        {showPlayer && (
          <div className={`music-popup ${isClosing ? 'music-popup--closing' : ''}`}>
            <div className="music-popup__header">
              <span className="music-popup__title">🎵 Reproductor</span>
              <button className="music-popup__close" onClick={closePlayer}>✕</button>
            </div>

            {/* Miniatura del video */}
            <div className="music-popup__video">
              <img 
                src={(() => {
                  const match = videoUrl.match(/[?&]v=([^&]+)/)
                  const id = match ? match[1] : ''
                  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
                })()}
                alt="Video"
                className="music-popup__thumbnail"
              />
              <div className="music-popup__video-overlay">
                {isPlaying && <span className="music-popup__playing-indicator">♪ Reproduciendo...</span>}
              </div>
            </div>

            <div className="music-popup__controls">
              {/* Play / Pause */}
              <button className="music-popup__playpause" onClick={togglePlay}>
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><polygon points="5,3 19,12 5,21"/></svg>
                )}
                <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
              </button>

              {/* URL — sin botón de confirmar, aplica con Enter o al salir */}
              <div className="music-popup__url-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="music-popup__url-label">Enlace YouTube</label>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 'bold' }}>Presiona Enter ↵</span>
                </div>
                <input
                  type="text"
                  className="music-popup__url-input"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onBlur={applyUrl}
                  onKeyDown={(e) => { if (e.key === 'Enter') applyUrl() }}
                  placeholder="Pega el enlace y presiona Enter"
                />
              </div>
            </div>
          </div>
        )}

        {/* Botón de Música */}
        <button
          className={`circle-btn ${showPlayer ? 'circle-btn--active' : ''}`}
          onClick={() => showPlayer ? closePlayer() : setShowPlayer(true)}
          title="Música"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="circle-btn__icon">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </button>

      </div>
    </div>
  )
}
