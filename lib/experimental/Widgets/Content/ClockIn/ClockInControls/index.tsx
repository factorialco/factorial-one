import { Button } from "@/components/Actions/Button"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { cn } from "@/lib/utils"
import { ClockInGraph, ClockInGraphProps } from "../ClockInGraph"
import { getInfo } from "./helpers"

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
  collapsed?: boolean
}

export function ClockInControls({
  remainingMinutes,
  data = [],
  labels,
  onClockIn,
  onClockOut,
  onBreak,
  collapsed = false,
}: ClockInControlsProps) {
  const { status, statusText, subtitle, statusColor } = getInfo({
    data,
    labels,
    remainingMinutes,
  })

  return (
    <div
      className={cn("flex items-center gap-10", collapsed && "flex-col gap-2")}
    >
      <div className={cn("flex-1 space-y-4", collapsed && "order-2")}>
        <div
          className={cn(
            "space-y-0.5",
            collapsed && "flex flex-col items-center"
          )}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{statusText}</span>
            <div className="relative aspect-square h-4">
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  backgroundColor: statusColor,
                }}
              />
              <div
                className="absolute inset-[3px] rounded-full"
                style={{
                  backgroundColor: statusColor,
                }}
              />
            </div>
          </div>
          {subtitle && (
            <p className="text-f1-foreground-secondary">{subtitle}</p>
          )}
        </div>

        <div className={cn("flex gap-2", collapsed && "justify-center")}>
          {status === "clocked-out" && (
            <div className={cn(collapsed && "mr-3")}>
              <Button
                onClick={onClockIn}
                label={labels.clockIn}
                icon={SolidPlay}
              />
            </div>
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
