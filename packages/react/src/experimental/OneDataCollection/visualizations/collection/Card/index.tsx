import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { OneCard } from "@/experimental/OneCard"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader/GroupHeader"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import {
  getAnimationVariants,
  useGroups,
} from "@/experimental/OneDataCollection/useGroups"
import { useSelectable } from "@/experimental/OneDataCollection/useSelectable"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/Card"
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

export type CardPropertyDefinition<T> = PropertyDefinition<T>

export type CardVisualizationOptions<
  T,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  cardProperties: ReadonlyArray<CardPropertyDefinition<T>>
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

const CardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  )
}

/**
 * Group Cards: Renders
 */

export type CardCollectionProps<
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
  CardVisualizationOptions<Record, Filters, Sortings>
>

/**
 * Group Cards: Renders the cards for a group
 */

type GroupCardsProps<
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
  cardProperties: ReadonlyArray<CardPropertyDefinition<Record>>
  title: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => AvatarVariant
}

const GroupCards = <
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
  cardProperties,
  title,
  description,
  avatar,
}: GroupCardsProps<
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
    property: CardPropertyDefinition<Record>
  ) => {
    return renderProperty(item, property, "card")
  }

  return (
    <CardGrid>
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
            <OneCard
              key={index}
              title={title(item)}
              selectable={selectable}
              description={description ? description(item) : undefined}
              avatar={avatar ? avatar(item) : undefined}
              selected={selectable && selectedItems.has(id)}
              onSelect={(selected) => handleSelectItemChange(item, selected)}
              secondaryActions={secondaryActions}
              primaryAction={primaryAction}
              otherActions={otherActions}
              onClick={itemOnClick}
              link={itemHref}
            >
              <div className="flex flex-col gap-2">
                {cardProperties.map((property) => (
                  <div key={String(property.label)}>
                    <div className="text-muted-foreground text-sm font-medium">
                      {property.label}
                    </div>
                    <div className="text-sm">{renderValue(item, property)}</div>
                  </div>
                ))}
              </div>
            </OneCard>
          </motion.div>
        )
      })}
    </CardGrid>
  )
}

export const CardCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  cardProperties,
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
  CardVisualizationOptions<Record, Filters, Sortings>
>) => {
  // We override the perPage to ensure it's always a multiple of 2, 3, and 4
  // This ensures the cards are always aligned in a grid regardless of the
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
          <CardGrid>
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle aria-label="Loading card">
                    <Skeleton className="h-4 w-3/4" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {cardProperties.map((property) => (
                    <div key={String(property.label)} className="space-y-1">
                      <Skeleton className="h-3 w-1/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </CardGrid>
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
                        <GroupCards
                          key={group.key}
                          source={source}
                          items={group.records}
                          selectedItems={selectedItems}
                          handleSelectItemChange={handleSelectItemChange}
                          title={title}
                          cardProperties={cardProperties}
                          description={description}
                          avatar={avatar}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )
              })}

            {data?.type === "flat" && (
              <GroupCards
                source={source}
                items={data.records}
                selectedItems={selectedItems}
                handleSelectItemChange={handleSelectItemChange}
                title={title}
                cardProperties={cardProperties}
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
