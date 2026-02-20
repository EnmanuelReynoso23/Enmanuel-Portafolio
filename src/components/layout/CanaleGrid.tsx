import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChannelTile } from '@/components/ui/ChannelTile'
import { ChannelPreview } from '@/components/ui/ChannelPreview'
import { canales } from '@/data/channels'
import type { Canal } from '@/types'
import './ChannelGrid.css'

export const GRID_CONFIG = {
  columnas: 3,                // Número de tarjetas a lo ancho (ej. 3 o 4)
  filas: 2,                   // Número de tarjetas a lo alto (ej. 2 o 3)
  anchoMaximo: 1150,          // Ancho máximo total de la cuadrícula en px
  alturaMinimaTarjeta: 175,   // Altura mínima de cada tarjeta (px)
  alturaMaximaTarjeta: 225,   // Altura máxima de cada tarjeta (px)
  espaciado: 25,              // Espacio (gap) gris entre canales (px)
}

const CHANNELS_PER_PAGE = GRID_CONFIG.columnas * GRID_CONFIG.filas

export function ChannelGrid() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedChannel, setSelectedChannel] = useState<Canal | null>(null)
  const navigate = useNavigate()

  // Aseguramos tener múltiplos de 6 para páginas completas
  const totalPages = Math.ceil(Math.max(canales.length, 12) / CHANNELS_PER_PAGE)
  const totalSlots = totalPages * CHANNELS_PER_PAGE
  
  const canalesRellenos: Canal[] = [...canales]
  while (canalesRellenos.length < totalSlots) {
    canalesRellenos.push({
      id: 100 + canalesRellenos.length,
      titulo: '',
      icono: '',
      ruta: '',
      descripcion: '',
      estaVacio: true,
    })
  }

  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | ''>('')
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrevPage = () => {
    if (isAnimating) return
    setSlideDirection('left')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
      setIsAnimating(false)
      setSlideDirection('')
    }, 300)
  }

  const handleNextPage = () => {
    if (isAnimating) return
    setSlideDirection('right')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
      setIsAnimating(false)
      setSlideDirection('')
    }, 300)
  }

  const handleChannelClick = (canal: Canal) => {
    if (!canal.estaVacio) {
      setSelectedChannel(canal)
    }
  }

  const handleStartChannel = () => {
    if (selectedChannel) {
      navigate(selectedChannel.ruta)
    }
  }

  const handleClosePreview = () => {
    setSelectedChannel(null)
  }

  const handleNextPreview = () => {
    if (!selectedChannel) return
    const currentIndex = canales.findIndex(c => c.id === selectedChannel.id)
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % canales.length
      setSelectedChannel(canales[nextIndex])
    }
  }

  const handlePrevPreview = () => {
    if (!selectedChannel) return
    const currentIndex = canales.findIndex(c => c.id === selectedChannel.id)
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + canales.length) % canales.length
      setSelectedChannel(canales[prevIndex])
    }
  }

  // Cortar los canales para la página actual
  const currentChannels = canalesRellenos.slice(
    currentPage * CHANNELS_PER_PAGE,
    (currentPage + 1) * CHANNELS_PER_PAGE
  )

  const gridStyles = {
    '--grid-cols': GRID_CONFIG.columnas,
    '--tile-min-height': `${GRID_CONFIG.alturaMinimaTarjeta}px`,
    '--tile-max-height': `${GRID_CONFIG.alturaMaximaTarjeta}px`,
    '--grid-gap': `${GRID_CONFIG.espaciado}px`,
    '--grid-max-width': `${GRID_CONFIG.anchoMaximo}px`,
  } as React.CSSProperties

  return (
    <>
      <div className="channel-grid-container">
        <button className="nav-arrow nav-arrow--left" onClick={handlePrevPage} aria-label="Página anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="channel-grid-viewport" style={gridStyles}>
          <div className={`channel-grid ${slideDirection ? `slide-${slideDirection}` : ''}`} key={currentPage}>
            {currentChannels.map((canal, index) => (
              <ChannelTile 
                key={`${canal.id}-${currentPage}`} 
                canal={canal} 
                index={index} 
                onClick={() => handleChannelClick(canal)}
              />
            ))}
          </div>
        </div>

        <button className="nav-arrow nav-arrow--right" onClick={handleNextPage} aria-label="Página siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {selectedChannel && (
        <ChannelPreview 
          canal={selectedChannel} 
          onClose={handleClosePreview} 
          onStart={handleStartChannel} 
          onNext={handleNextPreview}
          onPrev={handlePrevPreview}
        />
      )}
    </>
  )
}
