import { PageShell } from '@/components/layout/PageShell'
import { datosPortafolio } from '@/data/portfolio'
import './pages.css'

export function SobreMi() {
  const { sobreMi } = datosPortafolio

  return (
    <PageShell title="Sobre Mí">
      <div className="profile">
        <div className="profile__avatar">
          <img src={sobreMi.avatar} alt={sobreMi.nombre} />
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{sobreMi.nombre}</h2>
          <p className="profile__title">{sobreMi.titulo}</p>
          <p className="profile__location">{sobreMi.ubicacion}</p>
          <p className="profile__bio">{sobreMi.biografia}</p>
        </div>
      </div>
    </PageShell>
  )
}
