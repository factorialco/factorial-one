import { MotionConfig } from "motion/react"
import {
  ComponentProps,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { I18nProvider, I18nProviderProps } from "../i18n"
import { L10nProvider, L10nProviderProps } from "../l10n"
import { UserPlatformProvider } from "../user-platafform"

import { ImageContextValue, ImageProvider } from "../../imageHandler"
import { LinkContextValue, LinkProvider } from "../../linkHandler"
import { PrivacyModeProvider } from "../../privacyMode"
import { cn } from "../../utils"
import { XRayProvider } from "../../xray"

interface LayoutProps {
  fullScreen?: boolean
  addBodyClasses?: boolean
}

const LayoutContext = createContext<{ element: HTMLElement | null } | null>(
  null
)

export const useLayout = () => {
  const context = useContext(LayoutContext)

  return {
    inLayoutContext: context !== null,
    element: context?.element || null,
  }
}

export const LayoutProvider: React.FC<
  { children: React.ReactNode } & LayoutProps
> = ({ children, fullScreen = true }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [element, setElement] = useState(ref.current)

  useIsomorphicLayoutEffect(() => {
    setElement(ref.current)
  }, [])

  return (
    <LayoutContext.Provider value={{ element }}>
      <div
        ref={ref}
        id="factorial-one-layout"
        className={cn({
          "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]":
            fullScreen,
        })}
      >
        {children}
      </div>
    </LayoutContext.Provider>
  )
}

const MotionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export const FactorialOneProvider: React.FC<{
  children: React.ReactNode
  link?: LinkContextValue
  privacyModeInitiallyEnabled?: boolean
  image?: ImageContextValue
  layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">
  i18n: Omit<I18nProviderProps, "children">
  l10n: Omit<L10nProviderProps, "children">
  isDev?: boolean
  showExperimentalWarnings?: boolean
}> = ({
  children,
  layout,
  link,
  privacyModeInitiallyEnabled,
  image,
  i18n,
  l10n,
  isDev = false,
  showExperimentalWarnings = false,
}) => {
  return (
    <MotionProvider>
      <UserPlatformProvider
        isDev={isDev}
        showExperimentalWarnings={showExperimentalWarnings}
      >
        <L10nProvider {...l10n}>
          <I18nProvider {...i18n}>
            <LinkProvider {...link}>
              <LayoutProvider {...layout}>
                <XRayProvider>
                  <PrivacyModeProvider
                    initiallyEnabled={privacyModeInitiallyEnabled}
                  >
                    <ImageProvider {...image}>{children}</ImageProvider>
                  </PrivacyModeProvider>
                </XRayProvider>
              </LayoutProvider>
            </LinkProvider>
          </I18nProvider>
        </L10nProvider>
      </UserPlatformProvider>
    </MotionProvider>
  )
}
