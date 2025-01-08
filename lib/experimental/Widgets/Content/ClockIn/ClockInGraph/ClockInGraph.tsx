import { formatTime24Hours } from "@/lib/date"
import { Cell, Pie, PieChart } from "recharts"

export type ClockInStatus = "clocked-in" | "break" | "clocked-out"

export interface ClockInGraphProps {
  data?: {
    from: Date
    to: Date
    variant: ClockInStatus
  }[]
  remainingMinutes?: number
}

export const CLOCK_IN_COLORS = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))",
}

const EMPTY_LABEL = "--:--"

export function ClockInGraph({
  data = [],
  remainingMinutes,
}: ClockInGraphProps) {
  const clockedInAt = data.find((entry) => entry.variant === "clocked-in")?.from
  const clockedOutAt = data.find(
    (entry) => entry.variant === "clocked-out"
  )?.from

  const lastEntry = data[data.length - 1]

  const lastClockedInEntry = data
    .slice()
    .reverse()
    .find((entry) => entry.variant === "clocked-in")

  const leftEntry = (() => {
    if (remainingMinutes && remainingMinutes > 0) {
      return {
        value: remainingMinutes,
        color: CLOCK_IN_COLORS.empty,
      }
    }

    if (remainingMinutes && remainingMinutes < 0) {
      return {
        value: Math.abs(remainingMinutes),
        color: CLOCK_IN_COLORS.overtime,
      }
    }

    return {
      value: 1,
      color: CLOCK_IN_COLORS.empty,
    }
  })()

  const normalizedData = [
    ...(remainingMinutes
      ? data.map((entry) => {
          const value = Math.floor(
            (entry.to.getTime() - entry.from.getTime()) / 60000
          )

          return {
            value,
            color: CLOCK_IN_COLORS[entry.variant],
          }
        })
      : []),
    leftEntry,
  ]

  const primaryLabel = clockedInAt
    ? formatTime24Hours(clockedInAt)
    : EMPTY_LABEL

  const secondaryLabel = (() => {
    if (remainingMinutes && remainingMinutes < 0) {
      return lastClockedInEntry
        ? formatTime24Hours(lastClockedInEntry.to)
        : EMPTY_LABEL
    }

    return clockedOutAt ? formatTime24Hours(clockedOutAt) : EMPTY_LABEL
  })()

  const isLastEntryClockedIn = lastEntry?.variant === "clocked-in"

  const totalTime = isLastEntryClockedIn
    ? data.reduce((acc, entry) => {
        if (entry.variant === "clocked-in") {
          return acc + (entry.to.getTime() - entry.from.getTime())
        }
        return acc
      }, 0)
    : lastEntry?.to.getTime() - lastEntry?.from.getTime() || 0

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
          isAnimationActive={false}
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
