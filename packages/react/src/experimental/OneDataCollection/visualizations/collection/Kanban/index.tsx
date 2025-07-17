import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader/GroupHeader"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import {
  getAnimationVariants,
  useGroups,
} from "@/experimental/OneDataCollection/useGroups"
import { useSelectable } from "@/experimental/OneDataCollection/useSelectable"
import { Skeleton } from "@/ui/skeleton"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useMemo } from "react"
import type { FiltersDefinition } from "../../../../../components/OneFilterPicker/types"
import { PagesPagination } from "../../../components/PagesPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { PropertyDefinition, renderProperty } from "../../../property-render"
import { SortingsDefinition } from "../../../sortings"
import { SummariesDefinition } from "../../../summary"
import {
  CollectionProps,
  DataSource,
  GroupingDefinition,
  RecordType,
} from "../../../types"
import { useData } from "../../../useData"

export type KanbanPropertyDefinition<T> = PropertyDefinition<T>

export type KanbanVisualizationOptions<
  T,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  kanbanProperties: ReadonlyArray<KanbanPropertyDefinition<T>>
  title: (record: T) => string
  description?: (record: T) => string
  avatar?: (record: T) => AvatarVariant
}

// Find the next number that is divisible by 2, 3, and 4
const findNextMultiple = (n: number): number => {
  // LCM of 2, 3, and 4 is 12
  const lcm = 12
  return Math.ceil(n / lcm) * lcm
}

const KanbanGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  )
}

/**
 * Group Kanbans: Renders
 */

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

/**
 * Group Kanbans: Renders the kanbans for a group
 */

type GroupKanbansProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  source: DataSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  items: Record[]
  selectedItems: Map<number | string, Record>
  handleSelectItemChange: (item: Record, checked: boolean) => void
  kanbanProperties: ReadonlyArray<KanbanPropertyDefinition<Record>>
  title: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => AvatarVariant
}

const GroupKanbans = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  items,
  selectedItems,
  handleSelectItemChange,
  kanbanProperties,
  title,
  description,
  avatar,
}: GroupKanbansProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const renderValue = (
    item: Record,
    property: KanbanPropertyDefinition<Record>
  ) => {
    return renderProperty(item, property, "kanban")
  }

  return (
    <KanbanGrid>
      {items.map((item, index) => {
        const id = source.selectable ? source.selectable(item) : undefined
        const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
        const itemOnClick = source.itemOnClick
          ? source.itemOnClick(item)
          : undefined

        const itemActions = (
          source.itemActions ? source.itemActions(item) || [] : []
        ).filter((action) => action.type !== "separator")

        const otherActions = (
          itemActions.filter(
            (action) => action.type === "other" || !action.type
          ) || []
        ).map((action) => ({
          ...action,
          // Reconverts the type to DropdownItemObject
          type: "item" as const,
        }))

        const primaryAction =
          itemActions.find((action) => action.type === "primary") || undefined
        const secondaryActions =
          itemActions.filter((action) => action.type === "secondary") || []

        const selectable = !!source.selectable && id !== undefined

        return (
          <motion.div
            key={index}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
            variants={getAnimationVariants({
              delay: 0.02,
              duration: 0.3,
            })}
          >
            <div className="flex flex-col gap-2">
              {kanbanProperties.map((property) => (
                <div key={String(property.label)}>
                  <div className="text-muted-foreground text-sm font-medium">
                    {property.label}
                  </div>
                  <div className="text-sm">{renderValue(item, property)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </KanbanGrid>
  )
}

export const KanbanCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  kanbanProperties,
  title,
  description,
  avatar,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  KanbanVisualizationOptions<Record, Filters, Sortings>
>) => {
  // We override the perPage to ensure it's always a multiple of 2, 3, and 4
  // This ensures the kanbans are always aligned in a grid regardless of the
  // screen size (2 columns on sm, 3 on lg, 4 on xl)
  const overridenDataAdapter = useMemo(() => {
    if (source.dataAdapter.paginationType === "pages") {
      const perPage = source.dataAdapter.perPage
      const overridenPerPage = findNextMultiple(perPage ?? 24)
      return {
        ...source.dataAdapter,
        perPage: overridenPerPage,
      }
    }
    return source.dataAdapter
  }, [source.dataAdapter])

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(
    {
      ...source,
      dataAdapter: overridenDataAdapter,
    },
    {
      onError: (error) => {
        onLoadError(error)
      },
    }
  )

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

  /**
   * Item selection
   */
  const {
    selectedItems,
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectGroupChange,
  } = useSelectable(
    data,
    paginationInfo,
    source,
    onSelectItems,
    source.defaultSelectedItems
  )

  /**
   * Groups
   */
  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="overflow-auto">
        {isInitialLoading ? (
          <KanbanGrid>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i}>
                <div>
                  <div aria-label="Loading kanban">
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
                <div className="space-y-2">
                  {kanbanProperties.map((property) => (
                    <div key={String(property.label)} className="space-y-1">
                      <Skeleton className="h-3 w-1/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </KanbanGrid>
        ) : (
          <>
            {data?.type === "grouped" &&
              data.groups.map((group) => {
                return (
                  <>
                    <GroupHeader
                      label={group.label}
                      itemCount={group.itemCount}
                      onOpenChange={(open) => setGroupOpen(group.key, open)}
                      open={openGroups[group.key]}
                      selectable={!!source.selectable}
                      showOpenChange={collapsible}
                      select={
                        groupAllSelectedStatus[group.key]?.checked
                          ? true
                          : groupAllSelectedStatus[group.key]?.indeterminate
                            ? "indeterminate"
                            : false
                      }
                      onSelectChange={(checked) =>
                        handleSelectGroupChange(group, checked)
                      }
                      className="px-6 pb-2 pt-4"
                    />
                    <AnimatePresence>
                      {(!collapsible || openGroups[group.key]) && (
                        <GroupKanbans
                          key={group.key}
                          source={source}
                          items={group.records}
                          selectedItems={selectedItems}
                          handleSelectItemChange={handleSelectItemChange}
                          title={title}
                          kanbanProperties={kanbanProperties}
                          description={description}
                          avatar={avatar}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )
              })}

            {data?.type === "flat" && (
              <GroupKanbans
                source={source}
                items={data.records}
                selectedItems={selectedItems}
                handleSelectItemChange={handleSelectItemChange}
                title={title}
                kanbanProperties={kanbanProperties}
                description={description}
                avatar={avatar}
              />
            )}
          </>
        )}
      </div>
      <PagesPagination paginationInfo={paginationInfo} setPage={setPage} />
    </div>
  )
}
