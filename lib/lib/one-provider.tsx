import { Stack } from "@/components/Layout/Stack"
import {
  ComponentProps,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { ImageContextValue, ImageProvider } from "./imageHandler"
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
          "bg-page-background h-screen w-screen": fullScreen,
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
  image?: ImageContextValue
  layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">
}> = ({ children, layout, link, image }) => {
  return (
    <LayoutProvider {...layout}>
      <XRayProvider>
        <LinkProvider {...link}>
          <ImageProvider {...image}>{children}</ImageProvider>
        </LinkProvider>
      </XRayProvider>
    </LayoutProvider>
  )
}
