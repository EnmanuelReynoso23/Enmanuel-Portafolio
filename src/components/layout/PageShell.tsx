import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import './PageShell.css'
import type { ReactNode } from 'react'

interface PageShellProps {
  title: string
  /** Línea de contexto bajo el título. Opcional. */
  subtitle?: string
  children: ReactNode
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-shell__header">
        <button
          className="page-shell__back"
          onClick={() => navigate('/')}
          aria-label="Volver al inicio"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          <span>Inicio</span>
        </button>
        <div className="page-shell__heading">
          <h1 className="page-shell__title">{title}</h1>
          {subtitle && <p className="page-shell__subtitle">{subtitle}</p>}
        </div>
      </header>
      <main className="page-shell__content">
        <div className="page-shell__container">{children}</div>
      </main>
    </div>
  )
}
