import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

export interface DetailsItemType {
  title: string
  content: string | React.ReactNode
}

export const DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  function DetailsItem({ title, content }, ref) {
    const hasBiggerGap = typeof content !== "string"
    return (
      <div
        ref={ref}
        className={cn("flex flex-col", hasBiggerGap ? "gap-2" : "gap-1")}
      >
        <p className="text-f1-foreground-secondary">{title}</p>
        <p className="font-medium text-f1-foreground">{content}</p>
      </div>
    )
  }
)
