import React, { forwardRef } from "react"
import { cn } from "../../../lib/lib/utils"

export interface DetailsItemType {
  title: string
  content: string | React.ReactNode
  className?: string
}

export const DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  ({ title, content, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-[0.15rem]", className)}>
        <p className="text-sm text-secondary-foreground">{title}</p>
        <p className="text-sm font-medium text-black">{content}</p>
      </div>
    )
  }
)

DetailsItem.displayName = "DetailsItem"
