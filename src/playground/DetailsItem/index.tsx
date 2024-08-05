import React from "react"
import { cn } from "../../../lib/lib/utils"

export interface DetailsItemType {
  title: string
  content: string | React.ReactNode
  className?: string
}

export const DetailsItem: React.FC<DetailsItemType> = ({
  title,
  content,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-[0.15rem]", className)}>
      <p className="text-sm text-secondary-foreground">{title}</p>
      <p className={cn("text-sm font-medium text-black")}>{content}</p>
    </div>
  )
}
