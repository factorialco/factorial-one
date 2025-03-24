import { CLOCK_IN_COLORS } from "../ClockInGraph"
import { ClockInControlsProps } from "./index"

export const getInfo = ({
  data = [],
  labels,
  remainingMinutes,
  canSeeRemainingTime = true,
}: Pick<
  ClockInControlsProps,
  "data" | "labels" | "remainingMinutes" | "canSeeRemainingTime"
>) => {
  const lastEntry = data[data.length - 1]
  const status = lastEntry?.variant || "clocked-out"

  const statusText = {
    "clocked-out": labels.clockedOut,
    "clocked-in": labels.clockedIn,
    break: labels.onBreak,
  }[status]

  const subtitle = (() => {
    if (!canSeeRemainingTime) return

    if (remainingMinutes === undefined) return

    const absRemainingMinutes = Math.abs(remainingMinutes)

    const hours = Math.floor(absRemainingMinutes / 60)
    const minutes = Math.floor(absRemainingMinutes % 60)

    const normalizedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

    if (remainingMinutes >= 0) {
      return `${labels.remainingTime} ${normalizedTime}`
    }

    return `${labels.overtime} ${normalizedTime}`
  })()

  const statusColor = CLOCK_IN_COLORS[status]

  return {
    status,
    statusText,
    subtitle,
    statusColor,
  }
}
