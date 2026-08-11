import { useState, useEffect } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { CertificateVisual } from '@/components/ui/CertificateVisual'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import type { Certificacion } from '@/types'
import './pages.css'

export function Certificaciones() {
  const { certificaciones, sobreMi } = usePortafolio()
  const t = useTextos()
  const [seleccionada, setSeleccionada] = useState<Certificacion | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSeleccionada(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <PageShell title={t.tituloCertificaciones}>
      <p className="page-intro">
        {t.introCertificaciones}
      </p>

      <div className="cert-gallery">
        {certificaciones.map((cert, index) => (
          <button
            key={index}
            className="cert-thumb"
            onClick={() => setSeleccionada(cert)}
            aria-label={`${t.verCertificado}: ${cert.titulo}`}
          >
            <CertificateVisual cert={cert} nombre={sobreMi.nombre} />
            <span className="cert-thumb__zoom">🔍 {t.ampliar}</span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {seleccionada && (
        <div className="cert-lightbox" onClick={() => setSeleccionada(null)}>
          <button className="cert-lightbox__close" onClick={() => setSeleccionada(null)} aria-label={t.cerrar}>✕</button>
          <div className="cert-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-lightbox__cert">
              {seleccionada.imagen ? (
                <img
                  src={seleccionada.imagen}
                  alt={`${t.verCertificado}: ${seleccionada.titulo}`}
                  className="cert-lightbox__photo"
                />
              ) : (
                <CertificateVisual cert={seleccionada} nombre={sobreMi.nombre} />
              )}
            </div>
            <div className="cert-lightbox__info">
              <h3 className="cert-lightbox__title">{seleccionada.titulo}</h3>
              <p className="cert-lightbox__entity">{seleccionada.entidad}</p>
              <div className="cert-lightbox__meta">
                <span>{seleccionada.fecha}</span>
                {seleccionada.horas && <span className="cert-card__hours">{seleccionada.horas}</span>}
              </div>
              {seleccionada.credencialId && (
                <p className="cert-lightbox__id">{t.idCredencial}: {seleccionada.credencialId}</p>
              )}
              {seleccionada.urlCredencial && (
                <a
                  href={seleccionada.urlCredencial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-lightbox__link"
                >
                  {t.verCredencial} →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </PageShell>
  )
}
