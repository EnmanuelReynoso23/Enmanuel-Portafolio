import { PageShell } from '@/components/layout/PageShell'
import { useAudio } from '@/context/AudioContext'
import './pages.css'

export function Musica() {
  const { isPlaying, togglePlay } = useAudio()

  return (
    <PageShell title="Sistema de Música">
      <div className="page-section">
        <h2 className="page-section__title">Reproducción</h2>
        <div className="page-card">
          <button onClick={togglePlay} style={{ padding: '10px', borderRadius: '8px', border: '2px solid #ccc' }}>
            {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
          </button>
        </div>
      </div>
    </PageShell>
  )
}
