import { GitHubIcon, LinkedInIcon } from '../ui/icons'
import CopyEmail from '../ui/CopyEmail'
import { useLocale } from '../../hooks/useLocale'

const buildDate = __BUILD_TIME__.slice(0, 10)

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-[var(--color-fg-muted)] sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Marcus Ellested</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Marcus4420"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--color-fg)]"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcus-ellested-39b729216/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--color-fg)]"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <CopyEmail
            email="Marcusellested02@gmail.com"
            label={t.footer.email}
            copiedLabel={t.footer.copied}
            className="hover:text-[var(--color-fg)]"
          />
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 pb-6 font-mono text-xs text-[var(--color-fg-muted)]/60">
        <a
          href={`https://github.com/Marcus4420/ellested-dev/commit/${__GIT_COMMIT__}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-fg-muted)]"
        >
          {__GIT_COMMIT__}
        </a>
        {' '}
        {t.footer.builtOn(buildDate)}
      </div>
    </footer>
  )
}
