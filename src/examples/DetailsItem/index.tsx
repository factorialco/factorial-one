import React from "react"
import { cn } from "../../../lib/lib/utils"

export interface DetailsItemType {
  title: string
  content: string | React.ReactNode
  hasSeparation?: boolean
}

export const DetailsItem: React.FC<DetailsItemType> = ({
  title,
  content,
  hasSeparation,
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-secondary-foreground">{title}</p>
      <p
        className={cn(
          "text-sm font-medium text-black",
          hasSeparation && "mt-1"
        )}
      >
        {content}
      </p>
    </div>
  )
}
