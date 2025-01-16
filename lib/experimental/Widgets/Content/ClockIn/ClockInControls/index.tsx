import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import SuitcaseIcon from "@/icons/app/Suitcase"
import { motion } from "framer-motion"
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
  location?: {
    name: string
    icon: IconType
  }
  projectName?: string
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
  location,
  projectName,
  onClockIn,
  onClockOut,
  onBreak,
}: ClockInControlsProps) {
  const { status, statusText, subtitle, statusColor } = getInfo({
    data,
    labels,
    remainingMinutes,
  })

  return (
    <div className="@container">
      <div className="flex-grow flex-col">
        <div className="flex flex-col-reverse items-center gap-2 @xs:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col items-center space-y-0.5 @xs:items-start">
              <div className="flex items-center gap-2">
                <span className="line-clamp-1 text-xl font-semibold">
                  {statusText}
                </span>
                <div className="relative aspect-square h-4">
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{
                      backgroundColor: statusColor,
                    }}
                    initial={{ scale: 0.5, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
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
                <p className="line-clamp-1 text-f1-foreground-secondary">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex justify-center gap-2 @xs:justify-start">
              {status === "clocked-out" && (
                <div className="mr-3 @xs:mr-0">
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
        <div className="mt-6 flex flex-row items-center justify-center gap-2 @xs:justify-start">
          {location && <RawTag text={location.name} icon={location.icon} />}
          {projectName && <RawTag text={projectName} icon={SuitcaseIcon} />}
        </div>
      </div>
    </div>
  )
}
