import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"
import { render, type RenderOptions } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import React, { type ReactElement } from "react"
import { I18nProvider, defaultTranslations } from "../lib/providers/i18n"
import { TrackingProvider } from "../lib/providers/tracking"

import { MotionGlobalConfig } from "motion"
MotionGlobalConfig.skipAnimations = true

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserPlatformProvider showExperimentalWarnings={false}>
      <TrackingProvider>
        <I18nProvider translations={defaultTranslations}>
          {children}
        </I18nProvider>
      </TrackingProvider>
    </UserPlatformProvider>
  )
}

const zeroRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { userEvent, zeroRender }
