import { Button } from "@/components/Actions/Button"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { ClockInGraph } from "../ClockInGraph"

export interface ClockInControlsProps {
  /** Current status text */
  status: "clocked-out" | "clocked-in" | "on-break"
  /** Optional remaining time in minutes */
  remainingMinutes?: number
  /** Optional overtime text */
  overtimeText?: string
  /** Optional remaining time text */
  remainingTimeText?: string
  /** Clock in entries data */
  data?: {
    from: Date
    to: Date
    variant: "clocked-in" | "break" | "clocked-out"
  }[]
  /** Callback when Clock In button is clicked */
  onClockIn?: () => void
  /** Callback when Clock Out button is clicked */
  onClockOut?: () => void
  /** Callback when Break button is clicked */
  onBreak?: () => void
  /** Callback when Resume button is clicked */
  onResume?: () => void
}

const STATUS_TEXT = {
  "clocked-out": "Clocked out",
  "clocked-in": "Clocked in",
  "on-break": "On a break",
} as const

export function ClockInControls({
  status,
  remainingMinutes,
  overtimeText,
  remainingTimeText,
  data = [],
  onClockIn,
  onClockOut,
  onBreak,
  onResume,
}: ClockInControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 space-y-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{STATUS_TEXT[status]}</span>
            {status !== "clocked-out" && (
              <div className="relative h-4 w-4">
                <div className="absolute inset-0 rounded-full bg-[#10B883]/20" />
                <div className="absolute inset-[3px] rounded-full bg-[#10B883]" />
              </div>
            )}
          </div>
          {(remainingTimeText || overtimeText) && (
            <p className="text-f1-foreground-secondary">
              {overtimeText || remainingTimeText}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          {status === "clocked-out" && (
            <Button onClick={onClockIn} label="Clock in" icon={SolidPlay} />
          )}

          {status === "clocked-in" && (
            <>
              <Button
                onClick={onBreak}
                label="Pause"
                variant="neutral"
                icon={SolidPause}
                hideLabel
              />
              <Button
                onClick={onClockOut}
                label="Clock out"
                variant="neutral"
                icon={SolidStop}
              />
            </>
          )}
          {status === "on-break" && (
            <>
              <Button
                onClick={onClockOut}
                label="Clock out"
                variant="neutral"
                icon={SolidStop}
                hideLabel
              />
              <Button onClick={onResume} label="Resume" icon={SolidPlay} />
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
