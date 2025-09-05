//
import type { CardAvatarVariant } from "@/components/F0Card/components/CardAvatar"
import type {
  CardMetadata,
  CardMetadataProperty,
} from "@/components/F0Card/types"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import type { Variant } from "@/components/tags/F0TagStatus"
import type { IconType } from "@/components/Utilities/Icon"
import { Kanban } from "@/ui/Kanban"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"
import type { KanbanProps } from "@/ui/Kanban/types"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  CollectionProps,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"
import { useData } from "../../../useData"

export type KanbanLaneDefinition = {
  id: string
  title: string
  variant?: Variant
}

export type KanbanVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  lanes: ReadonlyArray<KanbanLaneDefinition>
  title?: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => CardAvatarVariant
  metadata?: (
    record: Record
  ) => ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  onMove?: (
    fromLaneId: string,
    toLaneId: string,
    sourceId: string,
    toIndex: number | null
  ) => Promise<void>
}

export type KanbanCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  KanbanVisualizationOptions<Record, Filters, Sortings>
>

export const KanbanCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  lanes,
  title,
  description,
  avatar,
  metadata: optionsMetadata,
  onMove,
  source,
  onLoadData,
  onLoadError,
}: KanbanCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const {
    data,
    paginationInfo,
    isInitialLoading,
    lanesData,
    laneLoadMore: fetchMoreForLaneFromUseData,
  } = useData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => onLoadError(error),
  })

  // Function to fetch more data for a specific lane
  const fetchMoreForLane = useCallback(
    async (laneId: string) => {
      const laneData = lanesData?.[laneId]
      if (!laneData?.paginationInfo) return

      const paginationInfo = laneData.paginationInfo
      if (!paginationInfo.hasMore) return

      // Call the fetchMoreForLane function from useData
      if (fetchMoreForLaneFromUseData) {
        await fetchMoreForLaneFromUseData(laneId)
      }
    },
    [lanesData, fetchMoreForLaneFromUseData]
  )

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || data.records.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data: data.records,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationInfo?.total, data.records])

  const idProvider = source.idProvider

  const laneItems = useMemo(() => {
    return lanes.map((lane) => {
      // Use lane-specific data if available, otherwise fallback to global data
      const laneData = lanesData?.[lane.id]
      const items = laneData ? laneData.data.records : data.records
      return { ...lane, items }
    })
  }, [lanes, lanesData, data.records])

  // Internal per-lane paging state (in-memory slice)
  const DEFAULT_STEP = 20
  type LanePageSizes = { [laneId: string]: number }
  const [lanePageSize, setLanePageSize] = useState<LanePageSizes>({})
  // Ensure page sizes exist for current lanes
  useEffect(() => {
    setLanePageSize((prev: LanePageSizes) => {
      const next: LanePageSizes = { ...prev }
      laneItems.forEach((l) => {
        if (!(l.id in next)) next[l.id] = DEFAULT_STEP
      })
      // Clean up removed lanes
      Object.keys(next).forEach((k) => {
        if (!laneItems.find((l) => l.id === k)) delete next[k]
      })
      return next
    })
  }, [laneItems])

  const toCardMetadata = (
    items: ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  ): CardMetadata[] =>
    items.map(({ icon, property }) =>
      property.type === "file" ? { property } : { icon, property }
    )

  const kanbanProps: KanbanProps<Record> = {
    lanes: laneItems.map((l) => {
      const pageSize = lanePageSize[l.id] ?? DEFAULT_STEP
      const laneData = lanesData?.[l.id]
      // Use the real total from pagination info, fallback to loaded items length
      const totalItems = laneData?.paginationInfo?.total ?? l.items.length
      // Show all loaded items, not just up to pageSize
      const visible = l.items
      const hasMore = pageSize < totalItems
      return {
        id: l.id,
        title: l.title,
        items: visible,
        variant: l.variant,
        total: totalItems,
        paginationInfo: laneData?.paginationInfo || undefined,
        hasMore: laneData?.paginationInfo
          ? laneData.paginationInfo.hasMore
          : hasMore,
        loading: false, // Never use loading - it hides all content and causes scroll jumping
        loadingMore: laneData?.isLoadingMore || false, // Use loadingMore to preserve content
        fetchMore: laneData?.paginationInfo?.hasMore
          ? () => fetchMoreForLane(l.id)
          : hasMore
            ? () =>
                setLanePageSize((prev: LanePageSizes) => ({
                  ...prev,
                  [l.id]: Math.min(
                    (prev[l.id] ?? DEFAULT_STEP) + DEFAULT_STEP,
                    totalItems
                  ),
                }))
            : undefined,
      }
    }),
    getKey: (item, index) =>
      idProvider ? String(idProvider(item, index)) : index,
    renderCard: (item, index, total, laneId) => {
      const dragId = String(idProvider ? idProvider(item, index) : index)
      return (
        <KanbanCard
          key={dragId}
          drag={{ id: dragId, type: "list-card", data: { laneId } }}
          id={String(item.id)}
          index={index}
          total={total}
          laneId={laneId}
          showIndicator={allowReorder}
          title={title ? title(item) : String(index)}
          description={description ? description(item) : undefined}
          avatar={avatar ? avatar(item) : undefined}
          metadata={
            optionsMetadata ? toCardMetadata(optionsMetadata(item)) : undefined
          }
          compact
        />
      )
    },
  }

  // Fine-grained reorder only when no sort order is applied
  const allowReorder = source.currentSortings === null

  // Build index maps per lane when needed
  const laneIndexMaps = useMemo(() => {
    const maps = new Map<string, Map<string, number>>()
    laneItems.forEach((lane) => {
      const map = new Map<string, number>()
      lane.items.forEach((item, index) => {
        const itemId = String(idProvider ? idProvider(item, index) : index)
        map.set(itemId, index)
      })
      maps.set(lane.id, map)
    })
    return maps
  }, [laneItems, idProvider])

  kanbanProps.dnd = {
    instanceId: Symbol("kanban-collection"),
    getIndexById: (laneId: string, id: string) => {
      const idx = laneIndexMaps.get(laneId)?.get(id) ?? -1
      return allowReorder ? idx : -1
    },
    onMove: onMove
      ? async (
          fromLaneId: string,
          toLaneId: string,
          sourceId: string,
          toIndex: number | null
        ) => {
          console.log(
            `🎯 onMove: ${sourceId} from ${fromLaneId} to ${toLaneId}`
          )

          // Execute the move operation
          await onMove(fromLaneId, toLaneId, sourceId, toIndex)

          console.log(`✅ Move completed and lanes refreshed`)
        }
      : undefined,
  }

  return <Kanban<Record> {...kanbanProps} />
}
