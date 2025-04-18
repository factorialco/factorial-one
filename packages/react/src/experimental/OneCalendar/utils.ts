import * as locales from "date-fns/locale"

// Get the locale object from date-fns/locale
export const getLocale = (localeKey: string) => {
  const key = localeKey.split("-")[0] // Handle both 'es' and 'es-ES' formats
  return locales[key as keyof typeof locales]
}
