import { useCallback, useEffect, useMemo, useState } from "react"
import type { FiltersDefinition } from "./Filters/types"
import type { SortingsDefinition } from "./sortings"
import {
  DataSource,
  OnSelectItemsCallback,
  PaginationInfo,
  RecordType,
} from "./types"

type UseSelectable<Record extends RecordType> = {
  isAllSelected: boolean
  selectedItems: Map<number | string, Record>
  isPartiallySelected: boolean
  handleSelectItemChange: (item: Record, checked: boolean) => void
  handleSelectAll: (checked: boolean) => void
}

export function useSelectable<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
>(
  data: ReadonlyArray<Record>,
  paginationInfo: PaginationInfo | null,
  source: DataSource<Record, Filters, Sortings>,
  onSelectItems?: OnSelectItemsCallback<Record, Filters>
): UseSelectable<Record> {
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

  const clearSelectedItems = useCallback(() => {
    handleSelectAll(false)
    setItemsState(new Map())
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handleSelectAll is a stable function
  }, [])

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
      setItemsState(new Map())
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
    clearSelectedItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clearSelectedItems is a stable function
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- handleItemStateChange is a stable function
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

    const totalItems = paginationInfo?.total ?? data.length

    const selectedItemsCount = allSelectedCheck
      ? totalItems - unselectedCount
      : selectedCount

    onSelectItems?.(
      {
        allSelected:
          unselectedCount === 0
            ? allSelectedCheck
            : allSelectedCheck
              ? "indeterminate"
              : false,
        itemsStatus: Array.from(itemsState.values()),
        filters: source.currentFilters,
        selectedCount: selectedItemsCount,
      },
      clearSelectedItems
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps  --  We intentionally omit clearSelectedItems, onSelectItems, selectedCount, source.currentFilters, and unselectedCount
  }, [allSelectedCheck, itemsState, paginationInfo?.total, data.length])

  return {
    selectedItems,
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange: handleItemStateChange,
    handleSelectAll,
  }
}
