import { useState } from 'react'
import { datosPortafolio } from '@/data/portfolio'
import { useAudio } from '@/context/AudioContext'
import './IntroScreen.css'

interface IntroScreenProps {
  onComplete: () => void
}

type Step = 'info' | 'music_ask' | 'music_declined'

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [step, setStep] = useState<Step>('info')
  const [isExiting, setIsExiting] = useState(false)
  const { togglePlay, isPlaying } = useAudio()
  const { nombre, headline, biografia, avatar } = datosPortafolio.sobreMi

  const handleContinueInfo = () => {
    setStep('music_ask')
  }

  const finishIntro = () => {
    setIsExiting(true)
    setTimeout(() => {
      onComplete()
    }, 400) // Debe coincidir con introFadeOut en CSS
  }

  const handleMusicYes = () => {
    if (!isPlaying) togglePlay() // Activa la música
    finishIntro() // Pasa a la app con animación
  }

  const handleMusicNo = () => {
    setStep('music_declined')
  }

  const handleUnderstood = () => {
    finishIntro()
  }

  return (
    <div className={`intro-screen ${isExiting ? 'intro-screen--exiting' : ''}`}>
      <div className="intro-screen__container">
        
        {step === 'info' && (
          <div className="intro-card fade-in">
            <div className="intro-card__header">
              <img src={avatar} alt="Avatar" className="intro-card__avatar" />
              <div>
                <h1 className="intro-card__name">{nombre}</h1>
                <h2 className="intro-card__title">{headline}</h2>
              </div>
            </div>
            
            <div className="intro-card__body">
              <p>{biografia}</p>
            </div>

            <div className="intro-card__footer">
              <button className="intro-btn intro-btn--primary" onClick={handleContinueInfo}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === 'music_ask' && (
          <div className="intro-card fade-in">
            <div className="intro-card__body" style={{ textAlign: 'center', margin: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎵</div>
              <h2 style={{ marginBottom: '15px' }}>¿Deseas activar la música de fondo?</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                La experiencia original de este portafolio incluye música ambiente estilo retro.
              </p>
            </div>

            <div className="intro-card__footer" style={{ justifyContent: 'center', gap: '20px' }}>
              <button className="intro-btn intro-btn--secondary" onClick={handleMusicNo}>
                No, gracias
              </button>
              <button className="intro-btn intro-btn--primary" onClick={handleMusicYes}>
                Sí, activar música
              </button>
            </div>
          </div>
        )}

        {step === 'music_declined' && (
          <div className="intro-card fade-in">
            <div className="intro-card__body" style={{ textAlign: 'center', margin: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px', filter: 'grayscale(100%)' }}>🎵</div>
              <h2 style={{ marginBottom: '15px' }}>Música desactivada</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Recuerda que puedes activarla o cambiar la pista cuando lo desees usando el icono de música en la barra de control inferior.
              </p>
            </div>

            <div className="intro-card__footer" style={{ justifyContent: 'center' }}>
              <button className="intro-btn intro-btn--primary" onClick={handleUnderstood}>
                Entendido
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
