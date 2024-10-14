import { cn } from "@/lib/utils"
import React from "react"

export interface BaseLayoutProps {
  children: React.ReactNode
  className?: string
}

export function BaseLayout({ children, className = "" }: BaseLayoutProps) {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>{children}</div>
  )
}
