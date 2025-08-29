//
import type { CardAvatarVariant } from "@/components/F0Card/components/CardAvatar"
import type { CardMetadataProperty } from "@/components/F0Card/types"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import type { Variant } from "@/components/tags/F0TagStatus"
import type { IconType } from "@/components/Utilities/Icon"
import { Kanban } from "@/ui/Kanban"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"
import type { KanbanProps } from "@/ui/Kanban/types"
import { useEffect, useMemo } from "react"
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

export type KanbanLaneDefinition<Record> = {
  id: string
  title: string
  variant?: Variant
  where?: (record: Record) => boolean
}

export type KanbanVisualizationOptions<
  Record extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  lanes: ReadonlyArray<KanbanLaneDefinition<Record>>
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
  laneLoading?: (laneId: string) => boolean
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

  laneLoading,
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
  const { data, paginationInfo, isInitialLoading } = useData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => onLoadError(error),
  })

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
    const records = data.records
    const result = lanes.map((lane) => {
      const items = lane.where ? records.filter(lane.where) : records
      return { ...lane, items }
    })
    return result
  }, [lanes, data.records])

  const kanbanProps: KanbanProps<Record> = {
    lanes: laneItems.map((l) => ({
      id: l.id,
      title: l.title,
      items: l.items,
      variant: l.variant,
      loading: typeof laneLoading === "function" ? laneLoading(l.id) : false,
    })),
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
          metadata={optionsMetadata ? [...optionsMetadata(item)] : undefined}
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
      console.log("[KanbanCollection] getIndexById", {
        laneIndexMaps,
        laneId,
        id,
      })
      const idx = laneIndexMaps.get(laneId)?.get(id) ?? -1
      // Debug
      if (allowReorder) {
        // console.log("[KanbanCollection] getIndexById", { laneId, id, idx })
      }
      return allowReorder ? idx : -1
    },
    onMove: onMove
      ? async (
          fromLaneId: string,
          toLaneId: string,
          sourceId: string,
          toIndex: number | null
        ) => {
          console.log("[KanbanCollection] onMove", {
            fromLaneId,
            toLaneId,
            sourceId,
            toIndex,
          })
          await onMove(fromLaneId, toLaneId, sourceId, toIndex)
        }
      : undefined,
    allowReorder,
  }

  return isInitialLoading ? (
    <div className="p-4 text-sm text-f1-foreground-secondary">Loading…</div>
  ) : (
    <Kanban<Record> {...kanbanProps} />
  )
}
