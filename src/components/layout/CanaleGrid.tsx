import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChannelTile } from '@/components/ui/ChannelTile'
import { ChannelPreview } from '@/components/ui/ChannelPreview'
import { useCanales } from '@/data/channels'
import { useOrdenCanales } from '@/hooks/useOrdenCanales'
import { useGestosCanales } from '@/hooks/useGestosCanales'
import { useTextos } from '@/i18n/useLanguage'
import type { Canal } from '@/types'
import { GRID_CONFIG, CHANNELS_PER_PAGE } from './gridConfig'
import './ChannelGrid.css'

const CLAVE_PAGINA = 'portafolio:pagina-canales'

function paginaGuardada(): number {
  try {
    const valor = sessionStorage.getItem(CLAVE_PAGINA)
    const n = valor ? parseInt(valor, 10) : 0
    return Number.isFinite(n) && n > 0 ? n : 0
  } catch {
    return 0
  }
}

export function ChannelGrid() {
  const t = useTextos()
  const { canales, mover } = useOrdenCanales(useCanales())

  // La página se recuerda: al volver de un canal de la segunda página,
  // antes se regresaba siempre a la primera.
  const [currentPage, setCurrentPage] = useState(paginaGuardada)
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

  const paginaValida = Math.min(currentPage, totalPages - 1)

  useEffect(() => {
    // Si el número de páginas se reduce, no dejar una página fuera de rango.
    if (paginaValida !== currentPage) setCurrentPage(paginaValida)
    try {
      sessionStorage.setItem(CLAVE_PAGINA, String(paginaValida))
    } catch {
      // Sin persistencia se comporta como antes.
    }
  }, [paginaValida, currentPage])

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

  const { arrastrado, objetivo, propsCanal, propsContenedor, arrastrando } = useGestosCanales({
    onMover: mover,
    onAnterior: handlePrevPage,
    onSiguiente: handleNextPage,
  })

  const handleChannelClick = (canal: Canal) => {
    // Al soltar un reordenado el navegador dispara también el click.
    if (arrastrando) return
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
    paginaValida * CHANNELS_PER_PAGE,
    (paginaValida + 1) * CHANNELS_PER_PAGE
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
        <button className="nav-arrow nav-arrow--left" onClick={handlePrevPage} aria-label={t.anterior}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="channel-grid-viewport" style={gridStyles} {...propsContenedor}>
          <div
            className={`channel-grid ${slideDirection ? `slide-${slideDirection}` : ''} ${arrastrando ? 'channel-grid--reordenando' : ''}`}
            key={paginaValida}
          >
            {currentChannels.map((canal, index) => (
              <ChannelTile
                key={`${canal.id}-${paginaValida}`}
                canal={canal}
                index={index}
                onClick={() => handleChannelClick(canal)}
                arrastrando={arrastrado === canal.id}
                esObjetivo={objetivo === canal.id}
                gestos={propsCanal(canal.id, !canal.estaVacio)}
              />
            ))}
          </div>
          <p className="channel-grid__hint">{t.reordenarPista}</p>

          {totalPages > 1 && (
            <div className="channel-grid__dots" role="tablist" aria-label={t.paginas}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === paginaValida}
                  aria-label={`${t.pagina} ${i + 1}`}
                  className={`channel-grid__dot ${i === paginaValida ? 'is-active' : ''}`}
                  onClick={() => setCurrentPage(i)}
                />
              ))}
            </div>
          )}
        </div>

        <button className="nav-arrow nav-arrow--right" onClick={handleNextPage} aria-label={t.siguiente}>
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
