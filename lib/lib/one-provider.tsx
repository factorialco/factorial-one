import { Stack } from "@/primitives/Layout/Stack"
import { cn } from "./utils"
import { XRayProvider } from "./xray"

interface LayoutProps {
  fullScreen?: boolean
}

export const LayoutProvider: React.FC<
  { children: React.ReactNode } & LayoutProps
> = ({ children, fullScreen = true }) => {
  return (
    <Stack
      className={cn("font-sans text-foreground", {
        "h-screen w-screen bg-page-background": fullScreen,
      })}
    >
      {children}
    </Stack>
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
