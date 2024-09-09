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
        <p className="text-sm text-neutral-100">{title}</p>
        <p className="text-sm font-medium text-neutral-100">{content}</p>
      </div>
    )
  }
)

DetailsItem.displayName = "DetailsItem"
