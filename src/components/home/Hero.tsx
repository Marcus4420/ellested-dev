import portraitImg from '../../assets/MarcusSkjorte2_3.jpg'
import Button from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/icons'
import { useLocale } from '../../hooks/useLocale'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 px-6 pb-20 pt-16 sm:pt-24 lg:flex-row lg:items-center">
      <div className="text-center lg:text-left">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          Marcus Ellested
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-fg-muted)]">
          {t.hero.bio}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <Button href="https://github.com/Marcus4420" variant="solid">
            <GitHubIcon className="h-4 w-4" />
            {t.hero.github}
          </Button>
          <Button href="https://www.linkedin.com/in/marcus-ellested-39b729216/">
            <LinkedInIcon className="h-4 w-4" />
            {t.hero.linkedin}
          </Button>
        </div>
      </div>
      <img
        src={portraitImg}
        alt="Marcus Ellested"
        className="h-40 w-40 flex-shrink-0 rounded-full object-cover object-[center_20%] shadow-lg sm:h-48 sm:w-48"
      />
    </section>
  )
}
