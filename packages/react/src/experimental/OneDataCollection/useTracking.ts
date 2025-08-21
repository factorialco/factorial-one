import { useCallback, useRef } from "react"
import {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import {
  EventScalar,
  useTracking as useBaseTracking,
} from "../../lib/providers/tracking"
import { SortingsDefinition, SortingsState } from "./sortings"

type UseTrackingParams<Sortings extends SortingsDefinition> = {
  trackingIdentifier?: string
  defaultFilters?: FiltersState<FiltersDefinition>
  defaultSorting?: SortingsState<Sortings>
}

const isScalar = (value: unknown): value is EventScalar => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    Array.isArray(value)
  )
}

export const useTracking = <Sortings extends SortingsDefinition>({
  trackingIdentifier,
  defaultFilters,
  defaultSorting,
}: UseTrackingParams<Sortings>) => {
  const latestFilters = useRef<
    UseTrackingParams<Sortings>["defaultFilters"] | undefined
  >(defaultFilters)
  const latestSortings = useRef<
    UseTrackingParams<Sortings>["defaultSorting"] | undefined
  >(defaultSorting)

  const { track } = useBaseTracking()

  const trackFilterChange = useCallback(
    (filters: FiltersState<FiltersDefinition>) => {
      const newFilter = Object.entries(filters ?? {}).find(
        ([field, value]) => latestFilters.current?.[field] !== value
      )

      if (!newFilter || !isScalar(newFilter[1])) return

      latestFilters.current = filters

      track("Data collection filter change", {
        id: trackingIdentifier,
        name: newFilter?.[0],
        value: newFilter?.[1],
      })
    },
    [track, trackingIdentifier]
  )

  const trackSortingChange = useCallback(
    (sortings: SortingsState<Sortings>) => {
      const newSorting = Object.entries(sortings ?? {}).find(
        ([field, order]) =>
          latestSortings.current?.field !== field ||
          latestSortings.current?.order !== order
      )

      if (!newSorting || !isScalar(newSorting[1])) return

      latestSortings.current = sortings

      track("Data collection sorting change", {
        id: trackingIdentifier,
        name: newSorting[0],
        value: newSorting[1],
      })
    },
    [track, trackingIdentifier]
  )

  const trackPresetClick = useCallback(
    (preset: string) => {
      track("Data collection preset click", {
        id: trackingIdentifier,
        preset,
      })
    },
    [track, trackingIdentifier]
  )

  return {
    trackFilterChange,
    trackSortingChange,
    trackPresetClick,
  }
}
