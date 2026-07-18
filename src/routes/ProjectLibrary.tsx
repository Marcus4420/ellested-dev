import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectSearch from '../components/projects/ProjectSearch'
import ProjectCard from '../components/projects/ProjectCard'
import { useDebouncedValue } from '../hooks/useDebouncedValue'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'

export default function ProjectLibrary() {
  useDocumentTitle('Projects · Marcus Ellested')
  const { locale, t } = useLocale()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebouncedValue(query, 200)

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase()
    if (!q) return projects
    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(q) ||
        project.description[locale].toLowerCase().includes(q) ||
        project.techs.some((tech) => tech.toLowerCase().includes(q)),
    )
  }, [debouncedQuery, locale])

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
      {projects.length > 1 && (
        <div className="mb-8 max-w-sm">
          <ProjectSearch value={query} onChange={setQuery} />
        </div>
      )}
      {filtered.length === 0 ? (
        <p className="text-sm text-[var(--color-fg-muted)]">{t.projects.noMatch(query)}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
