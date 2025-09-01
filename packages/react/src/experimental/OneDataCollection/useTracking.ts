import { useCallback, useRef } from "react"
import {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import { EventScalar, useEventCatcher } from "../../lib/providers/events"
import { SortingsDefinition, SortingsState } from "./sortings"

type UseTrackingParams<Sortings extends SortingsDefinition> = {
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
  defaultFilters,
  defaultSorting,
}: UseTrackingParams<Sortings>) => {
  const latestFilters = useRef<
    UseTrackingParams<Sortings>["defaultFilters"] | undefined
  >(defaultFilters)
  const latestSortings = useRef<
    UseTrackingParams<Sortings>["defaultSorting"] | undefined
  >(defaultSorting)

  const { onEvent } = useEventCatcher()

  const trackFilterChange = useCallback(
    (filters: FiltersState<FiltersDefinition>) => {
      const newFilter = Object.entries(filters ?? {}).find(
        ([field, value]) => latestFilters.current?.[field] !== value
      )

      if (!newFilter || !isScalar(newFilter[1])) return

      latestFilters.current = filters

      onEvent("datacollection.filter-change", {
        name: newFilter?.[0],
        value: newFilter?.[1],
      })
    },
    [onEvent]
  )

  const trackSortingChange = useCallback(
    (sortings: SortingsState<Sortings>) => {
      if (
        (latestSortings?.current?.field === sortings?.field &&
          latestSortings?.current?.order === sortings?.order) ||
        !sortings ||
        typeof sortings.field !== "string"
      )
        return

      latestSortings.current = sortings

      onEvent("datacollection.sorting-change", {
        name: sortings.field,
        value: sortings.order,
      })
    },
    [onEvent]
  )

  const trackPresetClick = useCallback(
    (preset: string) => {
      onEvent("datacollection.preset-click", {
        name: preset,
      })
    },
    [onEvent]
  )

  return {
    trackFilterChange,
    trackSortingChange,
    trackPresetClick,
  }
}
