import React from "react"

export interface StandardLayoutProps {
  children: React.ReactNode
}

export function StandardLayout({ children }: StandardLayoutProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-5">
      {children}
    </div>
  )
}
