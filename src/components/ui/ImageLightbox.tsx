import { useEffect } from 'react'
import './ImageLightbox.css'

interface ImageLightboxProps {
  src: string
  alt: string
  title?: string
  subtitle?: string
  onClose: () => void
}

export function ImageLightbox({ src, alt, title, subtitle, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="img-lightbox" onClick={onClose}>
      <button className="img-lightbox__close" onClick={onClose} aria-label="Cerrar">✕</button>
      <div className="img-lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="img-lightbox__img" />
        {(title || subtitle) && (
          <div className="img-lightbox__caption">
            {title && <span className="img-lightbox__title">{title}</span>}
            {subtitle && <span className="img-lightbox__subtitle">{subtitle}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
