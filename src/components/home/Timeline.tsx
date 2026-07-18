import { timeline, type TimelineCategory } from '../../data/timeline'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import TimelineItem from './TimelineItem'
import { useLocale } from '../../hooks/useLocale'

const CATEGORIES: TimelineCategory[] = ['work', 'education', 'volunteer']

export default function Timeline() {
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
      </Reveal>
      <div className="space-y-10">
        {CATEGORIES.map((category) => {
          const entries = timeline.filter((entry) => entry.category === category)
          return (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                {t.history[category]}
              </h3>
              <ul className="mt-4">
                {entries.map((entry, index) => (
                  <TimelineItem
                    key={`${entry.org}-${entry.dateRange}`}
                    entry={entry}
                    isLast={index === entries.length - 1}
                  />
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
