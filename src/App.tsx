import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AudioProvider } from '@/context/AudioContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import { IntroScreen } from '@/components/layout/IntroScreen'
import { Home } from '@/pages/Home'
import { SobreMi } from '@/pages/SobreMi'
import { Habilidades } from '@/pages/Habilidades'
import { StackTecnico } from '@/pages/StackTecnico'
import { Experiencia } from '@/pages/Experiencia'
import { Proyecto } from '@/pages/Proyecto'
import { Educacion } from '@/pages/Educacion'
import { Certificaciones } from '@/pages/Certificaciones'
import { Idiomas } from '@/pages/Idiomas'
import { Recomendaciones } from '@/pages/Recomendaciones'
import { Repositorios } from '@/pages/Repositorios'
import { Contacto } from '@/pages/Contacto'
import { Configuracion } from '@/pages/Configuracion'
import './App.css'

const CLAVE_INTRO = 'portafolio:intro-visto'

function AppContent() {
  // El intro solo corresponde a la portada: un enlace directo lleva a su
  // sección sin pasos previos. En la portada se recuerda por sesión del
  // navegador para no repetirlo en cada carga.
  const [showIntro, setShowIntro] = useState(() => {
    if (window.location.pathname !== '/') return false
    try {
      return sessionStorage.getItem(CLAVE_INTRO) !== '1'
    } catch {
      return true
    }
  })

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem(CLAVE_INTRO, '1')
    } catch {
      // Modo privado o storage bloqueado: se vuelve a mostrar, no pasa nada.
    }
    setShowIntro(false)
  }

  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/habilidades" element={<Habilidades />} />
      <Route path="/stack-tecnico" element={<StackTecnico />} />
      <Route path="/experiencia" element={<Experiencia />} />
      <Route path="/proyecto/:id" element={<Proyecto />} />
      <Route path="/educacion" element={<Educacion />} />
      <Route path="/certificaciones" element={<Certificaciones />} />
      <Route path="/idiomas" element={<Idiomas />} />
      <Route path="/recomendaciones" element={<Recomendaciones />} />
      <Route path="/repositorios" element={<Repositorios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <AudioProvider>
            <AppContent />
          </AudioProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}


