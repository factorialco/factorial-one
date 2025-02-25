import { Button } from "@/core/components/actions/Button"
import { Select } from "@/core/components/experimental"
import { RawTag } from "@/core/components/experimental/information/tags/RawTag"
import { IconType } from "@/core/components/utility/Icon"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { motion } from "framer-motion"
import { Dispatch, useState } from "react"
import { ClockInGraph, ClockInGraphProps } from "../ClockInGraph"
import { getInfo } from "./helpers.ts"
import Selector from "./Selector"

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
    selectLocation: string
    selectProject: string
  }
  locationId?: string
  onChangeLocationId: Dispatch<string>
  locations: {
    id: string
    name: string
    icon: IconType
  }[]
  canShowLocation?: boolean
  locationSelectorDisabled?: boolean
  canShowBreakButton?: boolean
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
  locationId,
  locations,
  canShowLocation = true,
  locationSelectorDisabled = false,
  onClockIn,
  onClockOut,
  onBreak,
  canShowBreakButton = true,
  // onClickProjectSelector,
  onChangeLocationId,
}: ClockInControlsProps) {
  const { status, statusText, subtitle, statusColor } = getInfo({
    data,
    labels,
    remainingMinutes,
  })

  const showLocationAndProjectSelectors = status === "clocked-out"

  const canSelectLocation =
    showLocationAndProjectSelectors &&
    locations.length &&
    !locationSelectorDisabled &&
    canShowLocation
  // const canSelectProject =
  //   showLocationAndProjectSelectors &&
  //   !projectSelectorDisabled &&
  //   canShowProject

  const location = locations.find((location) => location.id === locationId)

  const locationOptions = locations.map((location) => ({
    value: location.id,
    label: location.name,
    icon: location.icon,
  }))

  const [locationPickerOpen, setLocationPickerOpen] = useState(false)

  return (
    <div className="@container">
      <div className="flex-grow flex-col">
        <div className="flex flex-col-reverse items-center gap-2 @xs:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col items-center space-y-0.5 @xs:items-start">
              <div className="flex items-center gap-2">
                <span className="line-clamp-1 text-xl font-semibold text-f1-foreground">
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
                  {canShowBreakButton && (
                    <Button
                      onClick={onBreak}
                      label={labels.break}
                      variant="neutral"
                      icon={SolidPause}
                      hideLabel
                    />
                  )}
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
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start">
          {canSelectLocation ? (
            <Select
              value={locationId}
              options={locationOptions}
              onChange={onChangeLocationId}
              open={locationPickerOpen}
              onOpenChange={setLocationPickerOpen}
              disabled={locationSelectorDisabled}
            >
              <div aria-label="Select location">
                <Selector
                  text={location?.name}
                  placeholder={labels.selectLocation}
                  icon={location?.icon}
                />
              </div>
            </Select>
          ) : (
            canShowLocation && (
              <>
                <RawTag text={location?.name} icon={location?.icon} />
              </>
            )
          )}
        </div>
      </div>
    </div>
  )
}
