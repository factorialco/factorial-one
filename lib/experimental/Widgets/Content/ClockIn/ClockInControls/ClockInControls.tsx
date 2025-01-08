import { Button } from "@/components/Actions/Button"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { ClockInGraph, ClockInGraphProps } from "../ClockInGraph"
import { CLOCK_IN_COLORS } from "../ClockInGraph/ClockInGraph"

export interface ClockInControlsProps {
  /** Optional remaining time in minutes */
  remainingMinutes?: number
  /** Clock in entries data */
  data: ClockInGraphProps["data"]
  /** Labels for all text content */
  labels: {
    clockedOut: string
    clockedIn: string
    onBreak: string
    clockIn: string
    clockOut: string
    break: string
    resume: string
    remainingTime: string
    overtime: string
  }
  /** Callback when Clock In button is clicked */
  onClockIn?: () => void
  /** Callback when Clock Out button is clicked */
  onClockOut?: () => void
  /** Callback when Break button is clicked */
  onBreak?: () => void
}

export function ClockInControls({
  remainingMinutes,
  data = [],
  labels,
  onClockIn,
  onClockOut,
  onBreak,
}: ClockInControlsProps) {
  const lastEntry = data[data.length - 1]
  const status = lastEntry?.variant || "clocked-out"

  const statusText = {
    "clocked-out": labels.clockedOut,
    "clocked-in": labels.clockedIn,
    break: labels.onBreak,
  }[status]

  const subtitle = (() => {
    if (!remainingMinutes) return

    const absRemainingMinutes = Math.abs(remainingMinutes)

    const hours = Math.floor(absRemainingMinutes / 60)
    const minutes = Math.floor(absRemainingMinutes % 60)

    const normalizedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

    if (remainingMinutes > 0) {
      return `${labels.remainingTime} ${normalizedTime}`
    }

    return `${labels.overtime} ${normalizedTime}`
  })()

  return (
    <div className="flex items-center gap-10">
      <div className="flex-1 space-y-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{statusText}</span>
            <div className="relative aspect-square h-4">
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  backgroundColor: CLOCK_IN_COLORS[status],
                }}
              />
              <div
                className="absolute inset-[3px] rounded-full"
                style={{
                  backgroundColor: CLOCK_IN_COLORS[status],
                }}
              />
            </div>
          </div>
          {subtitle && (
            <p className="text-f1-foreground-secondary">{subtitle}</p>
          )}
        </div>

        <div className="flex gap-2">
          {status === "clocked-out" && (
            <Button
              onClick={onClockIn}
              label={labels.clockIn}
              icon={SolidPlay}
            />
          )}

          {status === "clocked-in" && (
            <>
              <Button
                onClick={onBreak}
                label={labels.break}
                variant="neutral"
                icon={SolidPause}
                hideLabel
              />
              <Button
                onClick={onClockOut}
                label={labels.clockOut}
                variant="neutral"
                icon={SolidStop}
              />
            </>
          )}
          {status === "break" && (
            <>
              <Button
                onClick={onClockOut}
                label={labels.clockOut}
                variant="neutral"
                icon={SolidStop}
                hideLabel
              />
              <Button
                onClick={onClockIn}
                label={labels.resume}
                icon={SolidPlay}
              />
            </>
          )}
        </div>
      </div>
      <ClockInGraph data={data} remainingMinutes={remainingMinutes} />
    </div>
  )
}
