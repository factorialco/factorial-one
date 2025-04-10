"use client"

import { createContext, ReactNode, useContext } from "react"
import { defaults } from "./l10n-provider-defaults"

export type L10nContextValue = {
  locale: string
}

const L10nContext = createContext<L10nContextValue>(defaults)

export interface L10nProviderProps {
  children: ReactNode
  l10n: L10nContextValue
}

export function L10nProvider({
  children,
  l10n,
}: L10nProviderProps): JSX.Element {
  return <L10nContext.Provider value={l10n}>{children}</L10nContext.Provider>
}

export function useL10n(): L10nContextValue {
  const context = useContext(L10nContext)

  if (context === null) {
    throw new Error("useI18n must be used within an I18nProvider")
  }

  return context
}
