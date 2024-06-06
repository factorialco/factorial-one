import { Stack } from "@/primitives/Layout/Stack"
import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { cn } from "./utils"
import { XRayProvider } from "./xray"

interface LayoutProps {
  fullScreen?: boolean
}

const LayoutContext = createContext<{ element: HTMLDivElement | null } | null>(
  null
)

export const useLayout = () => {
  const context = useContext(LayoutContext)
  if (!context)
    throw new Error("useLayout must be used within a LayoutProvider")
  return context
}

export const LayoutProvider: React.FC<
  { children: React.ReactNode } & LayoutProps
> = ({ children, fullScreen = true }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [element, setElement] = useState(ref.current)

  useLayoutEffect(() => {
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
