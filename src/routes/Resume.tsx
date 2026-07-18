import { Link } from 'react-router-dom'
import { timeline, type TimelineCategory } from '../data/timeline'
import { skillGroups } from '../data/skills'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'

const CATEGORIES: TimelineCategory[] = ['work', 'education', 'volunteer']

export default function Resume() {
  useDocumentTitle('Resume · Marcus Ellested')
  const { locale, t } = useLocale()

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] print:bg-white print:text-gray-900">
      <div className="no-print sticky top-0 flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-3">
        <Link to="/" className="text-sm font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]">
          {t.resume.backToSite}
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-[var(--color-fg)] px-4 py-1.5 text-sm font-medium text-[var(--color-bg)] hover:opacity-90"
        >
          {t.resume.print}
        </button>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-12 print:px-0 print:py-0">
        <header className="border-b border-[var(--color-border)] pb-6 print:border-gray-200">
          <h1 className="text-3xl font-semibold">Marcus Ellested</h1>
          <p className="mt-1 text-[var(--color-fg-muted)] print:text-gray-600">{t.resume.subtitle}</p>
          <p className="mt-3 max-w-xl text-sm text-[var(--color-fg-muted)] print:text-gray-600">{t.hero.bio}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--color-fg-muted)] print:text-gray-600">
            <a href="mailto:Marcusellested02@gmail.com" className="hover:text-[var(--color-fg)] print:hover:text-gray-900">
              Marcusellested02@gmail.com
            </a>
            <a href="https://ellested.dev" className="hover:text-[var(--color-fg)] print:hover:text-gray-900">
              ellested.dev
            </a>
            <a href="https://github.com/Marcus4420" className="hover:text-[var(--color-fg)] print:hover:text-gray-900">
              github.com/Marcus4420
            </a>
            <a
              href="https://www.linkedin.com/in/marcus-ellested-39b729216/"
              className="hover:text-[var(--color-fg)] print:hover:text-gray-900"
            >
              linkedin.com/in/marcus-ellested
            </a>
          </div>
        </header>

        {CATEGORIES.map((category) => {
          const entries = timeline.filter((entry) => entry.category === category)
          return (
            <section key={category} className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fg-muted)] print:text-gray-500">
                {t.history[category]}
              </h2>
              <ul className="mt-4 space-y-6">
                {entries.map((entry) => (
                  <li key={`${entry.org}-${entry.dateRange}`} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="flex flex-wrap items-center gap-2 text-base font-semibold">
                        <span>
                          {entry.title[locale]}{' '}
                          <span className="font-normal text-[var(--color-fg-muted)] print:text-gray-500">
                            · {entry.org}
                          </span>
                        </span>
                        {entry.current && (
                          <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400 print:bg-gray-200 print:text-gray-800">
                            {t.history.ongoing}
                          </span>
                        )}
                      </h3>
                      <span className="text-xs font-medium text-[var(--color-fg-muted)] print:text-gray-500">
                        {entry.dateRange}
                      </span>
                    </div>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm text-[var(--color-fg)] print:text-gray-700">
                      {entry.bullets[locale].map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fg-muted)] print:text-gray-500">
            {t.resume.skills}
          </h2>
          <dl className="mt-4 space-y-2">
            {skillGroups.map((group) => (
              <div key={group.key} className="flex gap-3 text-sm">
                <dt className="w-32 shrink-0 font-medium text-[var(--color-fg-muted)] print:text-gray-500">
                  {t.skills.groups[group.key]}
                </dt>
                <dd className="text-[var(--color-fg)] print:text-gray-700">
                  {group.skills.map((skill) => skill.name).join(', ')}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  )
}
