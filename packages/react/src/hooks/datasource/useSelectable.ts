import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useEffect, useMemo, useState } from "react"
import {
  DataSourceDefinition,
  GroupingDefinition,
  PaginationInfo,
  RecordType,
} from "./types"
import type { SortingsDefinition } from "./types/sortings.typings"
import { Data, GROUP_ID_SYMBOL, GroupRecord } from "./useData"

export type AllSelectionStatus = {
  checked: boolean
  indeterminate: boolean
  selectedCount: number
  unselectedCount: number
}

type UseSelectable<R extends RecordType> = {
  isAllSelected: boolean
  selectedItems: Map<number | string, R>
  selectedGroups: Map<string, GroupRecord<R>>
  isPartiallySelected: boolean
  handleSelectItemChange: (
    item: ItemId | readonly ItemId[],
    checked: boolean
  ) => void
  handleSelectAll: (checked: boolean) => void
  handleSelectGroupChange: (group: GroupId, checked: boolean) => void
  allSelectedStatus: AllSelectionStatus
}

export type ItemId = string | number
export type GroupId = string | number

type CheckedState = Map<ItemId, boolean>

export type SelectionState = {
  all: boolean
  items: CheckedState
  groups: CheckedState
}

const emptyState = (): SelectionState => ({
  all: false,
  items: new Map(),
  groups: new Map(),
})

