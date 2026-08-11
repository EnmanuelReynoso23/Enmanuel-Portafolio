import { useState } from 'react'
import { useAudio } from '@/context/AudioContext'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import './IntroScreen.css'

interface IntroScreenProps {
  onComplete: () => void
}

type Step = 'info' | 'music_ask' | 'music_declined'

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [step, setStep] = useState<Step>('info')
  const [isExiting, setIsExiting] = useState(false)
  const { togglePlay, isPlaying } = useAudio()
  const t = useTextos()
  const { nombre, headline, biografia, avatar } = usePortafolio().sobreMi

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
            <div className="intro-card__lang">
              <LanguageToggle />
            </div>
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
                {t.continuar}
              </button>
            </div>
          </div>
        )}

        {step === 'music_ask' && (
          <div className="intro-card fade-in">
            <div className="intro-card__body" style={{ textAlign: 'center', margin: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎵</div>
              <h2 style={{ marginBottom: '15px' }}>{t.preguntaMusica}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t.textoMusica}
              </p>
            </div>

            <div className="intro-card__footer" style={{ justifyContent: 'center', gap: '20px' }}>
              <button className="intro-btn intro-btn--secondary" onClick={handleMusicNo}>
                {t.noGracias}
              </button>
              <button className="intro-btn intro-btn--primary" onClick={handleMusicYes}>
                {t.siActivar}
              </button>
            </div>
          </div>
        )}

        {step === 'music_declined' && (
          <div className="intro-card fade-in">
            <div className="intro-card__body" style={{ textAlign: 'center', margin: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px', filter: 'grayscale(100%)' }}>🎵</div>
              <h2 style={{ marginBottom: '15px' }}>{t.musicaDesactivada}</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t.textoMusicaDesactivada}
              </p>
            </div>

            <div className="intro-card__footer" style={{ justifyContent: 'center' }}>
              <button className="intro-btn intro-btn--primary" onClick={handleUnderstood}>
                {t.entendido}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
