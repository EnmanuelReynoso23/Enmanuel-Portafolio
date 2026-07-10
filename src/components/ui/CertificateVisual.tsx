import type { Certificacion } from '@/types'
import './CertificateVisual.css'

interface CertificateVisualProps {
  cert: Certificacion
  nombre: string
}

/**
 * Representación visual tipo diploma de un certificado.
 * Si `cert.imagen` está definido, muestra la imagen/escaneo real;
 * de lo contrario, renderiza un certificado estilizado en pantalla.
 */
export function CertificateVisual({ cert, nombre }: CertificateVisualProps) {
  const accent = cert.color || '#00aaff'

  if (cert.imagen) {
    return (
      <div className="certificate certificate--photo" style={{ ['--cert-accent' as string]: accent }}>
        <img src={cert.imagen} alt={`Certificado: ${cert.titulo}`} className="certificate__img" />
      </div>
    )
  }

  return (
    <div className="certificate" style={{ ['--cert-accent' as string]: accent }}>
      <div className="certificate__frame">
        <div className="certificate__inner">
          <div className="certificate__main">
            <div className="certificate__seal" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="100%" height="100%">
                <circle cx="32" cy="26" r="18" fill="var(--cert-accent)" opacity="0.15" />
                <circle cx="32" cy="26" r="18" fill="none" stroke="var(--cert-accent)" strokeWidth="2" />
                <circle cx="32" cy="26" r="12" fill="none" stroke="var(--cert-accent)" strokeWidth="1.5" opacity="0.6" />
                <path d="M22 38 L18 58 L32 50 L46 58 L42 38 Z" fill="var(--cert-accent)" opacity="0.85" />
                <path d="M32 17 l2.5 5.2 5.7 .8 -4.1 4 1 5.7 -5.1 -2.7 -5.1 2.7 1 -5.7 -4.1 -4 5.7 -.8 z" fill="var(--cert-accent)" />
              </svg>
            </div>

            <span className="certificate__eyebrow">Certificado de finalización</span>
            <span className="certificate__entity">{cert.entidad}</span>

            <div className="certificate__divider" />

            <span className="certificate__awarded">Otorgado a</span>
            <span className="certificate__name">{nombre}</span>

            <h3 className="certificate__title">{cert.titulo}</h3>

            <div className="certificate__meta">
              <span>{cert.fecha}</span>
              {cert.horas && <span className="certificate__dot">·</span>}
              {cert.horas && <span>{cert.horas}</span>}
            </div>
          </div>

          <div className="certificate__footer">
            <div className="certificate__sign">
              <span className="certificate__sign-line" />
              <span className="certificate__sign-label">{cert.entidad}</span>
            </div>
            {cert.credencialId && (
              <span className="certificate__id">ID: {cert.credencialId}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
