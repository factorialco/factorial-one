import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader"
import { PagesPagination } from "@/experimental/OneDataCollection/components/PagesPagination/PagesPagination"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import {
  getAnimationVariants,
  useGroups,
} from "@/experimental/OneDataCollection/useGroups"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/experimental/OneTable"
import { useI18n } from "@/lib/providers/i18n"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import {
  ComponentProps,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { PropertyDefinition } from "../../../property-render"
import {
  SortingKey,
  SortingsDefinition,
  SortingsState,
} from "../../../sortings"
import { CollectionProps, GroupingDefinition, RecordType } from "../../../types"
import { isInfiniteScrollPagination, useData } from "../../../useData"
import { useSelectable } from "../../../useSelectable"
import { statusToChecked } from "../utils"
import { Row } from "./components/Row"

export type WithOptionalSorting<
  R extends RecordType,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<R> & {
  sorting?: SortingKey<Sortings>

  /**
   * The alignment of the column. If not provided, the alignment will be "left"
   */
  align?: "left" | "right"

  /**
   * The width of the column. If not provided, the width will be "auto"
   */
  width?: number
}

export type TableColumnDefinition<
  R extends RecordType,
  Sortings extends SortingsDefinition,
> = WithOptionalSorting<R, Sortings> &
  Pick<
    ComponentProps<typeof TableHead>,
    "hidden" | "info" | "infoIcon" | "sticky" | "width"
  >

export type TableVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings>>
  frozenColumns?: 0 | 1 | 2
}

export const TableCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  columns,
  source,
  frozenColumns = 0,
  onSelectItems,
  onLoadData,
  onLoadError,
}: CollectionProps<
  R,
  Filters,
  Sortings,
  ItemActions,
  NavigationFilters,
  Grouping,
  TableVisualizationOptions<R, Filters, Sortings>
