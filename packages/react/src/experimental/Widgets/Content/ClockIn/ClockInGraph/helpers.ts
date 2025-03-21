import { formatTime24Hours } from "../../../../../lib/date"
import { CLOCK_IN_COLORS, ClockInGraphProps } from "./index"

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

  const lastEntry = data.at(-1)

  const primaryLabel = clockedInAt
    ? formatTime24Hours(clockedInAt)
    : EMPTY_LABEL

  const secondaryLabel = (() => {
    if (remainingMinutes === undefined || remainingMinutes > 0)
      return EMPTY_LABEL

    return lastEntry ? formatTime24Hours(lastEntry.to) : EMPTY_LABEL
  })()

  const isLastEntryBreak = lastEntry?.variant === "break"

  const totalTime = !isLastEntryBreak
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
