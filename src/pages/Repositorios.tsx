import { PageShell } from '@/components/layout/PageShell'
import { repositorios, USUARIO_GITHUB, type GrupoRepositorio } from '@/data/repositorios'
import { useLanguage } from '@/i18n/useLanguage'
import './pages.css'

export function Repositorios() {
  const { t, lang } = useLanguage()

  const grupos: { id: GrupoRepositorio; titulo: string; nota?: string }[] = [
    { id: 'propios', titulo: t.grupoReposPropios },
    { id: 'equipo', titulo: t.grupoReposEquipo },
    { id: 'personales', titulo: t.grupoReposPersonales },
    { id: 'terceros', titulo: t.grupoReposTerceros, nota: t.notaReposTerceros },
  ]

  return (
    <PageShell title={t.tituloRepositorios}>
      <p className="page-intro">{t.introRepositorios}</p>
      {grupos.map(grupo => (
        <section key={grupo.id} className="page-section">
          <h2 className="page-section__title">{grupo.titulo}</h2>
          {grupo.nota && <p className="repo-note">{grupo.nota}</p>}
          <div className="repo-list">
            {repositorios
              .filter(repo => repo.grupo === grupo.id)
              .map(repo => (
                <a
                  key={repo.nombre}
                  className="repo-card"
                  href={`https://github.com/${USUARIO_GITHUB}/${repo.nombre}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="repo-card__header">
                    <span className="repo-card__name">{repo.nombre}</span>
                    {repo.lenguaje && <span className="repo-card__language">{repo.lenguaje}</span>}
                  </span>
                  <span className="repo-card__description">{repo.descripcion[lang]}</span>
                </a>
              ))}
          </div>
        </section>
      ))}
    </PageShell>
  )
}
