import React from "react"

export interface StandardLayoutProps {
  children: React.ReactNode
}

export function FullscreenLayout({ children }: StandardLayoutProps) {
  return <div className="relative flex flex-1 [&>div]:flex-1">{children}</div>
}
