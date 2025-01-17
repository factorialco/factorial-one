"use client"

import { createContext, ReactNode, useContext } from "react"
import defaultTranslations from "../../i18n.json"

export type TranslationsType = typeof defaultTranslations

const I18nContext = createContext<TranslationsType | null>(null)

export interface I18nProviderProps {
  children: ReactNode
  translations: TranslationsType
}

export function I18nProvider({
  children,
  translations,
}: I18nProviderProps): JSX.Element {
  return (
    <I18nContext.Provider value={translations}>{children}</I18nContext.Provider>
  )
}

export function useI18n(): TranslationsType {
  const context = useContext(I18nContext)

  if (context === null) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}

export const buildTranslations = (
  translations: TranslationsType
): TranslationsType => {
  return translations
}

export { defaultTranslations }

// Type helper for creating translation objects that match the expected shape
export type I18nStrings = TranslationsType
