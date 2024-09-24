import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface EventProps {
  title: string
  subtitle: string
  description: string
  color: string
  isPending: boolean
}

export const Event = forwardRef<HTMLDivElement, EventProps>(
  ({ title, subtitle, description, color, isPending }, ref) => {
    return (
      <div ref={ref} className="flex flex-row items-center gap-3">
        <div
          className={cn("h-10 w-1 rounded-2xs")}
          style={
            isPending
              ? {
                  backgroundImage: `repeating-linear-gradient(
              135deg,
              ${color} 0px,
              ${color} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`,
                }
              : {
                  backgroundColor: color,
                }
          }
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-1">
            <p>{title}</p>
            <p className="text-f1-foreground-secondary">{subtitle}</p>
          </div>
          <p className="text-sm text-f1-foreground-secondary">{description}</p>
        </div>
      </div>
    )
  }
)