>) => {
  const t = useI18n()
  // Created a motion component for the row
  const [MotionRow] = useState(() =>
    motion.create(
      Row<R, Filters, Sortings, ItemActions, NavigationFilters, Grouping>
    )
  )

  const loadingIndicatorRef = useRef<HTMLDivElement>(null)

  const {
    data,
    paginationInfo,
    setPage,
    isInitialLoading,
    isLoadingMore,
    loadMore,
  } = useData<R, Filters, Sortings, NavigationFilters, Grouping>(source, {
    onError: (error) => {
      onLoadError(error)
    },
  })

  const { currentSortings, setCurrentSortings, isLoading } = source

  useEffect(() => {
    if (
      !isInfiniteScrollPagination(paginationInfo) ||
      !paginationInfo.hasMore
    ) {
      return
    }

    const loadingIndicator = loadingIndicatorRef.current
    if (!loadingIndicator) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !isLoadingMore) {
          loadMore()
        }
      },
      {
        root: null, // viewport
        rootMargin: "200px",
        threshold: 0.1,
      }
    )

    observer.observe(loadingIndicator)

    return () => {
      observer.disconnect()
    }
  }, [paginationInfo, isLoadingMore, loadMore, isLoading])

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || data.records.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data: data.records,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps --  we don't want to re-run this effect when the filters change, just when the data changes
  }, [paginationInfo?.total, data.records])

  const frozenColumnsLeft = useMemo(() => frozenColumns, [frozenColumns])

  /**
   * Item selection
   */
  const {
    selectedItems,
    allSelectedStatus,
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
  } = useSelectable(data, paginationInfo, source, onSelectItems)

  /**
   * Determine the sort state of a column
   */
  const getColumnSortState = (
    columnSorting: SortingKey<Sortings> | undefined,
    sourceSortings: SortingsDefinition | undefined,
    currentSortings: SortingsState<Sortings>
  ): "asc" | "desc" | "none" | undefined => {
    if (!columnSorting || !sourceSortings) {
      return undefined
    }

    if (currentSortings === null) {
      return "none"
    }

    return currentSortings.field === columnSorting
      ? currentSortings.order
      : "none"
  }

  /**
   * Handle column sort click
   */
  const handleSortClick = (columnSorting: SortingKey<Sortings>) => {
    setCurrentSortings(() => {
      if (!currentSortings || currentSortings.field !== columnSorting) {
        return {
          field: columnSorting,
          order: "asc",
        }
      } else if (currentSortings.order === "asc") {
        return {
          field: columnSorting,
          order: "desc",
        }
      } else {
        return null
      }
    })
  }

  /*
   * Groups
   */

  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  /*
   * Initial loading
   */
  if (isInitialLoading) {
    return (
      <OneTable.Skeleton
        columns={columns.length + (source.itemActions ? 1 : 0)}
      />
    )
  }

  // Enforce that sorting is only used when sortings are defined
  if (!source.sortings) {
    columns.forEach((column) => {
      if (column.sorting) {
        console.warn(
          "Sorting is defined on a column but no sortings are provided in the data source"
        )
      }
    })
  }

  const checkColumnWidth = source.selectable ? 52 : 0

  const skeletonColumns =
    columns.length + (source.itemActions ? 1 : 0) + (source.selectable ? 1 : 0)

  return (
    <>
      <OneTable loading={isLoading}>
        <TableHeader>
          <TableRow>
            {source.selectable && (
              <TableHead
                width={checkColumnWidth}
                sticky={{ left: 0 }}
                align="right"
              >
                <div className="flex w-full items-center justify-end">
                  <Checkbox
                    checked={allSelectedStatus.checked}
                    indeterminate={allSelectedStatus.indeterminate}
                    onCheckedChange={handleSelectAll}
                    title="Select all"
                    hideLabel
                    disabled={data?.records.length === 0}
                  />
                </div>
              </TableHead>
            )}
            {columns.map(({ sorting, label, ...column }, index) => (
              <TableHead
                key={`table-head-${index}`}
                sortState={getColumnSortState(
                  sorting,
                  source.sortings,
                  currentSortings
                )}
                width={column.width}
                align={column.align}
                sticky={
                  index < frozenColumnsLeft
                    ? {
                        left: columns
                          .slice(0, Math.max(0, index))
                          .reduce(
                            (acc, column) => acc + (column.width ?? 0),
                            checkColumnWidth
                          ),
                      }
                    : undefined
                }
                {...column}
                onSortClick={
                  sorting
                    ? () => {
                        if (!sorting) return
                        handleSortClick(sorting)
                      }
                    : undefined
                }
              >
                {label}
              </TableHead>
            ))}
            {source.itemActions && (
              <TableHead
                key="actions"
                width={68}
                hidden
                sticky={{
                  right: 0,
                }}
              >
                {t.collections.actions.actions}
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.type === "grouped" &&
            data.groups.map((group, groupIndex) => {
              const itemCount = group.itemCount
              return (
                <Fragment key={`group-${group.key}`}>
                  <TableRow key={`group-header-${group.key}`}>
                    <TableCell
                      colSpan={columns.length + (source.selectable ? 1 : 0)}
                    >
                      <GroupHeader
                        className="px-4"
                        selectable={!!source.selectable}
                        select={statusToChecked(
                          groupAllSelectedStatus[group.key]
                        )}
                        onSelectChange={(checked) =>
                          handleSelectGroupChange(group, checked)
                        }
                        showOpenChange={collapsible}
                        label={group.label}
                        itemCount={itemCount}
                        open={openGroups[group.key]}
                        onOpenChange={(open) => setGroupOpen(group.key, open)}
                      />
                    </TableCell>
                  </TableRow>

                  <AnimatePresence key={`group-animate-${groupIndex}`}>
                    {MotionRow &&
                      (!collapsible || openGroups[group.key]) &&
                      group.records.map((item, index) => {
                        return (
                          <MotionRow
                            variants={getAnimationVariants()}
                            initial={collapsible ? "hidden" : "visible"}
                            animate="visible"
                            exit="hidden"
                            custom={index}
                            key={`row-${groupIndex}-${index}`}
                            layout
                            source={source}
                            item={item}
                            index={index}
                            groupIndex={groupIndex}
                            onCheckedChange={(checked) =>
                              handleSelectItemChange(item, checked)
                            }
                            selectedItems={selectedItems}
                            columns={columns}
                            frozenColumnsLeft={frozenColumnsLeft}
                            checkColumnWidth={checkColumnWidth}
                          />
                        )
                      })}
                  </AnimatePresence>
                </Fragment>
              )
            })}
          {data?.type === "flat" &&
            data.records.map((item, index) => {
              return (
                <Row
                  key={`row-${index}`}
                  groupIndex={0}
                  source={source}
                  item={item}
                  index={index}
                  onCheckedChange={(checked) =>
                    handleSelectItemChange(item, checked)
                  }
                  selectedItems={selectedItems}
                  columns={columns}
                  frozenColumnsLeft={frozenColumnsLeft}
                  checkColumnWidth={checkColumnWidth}
                />
              )
            })}

          {paginationInfo?.type === "infinite-scroll" &&
            isLoadingMore &&
            Array.from({ length: 5 }).map((_, rowIndex) => (
              <TableRow key={`skeleton-row-${rowIndex}`}>
                {Array.from({ length: skeletonColumns }).map((_, colIndex) => (
                  <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </OneTable>

      {isInfiniteScrollPagination(paginationInfo) && paginationInfo.hasMore && (
        <div
          ref={loadingIndicatorRef}
          className="h-10 w-full"
          aria-hidden="true"
        />
      )}

      <PagesPagination paginationInfo={paginationInfo} setPage={setPage} />
    </>
  )
}
