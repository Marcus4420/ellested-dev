import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useLocale } from '../hooks/useLocale'

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const itemClass =
  'cursor-pointer rounded-md px-2 py-2 text-sm data-[selected=true]:bg-[var(--color-accent)] data-[selected=true]:text-[var(--color-accent-fg)]'
const groupClass = 'px-2 py-1.5 text-xs font-medium uppercase tracking-wide text-[var(--color-fg-muted)]'

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  function run(action: () => void) {
    onOpenChange(false)
    action()
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] shadow-2xl"
      overlayClassName="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-24 z-50 w-full max-w-md -translate-x-1/2 outline-none"
    >
      <Command.Input
        placeholder={t.palette.placeholder}
        className="w-full border-b border-[var(--color-border)] bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[var(--color-fg-muted)]"
      />
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="px-2 py-6 text-center text-sm text-[var(--color-fg-muted)]">
          {t.palette.noResults}
        </Command.Empty>
        <Command.Group heading={t.palette.navigate} className={groupClass}>
          <Command.Item onSelect={() => run(() => navigate('/'))} className={itemClass}>
            {t.palette.home}
          </Command.Item>
          <Command.Item onSelect={() => run(() => navigate('/projects'))} className={itemClass}>
            {t.palette.projects}
          </Command.Item>
          <Command.Item onSelect={() => run(() => navigate('/resume'))} className={itemClass}>
            {t.palette.resume}
          </Command.Item>
        </Command.Group>
        <Command.Group heading={t.palette.links} className={groupClass}>
          <Command.Item
            onSelect={() => run(() => window.open('https://github.com/Marcus4420', '_blank', 'noopener,noreferrer'))}
            className={itemClass}
          >
            {t.palette.openGithub}
          </Command.Item>
          <Command.Item
            onSelect={() =>
              run(() =>
                window.open(
                  'https://www.linkedin.com/in/marcus-ellested-39b729216/',
                  '_blank',
                  'noopener,noreferrer',
                ),
              )
            }
            className={itemClass}
          >
            {t.palette.openLinkedin}
          </Command.Item>
          <Command.Item
            onSelect={() => run(() => (window.location.href = 'mailto:Marcusellested02@gmail.com'))}
            className={itemClass}
          >
            {t.palette.emailMe}
          </Command.Item>
        </Command.Group>
        <Command.Group heading={t.palette.preferences} className={groupClass}>
          <Command.Item onSelect={() => run(toggleTheme)} className={itemClass}>
            {t.palette.toggleTheme}
          </Command.Item>
          <Command.Item onSelect={() => run(() => setLocale(locale === 'en' ? 'da' : 'en'))} className={itemClass}>
            {locale === 'en' ? 'Skift til dansk' : 'Switch to English'}
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
