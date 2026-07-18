import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLocale } from '../hooks/useLocale'

export default function NotFound() {
  useDocumentTitle('404 · Marcus Ellested')
  const { t } = useLocale()

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <SectionHeading eyebrow={t.notFound.eyebrow} title={t.notFound.title} />
      <p className="mx-auto max-w-md text-sm text-[var(--color-fg-muted)]">{t.notFound.message}</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-fg)] hover:opacity-90"
      >
        {t.notFound.backHome}
      </Link>
    </section>
  )
}
