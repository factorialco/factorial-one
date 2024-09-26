import { Badge } from "@/components/Information/Badge"
import { forwardRef } from "react"

interface TimeStatusProps {
  title: string
  time: string
  status: "in" | "out" | "break"
  statusText: string
}

export const TimeStatus = forwardRef<HTMLDivElement, TimeStatusProps>(
  ({ time, status, statusText, title }, ref) => {
    const variant = {
      in: "positive",
      out: "neutral",
      break: "warning",
    } as const

    return (
      <div className="flex flex-col gap-2">
        <div
          ref={ref}
          className="flex flex-row items-center gap-3 text-f1-foreground-secondary"
        >
          <p className="mr-auto text-sm font-semibold uppercase">{title}</p>
          <Badge text={statusText} hasDot variant={variant[status]} />
        </div>
        <p className="text-3xl font-semibold">{time}</p>
      </div>
    )
  }
)
