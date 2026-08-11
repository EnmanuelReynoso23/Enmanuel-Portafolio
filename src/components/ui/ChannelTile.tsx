import type { Canal } from '@/types'
import { useTextos } from '@/i18n/useLanguage'
import './ChannelTile.css'

interface ChannelTileProps {
  canal: Canal
  index: number
  onClick?: () => void
  /** Este canal es el que se está arrastrando. */
  arrastrando?: boolean
  /** El canal arrastrado se soltaría aquí. */
  esObjetivo?: boolean
  onDragStart?: () => void
  onDragEnter?: () => void
  onDragEnd?: () => void
}

export function ChannelTile({
  canal,
  index,
  onClick,
  arrastrando = false,
  esObjetivo = false,
  onDragStart,
  onDragEnter,
  onDragEnd,
}: ChannelTileProps) {
  const t = useTextos()
  const movible = !canal.estaVacio && Boolean(onDragStart)

  const handleClick = () => {
    if (!canal.estaVacio && onClick) {
      onClick()
    }
  }

  return (
    <button
      className={[
        'channel-tile',
        canal.estaVacio ? 'channel-tile--empty' : '',
        arrastrando ? 'channel-tile--dragging' : '',
        esObjetivo ? 'channel-tile--target' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleClick}
      aria-label={canal.estaVacio ? t.canalVacio : `${t.abrirCanal} ${canal.titulo}`}
      style={{ '--enter-delay': `${index * 60}ms` } as React.CSSProperties}
      disabled={canal.estaVacio}
      draggable={movible}
      onDragStart={(e) => {
        if (!movible) return
        // Firefox no inicia el arrastre sin datos en el dataTransfer.
        e.dataTransfer.setData('text/plain', String(canal.id))
        e.dataTransfer.effectAllowed = 'move'
        onDragStart?.()
      }}
      onDragEnter={onDragEnter}
      onDragOver={(e) => {
        // Sin preventDefault el navegador no considera esto un destino válido.
        if (movible || esObjetivo) e.preventDefault()
      }}
      onDrop={(e) => {
        e.preventDefault()
        onDragEnd?.()
      }}
      onDragEnd={onDragEnd}
    >
      {!canal.estaVacio && (
        <>
          <div className="channel-tile__icon">
            {canal.icono && (
              typeof canal.icono === 'string'
                ? <img src={canal.icono} alt="" draggable={false} />
                : canal.icono
            )}
          </div>
          <span className="channel-tile__title">{canal.titulo}</span>
        </>
      )}
    </button>
  )
}
