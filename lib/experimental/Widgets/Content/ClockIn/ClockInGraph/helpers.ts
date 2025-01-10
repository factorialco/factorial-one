import { formatTime24Hours } from "@/lib/date"
import { CLOCK_IN_COLORS, ClockInGraphProps } from "."

const EMPTY_LABEL = "--:--"

const getLeftEntry = (remainingMinutes?: number) => {
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
}

export const normalizeData = (
  data: ClockInGraphProps["data"] = [],
  remainingMinutes?: number
) => {
  const leftEntry = getLeftEntry(remainingMinutes)

  return [
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
}

export const getLabels = ({
  data = [],
  remainingMinutes,
}: ClockInGraphProps) => {
  const clockedInAt = data.find((entry) => entry.variant === "clocked-in")?.from
  const clockedOutAt = data.find(
    (entry) => entry.variant === "clocked-out"
  )?.from

  const lastEntry = data[data.length - 1]

  const lastClockedInEntry = data
    .slice()
    .reverse()
    .find((entry) => entry.variant === "clocked-in")

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

  return {
    primaryLabel,
    secondaryLabel,
    time: normalizedTime,
  }
}
