interface SectionHeadingProps {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
    </div>
  )
}
