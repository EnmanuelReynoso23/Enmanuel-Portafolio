import type { Canal } from '@/types'
import './ChannelTile.css'

interface ChannelTileProps {
  canal: Canal
  index: number
  onClick?: () => void
}

export function ChannelTile({ canal, index, onClick }: ChannelTileProps) {
  const handleClick = () => {
    if (!canal.estaVacio && onClick) {
      onClick()
    }
  }

  return (
    <button
      className={`channel-tile ${canal.estaVacio ? 'channel-tile--empty' : ''}`}
      onClick={handleClick}
      aria-label={canal.estaVacio ? 'Canal vacío' : `Abrir ${canal.titulo}`}
      style={{ '--enter-delay': `${index * 60}ms` } as React.CSSProperties}
      disabled={canal.estaVacio}
    >
      {!canal.estaVacio ? (
        <>
          <div className="channel-tile__icon">
            {canal.icono && (
              typeof canal.icono === 'string'
                ? <img src={canal.icono} alt="" />
                : canal.icono
            )}
          </div>
          <span className="channel-tile__title">{canal.titulo}</span>
        </>
      ) : (
        <span className="channel-tile--empty-text">Wii</span>
      )}
    </button>
  )
}
