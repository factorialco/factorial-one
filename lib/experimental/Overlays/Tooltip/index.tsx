import { Shortcut } from "@/experimental/Information/Shortcut"
import { cn } from "@/lib/utils"
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import React, { ComponentProps } from "react"

interface TooltipProps {
  label?: string
  description?: string
  children: React.ReactNode
  shortcut?: ComponentProps<typeof Shortcut>["keys"]
}

export function Tooltip({
  label,
  description,
  children,
  shortcut,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={cn("max-w-xs", shortcut && "pr-1.5")}>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              {label && <p className="font-semibold">{label}</p>}
              {shortcut && <Shortcut keys={shortcut} variant="inverse" />}
            </div>
            {description && <p className="font-normal">{description}</p>}
          </div>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}
