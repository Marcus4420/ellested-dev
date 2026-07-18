import { skillGroups } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { useLocale } from '../../hooks/useLocale'

export default function Skills() {
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
        <div className="grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-medium text-[var(--color-fg-muted)]">{t.skills.groups[group.key]}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    <img src={skill.icon} alt="" className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
