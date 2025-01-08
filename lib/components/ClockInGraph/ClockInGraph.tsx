import { Cell, Pie, PieChart } from "recharts"

export interface ClockInGraphProps {
  startAt?: Date
  endAt?: Date
  data?: {
    from: Date
    to: Date
    variant: "clocked-in" | "break"
  }[]
  /** Custom CSS classes */
  className?: string
}

const COLORS = {
  "clocked-in": "#10B883",
  break: "#F5A51C",
  empty: "#0526570F",
}

export function ClockInGraph({
  startAt = new Date(),
  endAt = new Date(),
  data = [],
}: ClockInGraphProps) {
  const leftEntry = {
    value:
      endAt.getTime() -
      (data?.[data.length - 1]?.to.getTime() ?? startAt.getTime()),
    color: COLORS["empty"],
  }

  const normalizedData = [
    ...data.map((entry) => ({
      value: entry.to.getTime() - entry.from.getTime(),
      color: COLORS[entry.variant],
    })),
    leftEntry,
  ]

  const primaryLabel = startAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const secondaryLabel = endAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const lastEntry = data[data.length - 1]

  const isLastEntryClockedIn = lastEntry?.variant === "clocked-in"

  // Calculate total clocked-in time in milliseconds
  const totalTime = isLastEntryClockedIn
    ? data.reduce((acc, entry) => {
        if (entry.variant === "clocked-in") {
          return acc + (entry.to.getTime() - entry.from.getTime())
        }
        return acc
      }, 0)
    : lastEntry?.to.getTime() - lastEntry?.from.getTime() || 0

  // Convert milliseconds to hours and minutes
  const hours = Math.floor(totalTime / (1000 * 60 * 60))
  const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60))

  const normalizedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

  return (
    <div className="relative h-40 w-40">
      <PieChart width={156} height={156}>
        {/* Main progress ring */}
        <Pie
          data={normalizedData}
          cx={74}
          cy={74}
          innerRadius={62}
          outerRadius={74}
          startAngle={225}
          endAngle={-45}
          paddingAngle={2}
          cornerRadius={4}
          dataKey="value"
          strokeWidth={0}
        >
          {normalizedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Time display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-semibold">{normalizedTime}</span>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 flex w-full justify-between px-8">
        <span className="text-sm font-medium opacity-60">{primaryLabel}</span>
        <span className="text-sm font-medium opacity-60">{secondaryLabel}</span>
      </div>
    </div>
  )
}
