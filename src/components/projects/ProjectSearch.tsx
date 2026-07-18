import { SearchIcon } from '../ui/icons'
import { useLocale } from '../../hooks/useLocale'

interface ProjectSearchProps {
  value: string
  onChange: (value: string) => void
}

export default function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  const { t } = useLocale()

  return (
    <div className="relative">
      <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-fg-muted)]" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t.projects.searchPlaceholder}
        className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[var(--color-accent)]"
      />
    </div>
  )
}
