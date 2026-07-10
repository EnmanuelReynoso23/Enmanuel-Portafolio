import { PageShell } from '@/components/layout/PageShell'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'
import { useTheme } from '@/context/ThemeContext'
import { useAudio } from '@/context/AudioContext'
import { useClock } from '@/hooks/useClock'
import { useState } from 'react'
import './pages.css'

export function Configuracion() {
  const { theme, toggleTheme } = useTheme()
  const { videoUrl, setVideoUrl } = useAudio()
  const { clockFormat, dateFormat, setClockFormat, setDateFormat } = useClock()
  const [urlInput, setUrlInput] = useState(videoUrl)

  const applyUrl = () => {
    const trimmed = urlInput.trim()
    if (trimmed && trimmed !== videoUrl) {
      setVideoUrl(trimmed)
    }
  }

  return (
    <PageShell title="Configuración">
      {/* Apariencia */}
      <div className="page-section">
        <h2 className="page-section__title">🎨 Apariencia</h2>
        <div className="page-card">
          <ToggleSwitch
            label="Tema oscuro"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </div>
      </div>

      {/* Reloj */}
      <div className="page-section">
        <h2 className="page-section__title">🕐 Reloj</h2>
        <div className="page-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <ToggleSwitch
            label="Formato 24 horas"
            checked={clockFormat === '24h'}
            onChange={() => setClockFormat(clockFormat === '24h' ? '12h' : '24h')}
          />
          <ToggleSwitch
            label="Mostrar año en la fecha"
            checked={dateFormat === 'long'}
            onChange={() => setDateFormat(dateFormat === 'long' ? 'short' : 'long')}
          />
        </div>
      </div>

      {/* Música */}
      <div className="page-section">
        <h2 className="page-section__title">🎵 Música de fondo</h2>
        <div className="page-card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Enlace de YouTube
            </label>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              onBlur={applyUrl}
              onKeyDown={(e) => { if (e.key === 'Enter') applyUrl() }}
              placeholder="Pega el enlace y presiona Enter"
              style={{
                padding: '10px 14px',
                border: '2px solid var(--input-border, #ccc)',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
                outline: 'none',
                width: '100%',
                boxSizing: 'border-box' as const,
                background: 'var(--input-bg, white)',
                color: 'var(--text-primary)',
              }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Cambia el video de YouTube que se reproduce como música de fondo. Presiona Enter para aplicar.
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="page-section">
        <h2 className="page-section__title">ℹ️ Información</h2>
        <div className="page-card">
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Portafolio interactivo de Enmanuel Reynoso Salazar. Navega por los canales
            para conocer mi experiencia, proyectos, habilidades y certificaciones.
          </p>
        </div>
      </div>
    </PageShell>
  )
}
