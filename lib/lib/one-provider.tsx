import { Stack } from "@/components/Layout/Stack"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { cn } from "./utils"
import { XRayProvider } from "./xray"

interface LayoutProps {
  fullScreen?: boolean
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

  useEffect(() => {
    setElement(ref.current)
  }, [])

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
}> = ({ children, layout }) => {
  return (
    <LayoutProvider {...layout}>
      <XRayProvider>{children}</XRayProvider>
    </LayoutProvider>
  )
}
