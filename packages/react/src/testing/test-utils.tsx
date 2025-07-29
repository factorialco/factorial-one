import { render, type RenderOptions } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import React, { type ReactElement } from "react"
import { I18nProvider, defaultTranslations } from "../lib/providers/i18n"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
  )
}

const zeroRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { userEvent, zeroRender }
