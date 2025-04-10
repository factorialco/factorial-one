import { render, type RenderOptions } from "@testing-library/react"
import type { ReactElement } from "react"
import { I18nProvider, defaultTranslations } from "./lib/providers/i18n"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
  )
}
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
