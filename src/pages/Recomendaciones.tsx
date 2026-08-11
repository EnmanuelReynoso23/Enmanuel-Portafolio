import { useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import { usePortafolio, useTextos } from '@/i18n/useLanguage'
import type { Recomendacion } from '@/types'
import './pages.css'

function iniciales(nombre: string) {
  return nombre
    .replace(/^(Lic\.|Mtra\.|Mtro\.|Dr\.|Dra\.|Ing\.)\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export function Recomendaciones() {
  const { recomendaciones } = usePortafolio()
  const t = useTextos()
  const [abierta, setAbierta] = useState<Recomendacion | null>(null)

  return (
    <PageShell title={t.tituloRecomendaciones}>
      <p className="page-intro">
        {t.introRecomendaciones}
      </p>

      <div className="rec-grid">
        {recomendaciones.map((rec, index) => (
          <div key={index} className="rec-card" style={{ ['--rec-accent' as string]: rec.color || '#00aaff' }}>
            <div className="rec-card__quote">“</div>
            <p className="rec-card__text">{rec.resumen}</p>
            <div className="rec-card__author">
              <div className="rec-card__avatar">{iniciales(rec.autor)}</div>
              <div className="rec-card__meta">
                <span className="rec-card__name">{rec.autor}</span>
                <span className="rec-card__role">{rec.cargo}</span>
                <span className="rec-card__entity">{rec.entidad} · {rec.fecha}</span>
              </div>
            </div>
            <button className="rec-card__view" onClick={() => setAbierta(rec)}>
              📄 {t.verCarta}
            </button>
          </div>
        ))}
      </div>

      {abierta && (
        <ImageLightbox
          src={abierta.imagen}
          alt={`${t.cartaDe} ${abierta.autor}`}
          title={abierta.autor}
          subtitle={`${abierta.cargo} · ${abierta.entidad}`}
          onClose={() => setAbierta(null)}
        />
      )}
    </PageShell>
  )
}
