import { DataList } from "@/experimental/Lists/DataList"
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
        <p className="pl-1.5 text-f1-foreground-secondary">{title}</p>
        {typeof content === "string" ? (
          <DataList.ItemWithCopyButton text={content} />
        ) : (
          content
        )}
      </div>
    )
  }
)
