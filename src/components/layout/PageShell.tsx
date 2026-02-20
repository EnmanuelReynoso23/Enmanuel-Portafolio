import { useNavigate } from 'react-router-dom'
import './PageShell.css'
import type { ReactNode } from 'react'

interface PageShellProps {
  title: string
  children: ReactNode
}

export function PageShell({ title, children }: PageShellProps) {
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-shell__header">
        <button className="page-shell__back" onClick={() => navigate('/')}>
          ← Inicio
        </button>
        <h1 className="page-shell__title">{title}</h1>
      </header>
      <main className="page-shell__content">
        {children}
      </main>
    </div>
  )
}

