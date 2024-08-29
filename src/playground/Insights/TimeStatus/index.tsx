import { Badge } from "@/components/Information/Badge"

interface TimeStatusProps {
  time: string
  status: "in" | "out" | "break"
  statusText: string
}

export const TimeStatus: React.FC<TimeStatusProps> = ({
  time,
  status,
  statusText,
}) => {
  const variant = {
    in: "positive",
    out: "destructive",
    break: "neutral",
  } as const

  return (
    <div className="flex flex-row items-center gap-3">
      <p className="text-4xl font-medium">{time}</p>
      <span>
        <Badge text={statusText} hasDot={true} variant={variant[status]} />
      </span>
    </div>
  )
}
