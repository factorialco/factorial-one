import { Badge } from "@/components/Information/Badge"
import { forwardRef } from "react"

interface TimeStatusProps {
  time: string
  status: "in" | "out" | "break"
  statusText: string
}

export const TimeStatus = forwardRef<HTMLDivElement, TimeStatusProps>(
  ({ time, status, statusText }, ref) => {
    const variant = {
      in: "positive",
      out: "critical",
      break: "neutral",
    } as const

    return (
      <div ref={ref} className="flex flex-row items-center gap-3">
        <p className="text-4xl font-medium">{time}</p>
        <span>
          <Badge text={statusText} hasDot={true} variant={variant[status]} />
        </span>
      </div>
    )
  }
)
