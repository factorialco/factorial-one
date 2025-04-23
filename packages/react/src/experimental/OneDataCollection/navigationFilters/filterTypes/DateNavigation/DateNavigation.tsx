import { Button } from "@/components/Actions/exports"
import { ChevronLeft, ChevronRight } from "@/icons/app"

import { Select } from "@/experimental/exports"
import { useState } from "react"
import { granularityHandlers } from "./granularities"
import { DateGranularity, DateNavigationProps, DateRange } from "./types"

export function DateNavigation({
  filter,
  value,
  onChange,
}: DateNavigationProps) {
  const options = {
    granularity: "day" as const,
    ...filter,
  }

  const availableGranularities = Array.isArray(options.granularity)
    ? options.granularity
    : [options.granularity]

  const [granularity, setGranularity] = useState(
    filter.defaultGranularity || availableGranularities[0]
  )

  const granularityHandler = granularityHandlers[granularity]
  if (!granularityHandler) {
    throw new Error(`Invalid granularity: ${options.granularity}`)
  }

  const [prev, next] = granularityHandler.getPrevNext(value.dateRange, options)

  const handleChange = (newDateRange: DateRange | false) => {
    if (!newDateRange) {
      return
    }

    onChange({
      value: newDateRange[0],
      dateRange: newDateRange,
      granularity: granularity,
    })
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        icon={ChevronLeft}
        label="Previous"
        disabled={!prev}
        variant="outline"
        onClick={() => handleChange(prev)}
      />
      {availableGranularities.length > 1 && (
        <Select
          options={availableGranularities.map((granularity) => ({
            label: granularity,
            value: granularity,
          }))}
          value={granularity}
          onChange={(value) => setGranularity(value as DateGranularity)}
        />
      )}
      <div className="flex items-center gap-2">
        {granularityHandler.toString(value.dateRange)}
      </div>

      <Button
        size="sm"
        icon={ChevronRight}
        label="Next"
        variant="outline"
        disabled={!next}
        onClick={() => handleChange(next)}
      />
    </div>
  )
}
