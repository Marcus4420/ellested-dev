import type { TimelineEntry } from '../../data/timeline'
import { useInView } from '../../hooks/useInView'
import { useLocale } from '../../hooks/useLocale'

interface TimelineItemProps {
  entry: TimelineEntry
  isLast: boolean
}

export default function TimelineItem({ entry, isLast }: TimelineItemProps) {
  const { ref, inView } = useInView<HTMLLIElement>()
  const { locale, t } = useLocale()

  return (
    <li
      ref={ref}
      className={`relative flex gap-5 pb-10 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {!isLast && (
        <span className="absolute left-[19px] top-10 bottom-0 w-px bg-[var(--color-border)]" aria-hidden="true" />
      )}
      <div
        className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] ${
          entry.iconFit === 'contain' ? 'bg-white p-1.5' : 'bg-[var(--color-bg-raised)]'
        }`}
      >
        {entry.iconSrc ? (
          <img
            src={entry.iconSrc}
            alt=""
            className={entry.iconFit === 'contain' ? 'h-full w-full object-contain' : 'h-full w-full object-cover'}
            aria-hidden="true"
          />
        ) : (
          <span className="font-display text-xs font-semibold text-[var(--color-accent)]">
            {entry.iconLabel}
          </span>
        )}
      </div>
      <div className="pt-1">
        <time className="font-display text-xs font-medium uppercase tracking-wide text-[var(--color-fg-muted)]">
          {entry.dateRange}
        </time>
        <h3 className="mt-1 flex flex-wrap items-center gap-2 text-base font-semibold">
          <span>
            {entry.title[locale]} <span className="font-normal text-[var(--color-fg-muted)]">· {entry.org}</span>
          </span>
          {entry.current && (
            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
              {t.history.ongoing}
            </span>
          )}
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--color-fg-muted)]">
          {entry.bullets[locale].map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {entry.link && (
          <a
            href={entry.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-[var(--color-accent)] hover:underline"
          >
            {entry.link.label[locale]} ↗
          </a>
        )}
      </div>
    </li>
  )
}
