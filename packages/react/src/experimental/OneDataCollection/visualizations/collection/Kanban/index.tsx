//
import type {
  CardMetadata,
  CardMetadataProperty,
} from "@/components/F0Card/types"
import type { IconType } from "@/components/F0Icon"
import type { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { useDataCollectionLanesData } from "@/experimental/OneDataCollection/hooks/useDataCollectionData/useDataCollectionLanesData"
import { useSelectableLanes } from "@/experimental/OneDataCollection/hooks/useSelectableLanes"
import type { RecordType } from "@/hooks/datasource"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { useIsDev } from "@/lib/providers/user-platafform"
import { Kanban } from "@/ui/Kanban"
import { KanbanCard } from "@/ui/Kanban/components/KanbanCard"
import type { KanbanProps } from "@/ui/Kanban/types"
import { useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../../item-actions"
import type { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import type {
  GroupingDefinition,
  SortingsDefinition,
  SummariesDefinition,
} from "../../../types"
import { KanbanCollectionProps } from "./types"

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
  onSelectItems,
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
  const { lanesProvider, lanesHooks } = useDataCollectionLanesData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => onLoadError(error),
  })

  const isDev = useIsDev()

  if (source.currentGrouping && isDev) {
    throw new Error("Grouping is not supported in Kanban yet")
  }

  if (source.dataAdapter.paginationType !== "infinite-scroll" && isDev) {
    throw new Error("Infinite scroll pagination is required in Kanban")
  }

  const [instanceId] = useState(() => Symbol("kanban-visualization"))

  const idProvider = source.idProvider

  const laneItems = useMemo(() => {
    return lanes.map((lane) => ({
      ...lane,
      items: lanesHooks[lane.id]?.data?.records || [],
    }))
  }, [
    JSON.stringify(Object.values(lanesHooks).map((laneHook) => laneHook.data)),
  ])

  const toCardMetadata = (
    items: ReadonlyArray<{ icon: IconType; property: CardMetadataProperty }>
  ): CardMetadata[] =>
    items.map(({ icon, property }) =>
      property.type === "file" ? { property } : { icon, property }
    )

  const kanbanProps: KanbanProps<Record> = {
    lanes: laneItems.map((l) => {
      const laneData = lanesHooks[l.id]
      const totalItems = laneData?.paginationInfo?.total

      console.log(laneData?.paginationInfo)
      const hasMore = laneData?.paginationInfo?.hasMore
      return {
        id: l.id,
        title: l.title,
        items: l.items,
        variant: l.variant,
        total: totalItems,
        hasMore: hasMore,
        loading: laneData?.isLoading || false,
        loadingMore: laneData?.isLoadingMore || false,
        fetchMore: hasMore ? () => laneData.loadMore() : undefined,
      }
    }),
    getKey: (item, index) =>
      idProvider ? String(idProvider(item, index)) : index,
    renderCard: (item, index, total, laneId) => {
      const dragId = String(idProvider ? idProvider(item, index) : index)
      const itemId = source.selectable ? source.selectable(item) : item.id

      // Gets the lane useSelectable hook
      const useSelectable =
        lanesUseSelectable && laneId
          ? lanesUseSelectable.get(laneId)
          : undefined

      const isSelected =
        (typeof itemId === "string" || typeof itemId === "number") &&
        useSelectable &&
        useSelectable?.selectedItems.has(itemId)

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
          draggable={onMove !== undefined}
          metadata={
            optionsMetadata ? toCardMetadata(optionsMetadata(item)) : undefined
          }
          compact
          selectable={source.selectable !== undefined}
          selected={isSelected}
          onSelect={(selected) => {
            if (useSelectable) {
              useSelectable.handleSelectItemChange(item, selected)
            }
          }}
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
    instanceId: instanceId,
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
          await onMove(fromLaneId, toLaneId, sourceId, toIndex)
        }
      : undefined,
  }

  /**
   * Selection
   */

  const lanesDef = useMemo(() => {
    return lanes.map((lane) => ({
      id: lane.id,
      data: lanesHooks[lane.id]?.data || {
        type: "flat",
        records: [],
        groups: [],
      },
      paginationInfo: lanesHooks[lane.id]?.paginationInfo || null,
    }))
  }, [lanes, laneItems])

  const { lanesSelectProvider, lanesUseSelectable } = useSelectableLanes<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(lanesDef, source, (selectItemsStatus, clearCallback) => {
    onSelectItems?.(selectItemsStatus, clearCallback)
  })

  console.log(lanesUseSelectable.get("eng"))

  return (
    <>
      {lanesProvider}
      {lanesSelectProvider}
      {!onMove ? (
        <Kanban<Record> {...kanbanProps} />
      ) : (
        <DndProvider driver={createAtlaskitDriver(instanceId)}>
          <Kanban<Record> {...kanbanProps} />
        </DndProvider>
      )}
    </>
  )
}
