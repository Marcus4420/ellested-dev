import { NavLink } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useLocale } from '../../hooks/useLocale'
import { MoonIcon, SunIcon } from '../ui/icons'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]'
  }`

interface NavbarProps {
  onOpenPalette: () => void
}

export default function Navbar({ onOpenPalette }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-base font-semibold">
          Marcus Ellested
        </NavLink>
        <nav className="flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            {t.nav.projects}
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            {t.nav.resume}
          </NavLink>
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden items-center gap-1.5 rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)] sm:flex"
          >
            <span>{t.nav.search}</span>
            <kbd className="font-mono text-[10px]">⌘K</kbd>
          </button>
          <button
            type="button"
            onClick={() => setLocale(locale === 'en' ? 'da' : 'en')}
            aria-label="Switch language"
            className="rounded-full px-2 py-1 text-xs font-medium text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            {locale === 'en' ? 'DA' : 'EN'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full p-2 text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
          >
            {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
        </nav>
      </div>
    </header>
  )
}
