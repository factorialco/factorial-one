import { Button } from "@/components/Actions/Button"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { formatTime24Hours } from "@/lib/date"
import { ClockInGraph } from "../ClockInGraph"

export interface ClockInControlsProps {
  /** Optional remaining time in minutes */
  remainingMinutes?: number
  /** Clock in entries data */
  data?: {
    from: Date
    to: Date
    variant: "clocked-in" | "break" | "clocked-out"
  }[]
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
  /** Callback when Resume button is clicked */
  onResume?: () => void
}

export function ClockInControls({
  remainingMinutes,
  data = [],
  labels,
  onClockIn,
  onClockOut,
  onBreak,
  onResume,
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

    if (remainingMinutes > 0) {
      // I would like to show the remaining time in the format of 00:00
      return `${labels.remainingTime} ${formatTime24Hours(new Date(remainingMinutes * 60 * 1000))}`
    }

    return `${labels.overtime} ${formatTime24Hours(new Date(remainingMinutes * 60 * 1000))}`
  })()

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 space-y-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{statusText}</span>
            {status !== "clocked-out" && (
              <div className="relative h-4 w-4">
                <div className="absolute inset-0 rounded-full bg-[#10B883]/20" />
                <div className="absolute inset-[3px] rounded-full bg-[#10B883]" />
              </div>
            )}
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
                onClick={onResume}
                label={labels.resume}
                icon={SolidPlay}
              />
            </>
          )}
        </div>
      </div>

      <div className="flex-1">
        <ClockInGraph data={data} remainingMinutes={remainingMinutes} />
      </div>
    </div>
  )
}
