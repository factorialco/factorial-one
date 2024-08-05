import { Stack } from "@/components/Layout/Stack"
import {
  ComponentProps,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { LinkContextValue, LinkProvider } from "./linkHandler"
import { cn } from "./utils"
import { XRayProvider } from "./xray"

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
      <Stack
        ref={ref}
        id="factorial-one-layout"
        className={cn({
          "h-screen w-screen bg-page-background": fullScreen,
        })}
      >
        {children}
      </Stack>
    </LayoutContext.Provider>
  )
}

export const FactorialOneProvider: React.FC<{
  children: React.ReactNode
  link?: LinkContextValue
  layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">
}> = ({ children, layout, link }) => {
  return (
    <LayoutProvider {...layout}>
      <XRayProvider>
        <LinkProvider {...link}>{children}</LinkProvider>
      </XRayProvider>
    </LayoutProvider>
  )
}
