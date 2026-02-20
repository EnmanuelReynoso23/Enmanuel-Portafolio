import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AudioProvider } from '@/context/AudioContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { IntroScreen } from '@/components/layout/IntroScreen'
import { Home } from '@/pages/Home'
import { SobreMi } from '@/pages/SobreMi'
import { Habilidades } from '@/pages/Habilidades'
import { StackTecnico } from '@/pages/StackTecnico'
import { Experiencia } from '@/pages/Experiencia'
import { Proyecto } from '@/pages/Proyecto'
import { Educacion } from '@/pages/Educacion'
import { Contacto } from '@/pages/Contacto'
import { Configuracion } from '@/pages/Configuracion'
import './App.css'

function AppContent() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
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
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/configuracion" element={<Configuracion />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AudioProvider>
          <AppContent />
        </AudioProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}


