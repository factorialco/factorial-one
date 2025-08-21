import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type {
  DataSourceDefinition,
  GroupingDefinition,
  RecordType,
  SelectedItemsState,
  SortingsDefinition,
} from "./types"
import type { PaginationInfo } from "./types/fetch.typings"
import { Data, GROUP_ID_SYMBOL } from "./useData"

export type SelectionAllStatus = {
  checked: boolean
  indeterminate: boolean
  selectedCount: number
  unselectedCount: number
}

type UseSelectionStateReturn<R extends RecordType> = {
  // Aggregated state
  isAllSelected: boolean
  isPartiallySelected: boolean
  allSelectedStatus: SelectionAllStatus
  groupAllSelectedStatus: Record<string, SelectionAllStatus>

  // Selection helpers
  getIsItemSelected: (itemId: string | number, groupId?: unknown) => boolean
  selectedIdsForLoadedItems: Set<string | number>

  // Handlers
  handleSelectItemChange: (
    item: R | readonly R[] | (string | number) | ReadonlyArray<string | number>,
    checked: boolean
  ) => void
  handleSelectAll: (checked: boolean) => void
  handleSelectGroupChange: (
    group: { key: string } | ReadonlyArray<{ key: string }>,
    checked: boolean
  ) => void
  clearSelected: () => void

  // Canonical, minimal id-based selection state for lifting to parents
  selectedState: SelectedItemsState<string | number>

  // Only for non-paginated data convenience
  materializedSelectedItems: R[] | null
}

type DefaultSelectedType<T extends string | number> =
  | ReadonlyArray<T>
  | SelectedItemsState<T>
  | undefined

