import { PageShell } from '@/components/layout/PageShell'
import './pages.css'

export function Correo() {
  return (
    <PageShell title="Correo">
      <div className="page-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <h2 className="page-card__title" style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
          Buzón de Mensajes
        </h2>
        <p className="page-card__text">
          Esta sección estará disponible próximamente.
          Aquí podrás ver mensajes enviados a través del sitio.
        </p>
      </div>
    </PageShell>
  )
}
