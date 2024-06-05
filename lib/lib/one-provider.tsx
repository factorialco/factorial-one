import { XRayProvider } from "./xray"

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen w-screen bg-page-background font-sans text-foreground">
      {children}
    </div>
  )
}

export const FactorialOneProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LayoutProvider>
      <XRayProvider>{children}</XRayProvider>
    </LayoutProvider>
  )
}
