import type { Project } from '../../data/projects'
import { useLocale } from '../../hooks/useLocale'

const statusStyles: Record<Project['status'], string> = {
  Planned: 'bg-[var(--color-fg-muted)]/10 text-[var(--color-fg-muted)]',
  'In Progress': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Completed: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'On Hold': 'bg-[var(--color-fg-muted)]/10 text-[var(--color-fg-muted)]',
}

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale()

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-raised)]">
      {project.imageUrl ? (
        <img src={project.imageUrl} alt="" className="h-36 w-full object-cover" aria-hidden="true" />
      ) : (
        <div className="flex h-36 w-full items-center justify-center border-b border-dashed border-[var(--color-border)]">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
            {t.projects.status.Planned}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold">{project.name}</h3>
          <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}>
            {t.projects.status[project.status]}
          </span>
        </div>
        <p className="text-sm text-[var(--color-fg-muted)]">{project.description[locale]}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-fg-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
              {t.projects.github} ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
              {t.projects.live} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
