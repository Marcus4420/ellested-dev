import { timeline } from '../../data/timeline'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import TimelineItem from './TimelineItem'
import { useLocale } from '../../hooks/useLocale'

export default function Timeline() {
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
      </Reveal>
      <ul>
        {timeline.map((entry, index) => (
          <TimelineItem key={`${entry.org}-${entry.dateRange}`} entry={entry} isLast={index === timeline.length - 1} />
        ))}
      </ul>
    </section>
  )
}