export function useSelectionState<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  data: Data<R>,
  paginationInfo: PaginationInfo | null,
  source: DataSourceDefinition<R, Filters, Sortings, Grouping>,
  {
    singleSelection = false,
    defaultSelected,
    onSelect,
  }: {
    singleSelection?: boolean
    defaultSelected?: DefaultSelectedType<string | number>
    onSelect?: (state: SelectedItemsState<string | number>) => void
  } = {}
): UseSelectionStateReturn<R> {
  const isPaginated = paginationInfo !== null
  const isGrouped = data.type === "grouped"

  // Minimal, layered selection state
  // - items: explicit overrides for specific ids
  // - groups: explicit overrides for specific group ids
  // - allSelected: global default when true
  const [itemsMap, setItemsMap] = useState<Map<string | number, boolean>>(
    () => new Map()
  )
  const [groupsMap, setGroupsMap] = useState<Map<string, boolean>>(
    () => new Map()
  )
  const [allSelected, setAllSelected] = useState(false)

  const lastEmittedRef = useRef<string | null>(null)

  const getIdFromItem = useCallback(
    (item: R): string | number | undefined => source.selectable?.(item),
    [source]
  )

  const getIsItemSelected = useCallback(
    (itemId: string | number, groupId?: unknown): boolean => {
      if (itemsMap.has(itemId)) return !!itemsMap.get(itemId)
      if (groupId !== undefined && groupsMap.has(String(groupId)))
        return !!groupsMap.get(String(groupId))
      return allSelected
    },
    [allSelected, groupsMap, itemsMap]
  )

  const setItemIds = useCallback(
    (ids: ReadonlyArray<string | number>, checked: boolean) => {
      setItemsMap((current) => {
        const next = new Map(current)
        for (const id of ids) next.set(id, checked)
        return next
      })
    },
    []
  )

  const handleSelectItemChange = useCallback(
    (
      itemOrIds:
        | R
        | readonly R[]
        | (string | number)
        | ReadonlyArray<string | number>,
      checked: boolean
    ) => {
      if (singleSelection) {
        const id = Array.isArray(itemOrIds)
          ? ((): string | number | undefined => {
              const first = itemOrIds[0] as unknown
              if (typeof first === "string" || typeof first === "number")
                return first
              return first ? getIdFromItem(first as R) : undefined
            })()
          : typeof itemOrIds === "string" || typeof itemOrIds === "number"
            ? itemOrIds
            : getIdFromItem(itemOrIds as R)

        if (id === undefined) return
        setAllSelected(false)
        setGroupsMap(new Map())
        setItemsMap(new Map([[id, checked]]))
        return
      }

      const ids: ReadonlyArray<string | number> = Array.isArray(itemOrIds)
        ? (itemOrIds as ReadonlyArray<R | string | number>).map((v) =>
            typeof v === "string" || typeof v === "number"
              ? v
              : getIdFromItem(v as R)
          )
        : [
            typeof itemOrIds === "string" || typeof itemOrIds === "number"
              ? itemOrIds
              : getIdFromItem(itemOrIds as R),
          ]

      setItemIds(
        ids.filter((v): v is string | number => v !== undefined),
        checked
      )
    },
    [getIdFromItem, setItemIds, singleSelection]
  )

  const handleSelectGroupChange = useCallback(
    (
      groupOrGroups: { key: string } | ReadonlyArray<{ key: string }>,
      checked: boolean
    ) => {
      if (!isGrouped || singleSelection) return
      const groups = Array.isArray(groupOrGroups)
        ? groupOrGroups
        : [groupOrGroups]
      setGroupsMap((current) => {
        const next = new Map(current)
        for (const g of groups) next.set(g.key, checked)
        return next
      })
    },
    [isGrouped, singleSelection]
  )

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (singleSelection) return
      setAllSelected(checked)
    },
    [singleSelection]
  )

  const clearSelected = useCallback(() => {
    setAllSelected(false)
    setGroupsMap(new Map())
    setItemsMap(new Map())
  }, [])

  // Compute derived selections for loaded records
  const selectedIdsForLoadedItems = useMemo(() => {
    const set = new Set<string | number>()
    for (const rec of data.records) {
      const id = getIdFromItem(rec as unknown as R)
      if (id === undefined) continue
      if (getIsItemSelected(id, rec[GROUP_ID_SYMBOL])) set.add(id)
    }
    return set
  }, [data.records, getIdFromItem, getIsItemSelected])

  const selectedCount = selectedIdsForLoadedItems.size
  const totalKnown = data.records.length
  const unselectedCount = totalKnown - selectedCount

  const isAllKnownItemsSelected = useMemo(
    () => (isPaginated ? false : selectedCount === totalKnown),
    [isPaginated, selectedCount, totalKnown]
  )

  const isAllSelected = useMemo(
    () => (allSelected || isAllKnownItemsSelected) && selectedCount > 0,
    [allSelected, isAllKnownItemsSelected, selectedCount]
  )

  const isPartiallySelected = useMemo(
    () =>
      (selectedCount > 0 && !isAllSelected) ||
      (isAllSelected && unselectedCount > 0),
    [isAllSelected, selectedCount, unselectedCount]
  )

  // Group statuses for loaded groups only (no async counts)
  const groupAllSelectedStatus = useMemo(() => {
    if (!isGrouped) return {}
    const byGroup: Record<string, SelectionAllStatus> = {}
    for (const group of data.groups) {
      const items = group.records
      let groupSelected = 0
      for (const rec of items) {
        const id = getIdFromItem(rec as unknown as R)
        if (id === undefined) continue
        if (getIsItemSelected(id, rec[GROUP_ID_SYMBOL])) groupSelected++
      }
      const known = items.length
      const groupUnselected = known - groupSelected
      const groupAll = groupSelected > 0 && groupUnselected === 0
      const groupPartial =
        (groupSelected > 0 && !groupAll) || (groupAll && groupUnselected > 0)

      byGroup[group.key] = {
        checked: groupAll || groupPartial,
        indeterminate: groupPartial,
        selectedCount:
          groupAll && !groupPartial ? known : known - groupUnselected,
        unselectedCount: groupUnselected,
      }
    }
    return byGroup
  }, [data.groups, getIdFromItem, getIsItemSelected, isGrouped])

  const allSelectedStatus: SelectionAllStatus = useMemo(
    () => ({
      checked: allSelected || isPartiallySelected,
      indeterminate: isPartiallySelected,
      selectedCount,
      unselectedCount,
    }),
    [allSelected, isPartiallySelected, selectedCount, unselectedCount]
  )

  // Normalize current internal state to a canonical SelectedItemsState with minimal overrides
  const selectedState: SelectedItemsState<string | number> = useMemo(() => {
    // Compute minimal group overrides compared to global allSelected
    const groups: ReadonlyArray<{ groupId: string; checked: boolean }> =
      Array.from(groupsMap.entries())
        .filter(([, checked]) => checked !== allSelected)
        .map(([groupId, checked]) => ({ groupId, checked }))

    // For items, only include overrides compared to group or global layer
    const items: ReadonlyArray<{ id: string | number; checked: boolean }> =
      Array.from(itemsMap.entries())
        .filter(([id, checked]) => {
          // Find group override for this id if the record is currently loaded
          const rec = data.records.find(
            (r) => getIdFromItem(r as unknown as R) === id
          )
          const groupId = rec?.[GROUP_ID_SYMBOL]
          const layer =
            (groupId !== undefined && groupsMap.has(String(groupId))
              ? groupsMap.get(String(groupId))
              : undefined) ?? allSelected
          return checked !== layer
        })
        .map(([id, checked]) => ({ id, checked }))

    // Sort for stable output
    const sortedItems = [...items].sort((a, b) =>
      `${a.id}`.localeCompare(`${b.id}`)
    )
    const sortedGroups = [...groups].sort((a, b) =>
      a.groupId.localeCompare(b.groupId)
    )

    return {
      allSelected: allSelected ? true : false,
      items: sortedItems,
      groups: sortedGroups,
    }
  }, [allSelected, data.records, getIdFromItem, groupsMap, itemsMap])

  // Apply defaultSelected when it changes, but only if it differs from current normalized state
  useEffect(() => {
    const normalizeInput = (
      input?: DefaultSelectedType<string | number>
    ): SelectedItemsState<string | number> => {
      if (!input) return { allSelected: false, items: [], groups: [] }
      if (Array.isArray(input))
        return {
          allSelected: false,
          items: input.map((id) => ({ id, checked: true })),
          groups: [],
        }
      return {
        allSelected: !!input.allSelected,
        items: input.items ?? [],
        groups: input.groups ?? [],
      }
    }

    const desired = normalizeInput(defaultSelected)
    const desiredKey = JSON.stringify(desired)
    const currentKey = JSON.stringify(selectedState)
    if (desiredKey === currentKey) return

    setAllSelected(!!desired.allSelected)
    setGroupsMap(
      new Map((desired.groups ?? []).map((g) => [g.groupId, g.checked]))
    )
    setItemsMap(new Map((desired.items ?? []).map((i) => [i.id, i.checked])))
  }, [defaultSelected, selectedState])

  // Emit canonical state to parent; avoid duplicate emissions
  useEffect(() => {
    const key = JSON.stringify(selectedState)
    if (lastEmittedRef.current === key) return
    lastEmittedRef.current = key
    onSelect?.(selectedState)
  }, [onSelect, selectedState])

  const materializedSelectedItems = useMemo(() => {
    if (isPaginated) return null
    const selected: R[] = []
    for (const rec of data.records) {
      const id = getIdFromItem(rec as unknown as R)
      if (id === undefined) continue
      if (getIsItemSelected(id, rec[GROUP_ID_SYMBOL])) selected.push(rec as R)
    }
    return selected
  }, [data.records, getIdFromItem, getIsItemSelected, isPaginated])

  return {
    isAllSelected,
    isPartiallySelected,
    allSelectedStatus,
    groupAllSelectedStatus,
    getIsItemSelected,
    selectedIdsForLoadedItems,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
    clearSelected,
    selectedState,
    materializedSelectedItems,
  }
}
