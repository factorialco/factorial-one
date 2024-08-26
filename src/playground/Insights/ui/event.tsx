import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface EventProps {
  title: string
  length: number
  lengthUnit: string
  from: string
  until: string
  color: string
  isPending: boolean
}

export const Event = forwardRef<HTMLDivElement, EventProps>(
  ({ title, length, lengthUnit, from, until, color, isPending }, ref) => {
    const subtitle = `(${length} ${lengthUnit})`
    const timePeriod = `${from} - ${until}`

    return (
      <div ref={ref} className="flex flex-row items-center gap-3">
        <div
          className={cn("h-10 w-1 rounded-sm")}
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
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <p className="text-sm text-muted-foreground">{timePeriod}</p>
        </div>
      </div>
    )
  }
)
