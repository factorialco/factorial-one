import { Stack } from "@/components/Layout/Stack"
import { ActivityProvider } from "@/components/Overlays/Activity"
import {
  ComponentProps,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
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
> = ({ children, fullScreen = true, addBodyClasses = true }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [element, setElement] = useState(ref.current)

  useIsomorphicLayoutEffect(() => {
    setElement(ref.current)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!addBodyClasses) return

    const classNames = cn("font-sans text-foreground").split(" ")
    document.body.classList.add(...classNames)

    return () => document.body.classList.remove(...classNames)
  }, [addBodyClasses])

  return (
    <LayoutContext.Provider value={{ element }}>
      <Stack
        ref={ref}
        className={cn("font-sans text-foreground", {
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
  layout?: LayoutProps
  activity?: ComponentProps<typeof ActivityProvider>
}> = ({ children, layout, activity }) => {
  return (
    <LayoutProvider {...layout}>
      <ActivityProvider {...activity}>
        <XRayProvider>{children}</XRayProvider>
      </ActivityProvider>
    </LayoutProvider>
  )
}