export function useSelectable<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  data: Data<R>,
  paginationInfo: PaginationInfo | null,
  source: DataSourceDefinition<R, Filters, Sortings, Grouping>,
  // onSelectItems: OnSelectItemsCallback<R, Filters> | undefined,
  onStateChange: (
    state: SelectionState,
    clearSelectedItems: () => void
  ) => void,
  multiple: boolean = false,
  state?: SelectionState
): UseSelectable<R> {
  console.log("useSelectable")
  const isGrouped = data.type === "grouped"
  const isPaginated = paginationInfo !== null
  const itemIdAccesor = (item: R) => source.selectable?.(item) ?? undefined

  const [localState, setLocalState] = useState<SelectionState>(
    state ?? emptyState()
  )

  // Sync the state with the external state if it is provided
  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(localState)) {
      return
    }
    console.log("state", state)
    if (state) {
      setLocalState(state)
    } else {
      setLocalState(emptyState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to check the changes inside the state
  }, [JSON.stringify(state)])

  useEffect(() => {
    console.log("localState emit", localState)
    // Notify the parent component about the selected items
    onStateChange(localState, clearSelected)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want to check the changes inside the local state
  }, [JSON.stringify(localState)])

  /**
   * Maps the items were some time in memory with its group to allow us to deselect or select the items in the group
   */
  const [itemsByGroup, setItemsByGroup] = useState<Map<GroupId, ItemId[]>>(
    new Map()
  )

  // If the grouping or the datachanges, we need to clear the itemsByGroup
  useEffect(() => {
    setItemsByGroup(new Map())
  }, [isGrouped, source.currentGrouping])

  // If the data changes, add the new items to the itemsByGroup
  useEffect(() => {
    console.log("data.records", data.records)
    const newItemsByGroup = new Map<GroupId, ItemId[]>()
    for (const item of data.records) {
      const itemId = itemIdAccesor?.(item)
      if (itemId) {
        const groupId = item[GROUP_ID_SYMBOL] as GroupId
        if (groupId) {
          newItemsByGroup.set(groupId, [
            ...(newItemsByGroup.get(groupId) || []),
            itemId,
          ])
        }
      }
    }

    setItemsByGroup((current) => {
      const newState = new Map(current)
      for (const [groupId, itemIds] of newItemsByGroup.entries()) {
        newState.set(groupId, itemIds)
      }
      return newState
    })
  }, [data.records])

  // /**
  //  * Set the default selected items and groups
  //  */
  // useEffect(() => {
  //   if (!defaultSelectedItems) {
  //     return
  //   }

  //   if (isGrouped) {
  //     for (const defaultGroup of defaultSelectedItems.groups || []) {
  //       const group = data.groups.find(
  //         (group) => group.key === defaultGroup.groupId
  //       )
  //       if (group) {
  //         handleSelectGroupChange(group, defaultGroup.checked)
  //       }
  //     }
  //   }

  //   for (const item of defaultSelectedItems.items || []) {
  //     const record = data.records.find((record) => record.id === item.id)
  //     if (record) {
  //       handleSelectItemChange(record, item.checked)
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking deeply the defaultSelectedItems
  // }, [JSON.stringify(defaultSelectedItems), data.records])

  /**
   * Get the list of selected and unselected items from the itemsState for performance reasons
   */
  const [selectedItems, setSelectedItems] = useState<Set<GroupId>>(new Set())
  const [unselectedItems, setUnselectedItems] = useState<Set<GroupId>>(
    new Set()
  )

  useEffect(() => {
    console.log("localState.items", localState.items)
    const selected = new Set<GroupId>()
    const unselected = new Set<ItemId>()
    for (const [id, checked] of localState.items.entries()) {
      if (checked) {
        selected.add(id)
      } else {
        unselected.add(id)
      }
    }
    setSelectedItems(selected)
    setUnselectedItems(unselected)
  }, [JSON.stringify(localState.items)])

  const [selectedGroups] = useMemo(() => {
    const selected = new Set<GroupId>()
    const unselected = new Set<GroupId>()

    for (const [id, checked] of localState.groups.entries()) {
      if (checked) {
        selected.add(id)
      } else {
        unselected.add(id)
      }
    }
    return [selected, unselected]
  }, [localState.groups])

  /**
   * Handle the change of the selected groups
   */
  const handleSelectGroupChange = (
    groups: GroupId | GroupId[],
    checked: boolean
  ) => {
    if (!isGrouped || !multiple) {
      return
    }

    console.log("handleSelectGroupChange")

    const groupsIds = Array.isArray(groups) ? groups : [groups]

    // Select/deselect all items in the group
    const groupItemIds = [
      // The known items in the group
      ...Array.from(itemsByGroup.entries())
        .filter(([groupId]) => groupsIds.includes(groupId))
        .flatMap(([itemIds]) => itemIds),
    ]
    handleSelectItemChange(groupItemIds, checked)

    setLocalState((current) => ({
      ...current,
      groups: new Map([
        ...Array.from(current.groups.entries()),
        ...groupsIds.map((groupId) => [groupId, checked]),
      ]),
    }))
  }

  const clearSelected = () => setLocalState(emptyState())

  // /**
  //  * Get the allSelectedCheck and isPartiallySelected status for each group
  //  */
  // const [groupAllSelectedStatus, setGroupAllSelectedStatus] = useState<
  //   Record<string, AllSelectionStatus>
  // >({})

  // useEffect(() => {
  //   const getGroupAllSelectedStatus = async () => {
  //     if (!isGrouped) {
  //       return {}
  //     }

  //     const groupsStatuses = Object.fromEntries(
  //       await Promise.all(
  //         data.groups.map(async (group) => {
  //           const groupStatus = groupsState.get(group.key)

  //           const groupItemsStatus = Array.from(itemsState.values()).filter(
  //             (item) => item.item[GROUP_ID_SYMBOL] === group.key
  //           )

  //           const knownItemsCount = isPaginated
  //             ? (await group.itemCount) || groupItemsStatus.length
  //             : group.records.length

  //           const groupSelectedItemCount = groupItemsStatus.filter(
  //             (item) => item.checked
  //           ).length

  //           const groupUnselectedItemCount = groupItemsStatus.filter(
  //             (item) => !item.checked
  //           ).length

  //           const areAllKnownGroupItemsSelected =
  //             knownItemsCount ===
  //             groupSelectedItemCount - groupUnselectedItemCount

  //           const isGroupAllItemsSelected =
  //             (groupStatus?.checked || areAllKnownGroupItemsSelected) &&
  //             groupSelectedItemCount > 0

  //           const isGroupPartiallySelected =
  //             (groupSelectedItemCount > 0 && !isGroupAllItemsSelected) ||
  //             (isGroupAllItemsSelected && groupUnselectedItemCount > 0)

  //           return [
  //             group.key,
  //             {
  //               checked: isGroupAllItemsSelected || isGroupPartiallySelected,
  //               indeterminate: isGroupPartiallySelected,
  //               selectedCount:
  //                 isGroupAllItemsSelected && !isGroupPartiallySelected
  //                   ? knownItemsCount
  //                   : knownItemsCount - groupUnselectedItemCount,
  //               unselectedCount: groupUnselectedItemCount,
  //             },
  //           ] as const
  //         })
  //       )
  //     )

  //     setGroupAllSelectedStatus(groupsStatuses)
  //   }

  //   getGroupAllSelectedStatus()

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isGrouped, isGrouped && data.groups, groupsState, itemsState])

  /**
   * Selected items count
   */
  const selectedCount = selectedItems.size
  const unselectedCount = unselectedItems.size

  const handleSelectItemChange = (
    items: ItemId | readonly ItemId[],
    checked: boolean,
    // Only applies the checked state if the item has no state set yet
    onlyIfNotSelected: boolean = false
  ) => {
    const itemIds = Array.isArray(items) ? items : [items]

    console.log("handleSelectItemChange")
    if (!multiple) {
      setLocalState(() => ({
        ...emptyState(),
        items: new Map([[itemIds[0], checked]]),
      }))
      return
    }

    let updated = 0
    const newItems = new Map(localState.items)
    for (const itemId of itemIds) {
      // If the item is already selected, we don't need to update the state if onlyIfNotSelected is true
      if (onlyIfNotSelected && localState.items.has(itemId)) {
        return
      }

      updated++
      newItems.set(itemId, checked)
    }

    if (updated > 0) {
      setLocalState((current) => ({
        ...current,
        items: newItems,
      }))
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (!multiple) {
      return
    }

    setLocalState((current) => ({
      ...current,
      all: checked,
    }))

    if (isGrouped) {
      handleSelectGroupChange(Array.from(itemsByGroup.keys()), checked)
    } else {
      handleSelectItemChange(
        data.records
          .map((record) => itemIdAccesor(record))
          .filter(Boolean) as ItemId[],
        checked
      )
    }
  }

  // Try to determine if all items are selected when we select one by one
  // If there is pagination, we need to check if the selected items are less than the total number of items
  // If there is no pagination, we need to check if the selected items are less than the total number of items
  const areAllKnownItemsSelected = useMemo(
    () =>
      (paginationInfo && selectedCount === paginationInfo.total) ||
      (!paginationInfo && selectedCount === data.records?.length),
    [paginationInfo, selectedCount, data.records?.length]
  )

  const isAllSelected = useMemo(
    () => (localState.all || areAllKnownItemsSelected) && selectedCount > 0,
    [localState.all, areAllKnownItemsSelected, selectedCount]
  )

  const isPartiallySelected = useMemo(
    () =>
      (selectedCount > 0 && !isAllSelected) ||
      (isAllSelected && unselectedCount > 0),
    [selectedCount, isAllSelected, unselectedCount]
  )

  // If the filters change, we need to reset the selected items
  useEffect(() => {
    clearSelected()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- clearSelected is a stable function
  }, [source.currentFilters])

  // /**
  //  * Handle the data changes to update the selected items status
  //  */
  // useEffect(() => {
  //   if (isGrouped) {
  //     for (const group of data.groups) {
  //       // If the group was loaded before, we can't change the state
  //       const groupChecked =
  //         groupAllSelectedStatus[group.key]?.checked || isAllSelected
  //       if (!groupsState.has(group.key)) {
  //         setGroupsState((current) => {
  //           const newState = new Map(current)
  //           newState.set(group.key, { group, checked: groupChecked })
  //           return newState
  //         })
  //       }

  //       // Apply the status to the new loaded group items
  //       handleSelectItemChange(group.records, groupChecked, true)
  //     }
  //   } else {
  //     // For the flattened data, we need to check if the item was loaded before
  //     handleSelectItemChange(data.records, isAllSelected, true)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps -- handleItemStateChange is a stable function
  // }, [data, isAllSelected, isGrouped])

  // // Control the allSelectedCheck state
  // // If all items are selected, we need to set the allSelectedCheck state to true
  // // If there are no selected items, we need to set the allSelectedCheck state to false
  // // If some items are selected, we need to keep the state as is to know if we will need to check the next page items
  // useEffect(() => {
  //   if (areAllKnownItemsSelected) {
  //     setAllSelectedCheck(true)
  //   }

  //   if (selectedCount === 0) {
  //     setAllSelectedCheck(false)
  //   }
  // }, [areAllKnownItemsSelected, selectedCount])

  useEffect(() => {
    onStateChange?.(localState, clearSelected)

    // Notify the parent component about the selected items
    // onSelectItems?.(
    //   {
    //     allSelected:
    //       unselectedCount === 0
    //         ? allSelectedCheck
    //         : allSelectedCheck
    //           ? "indeterminate"
    //           : false,
    //     itemsStatus: Array.from(itemsState.values()),
    //     groupsStatus: Object.fromEntries(
    //       Array.from(groupsState.values()).map(({ group, checked }) => [
    //         group.key,
    //         !!checked,
    //       ])
    //     ),
    //     filters: source.currentFilters || {},
    //     selectedCount,
    //   },
    //   clearSelectedItems
    // )
  }, [
    localState,
    // onStateChange,
    //clearSelected,
    // onStateChange,
    // allSelectedCheck,
    // itemsState,
    // groupsState,
    // groupAllSelectedStatus,
    // paginationInfo?.total,
    // data.records?.length,
  ])

  return {
    allSelectedStatus: {
      checked: localState.all || isPartiallySelected,
      indeterminate: isPartiallySelected,
      selectedCount,
      unselectedCount,
    },
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
  }
}
