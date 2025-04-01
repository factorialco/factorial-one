import { forwardRef, ReactNode } from "react"
import { LayoutProvider } from "../LayoutProvider"

export type FullscreenLayoutProps = {
  children: ReactNode
}

export const FullscreenLayout = forwardRef<
  HTMLDivElement,
  FullscreenLayoutProps
>(({ children, ...props }, ref) => {
  return (
    <LayoutProvider layout="fullscreen">
      <div ref={ref} {...props} className="relative flex flex-1 [&>div]:flex-1">
        {children}
      </div>
    </LayoutProvider>
  )
})

FullscreenLayout.displayName = "FullscreenLayout"
