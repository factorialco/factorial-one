import { useEffect, useMemo, useState } from "react"
import type { FiltersDefinition, FiltersState } from "./Filters/types"
import type { SortingsDefinition } from "./sortings"
import { DataSource, PaginationInfo, RecordType } from "./types"

export function useSelectable<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
>(
  data: ReadonlyArray<Record>,
  paginationInfo: PaginationInfo | null,
  source: DataSource<Record, Filters, Sortings>,
  onSelectItems?: (
    allSelected: boolean | "indeterminate",
    itemsStatus: ReadonlyArray<{ item: Record; checked: boolean }>,
    filters: FiltersState<Filters>
  ) => void
): {
  isAllSelected: boolean
  selectedItems: Map<number | string, Record>
  isPartiallySelected: boolean
  handleSelectItemChange: (item: Record, checked: boolean) => void
  handleSelectAll: (checked: boolean) => void
} {
  // itemsState is the state of the selected items
  const [itemsState, setItemsState] = useState<
    Map<number | string, { item: Record; checked: boolean }>
  >(new Map())

  const [selectedItems, unselectedItems] = useMemo(() => {
    const selected = new Map()
    const unselected = new Map()
    itemsState.forEach((value, id) => {
      if (value.checked) {
        selected.set(id, value.item)
      } else {
        unselected.set(id, value.item)
      }
    })
    return [selected, unselected]
  }, [itemsState])

  const selectedCount = selectedItems.size
  const unselectedCount = unselectedItems.size

  const [allSelectedCheck, setAllSelectedCheck] = useState(false)

  const handleItemStateChange = (
    item: Record | readonly Record[],
    checked: boolean
  ) => {
    const items = Array.isArray(item) ? item : [item]

    items.forEach((item) => {
      const id = source.selectable && source.selectable(item)
      if (id === undefined) {
        return
      }
      itemsState.set(id, { item, checked })
    })

    setItemsState((current) => new Map(current))
  }

  const handleSelectAll = (checked: boolean) => {
    setAllSelectedCheck(checked)
    if (checked) {
      handleItemStateChange(data, true)
    } else {
      // We need to reset the items state to the initial state
      setItemsState(
        new Map(
          Array.from(itemsState.entries()).map(([id, value]) => {
            return [id, { item: value.item, checked: false }]
          })
        )
      )
    }
  }

  // Try to determine if all items are selected when we select one by one
  // If there is pagination, we need to check if the selected items are less than the total number of items
  // If there is no pagination, we need to check if the selected items are less than the total number of items
  const areAllKnownItemsSelected =
    (paginationInfo && selectedCount === paginationInfo.total) ||
    (!paginationInfo && selectedCount === data.length)

  const isPartiallySelected = selectedCount > 0 && unselectedCount > 0

  const isAllSelected = allSelectedCheck || areAllKnownItemsSelected

  // If the filters change, we need to reset the selected items
  useEffect(() => {
    handleSelectAll(false)
    setItemsState(new Map())
  }, [source.currentFilters])

  // If the data changes, we need to update new items that are added to the data
  useEffect(() => {
    if (isAllSelected) {
      data.forEach((item) => {
        const id = source.selectable && source.selectable(item)
        // If the item was loaded before, we can't change the state
        if (id !== undefined && !itemsState.has(id)) {
          handleItemStateChange(item, true)
        }
      })
    }
  }, [data, isAllSelected])

  // Control the allSelectedCheck state
  // If all items are selected, we need to set the allSelectedCheck state to true
  // If there are no selected items, we need to set the allSelectedCheck state to false
  // If some items are selected, we need to keep the state as is to know if we will need to check the next page items
  useEffect(() => {
    if (areAllKnownItemsSelected) {
      setAllSelectedCheck(true)
    }

    if (selectedCount === 0) {
      setAllSelectedCheck(false)
    }
  }, [areAllKnownItemsSelected, selectedCount])

  useEffect(() => {
    // Notify the parent component about the selected items
    onSelectItems?.(
      unselectedCount === 0
        ? allSelectedCheck
        : allSelectedCheck
          ? "indeterminate"
          : false,
      Array.from(itemsState.values()),
      source.currentFilters
    )
  }, [
    onSelectItems,
    allSelectedCheck,
    itemsState,
    source.currentFilters,
    unselectedCount,
  ])

  return {
    selectedItems,
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange: handleItemStateChange,
    handleSelectAll,
  }
}
