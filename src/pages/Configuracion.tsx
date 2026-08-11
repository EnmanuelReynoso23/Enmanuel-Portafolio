import { PageShell } from '@/components/layout/PageShell'
import { ToggleSwitch } from '@/components/ui/ToggleSwitch'
import { useTheme } from '@/context/ThemeContext'
import { useAudio } from '@/context/AudioContext'
import { useTextos } from '@/i18n/useLanguage'
import { useClock } from '@/hooks/useClock'
import { useState } from 'react'
import { Palette, Clock, Music, Info, LayoutGrid, RotateCcw } from 'lucide-react'
import { useCanales } from '@/data/channels'
import { useOrdenCanales } from '@/hooks/useOrdenCanales'
import './pages.css'

export function Configuracion() {
  const t = useTextos()
  const { restablecer, personalizado } = useOrdenCanales(useCanales())
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
    <PageShell title={t.tituloConfiguracion}>
      {/* Apariencia */}
      <div className="page-section">
        <h2 className="page-section__title">
          <span className="section-icon"><Palette size={17} /></span>
          {t.apariencia}
        </h2>
        <div className="page-card">
          <ToggleSwitch
            label={t.temaOscuro}
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </div>
      </div>

      {/* Orden de los canales */}
      <div className="page-section">
        <h2 className="page-section__title">
          <span className="section-icon"><LayoutGrid size={17} /></span>
          {t.ordenCanales}
        </h2>
        <div className="page-card">
          <p className="page-card__text" style={{ marginBottom: personalizado ? '14px' : 0 }}>
            {personalizado ? t.reordenarPista : t.ordenRestablecido}
          </p>
          {personalizado && (
            <button className="edu-card__cert-btn" onClick={restablecer}>
              <RotateCcw size={14} style={{ verticalAlign: '-2px', marginRight: '6px' }} />
              {t.restablecerOrden}
            </button>
          )}
        </div>
      </div>

      {/* Reloj */}
      <div className="page-section">
        <h2 className="page-section__title">
          <span className="section-icon"><Clock size={17} /></span>
          {t.reloj}
        </h2>
        <div className="page-card" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <ToggleSwitch
            label={t.formato24h}
            checked={clockFormat === '24h'}
            onChange={() => setClockFormat(clockFormat === '24h' ? '12h' : '24h')}
          />
          <ToggleSwitch
            label={t.mostrarAno}
            checked={dateFormat === 'long'}
            onChange={() => setDateFormat(dateFormat === 'long' ? 'short' : 'long')}
          />
        </div>
      </div>

      {/* Música */}
      <div className="page-section">
        <h2 className="page-section__title">
          <span className="section-icon"><Music size={17} /></span>
          {t.musicaDeFondo}
        </h2>
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
              placeholder={t.pegaEnlace}
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
        <h2 className="page-section__title">
          <span className="section-icon"><Info size={17} /></span>
          {t.informacion}
        </h2>
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
