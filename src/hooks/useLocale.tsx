import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Locale } from '../i18n/translations'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof translations)['en']
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getInitialLocale(): Locale {
  const stored = localStorage.getItem('locale')
  return stored === 'da' ? 'da' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
