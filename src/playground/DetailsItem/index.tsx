import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

export interface DetailsItemType {
  title: string
  content: string | React.ReactNode
  className?: string
}

export const DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  ({ title, content, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-[0.15rem]", className)}>
        <p className="text-f1-foreground-neutral text-sm">{title}</p>
        <p className="text-f1-foreground-neutral text-sm font-medium">
          {content}
        </p>
      </div>
    )
  }
)

DetailsItem.displayName = "DetailsItem"
