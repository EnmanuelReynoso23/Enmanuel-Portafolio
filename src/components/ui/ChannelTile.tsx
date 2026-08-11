import type { Canal } from '@/types'
import { useTextos } from '@/i18n/useLanguage'
import './ChannelTile.css'

interface ChannelTileProps {
  canal: Canal
  index: number
  onClick?: () => void
  /** Este canal es el que se está moviendo. */
  arrastrando?: boolean
  /** El canal en movimiento se soltaría aquí. */
  esObjetivo?: boolean
  /** Handlers de gesto (pulsación larga para reordenar). */
  gestos?: Record<string, unknown>
}

export function ChannelTile({
  canal,
  index,
  onClick,
  arrastrando = false,
  esObjetivo = false,
  gestos,
}: ChannelTileProps) {
  const t = useTextos()

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
      {...gestos}
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
