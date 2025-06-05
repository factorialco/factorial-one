import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { OneCard } from "@/experimental/OneCard"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { useSelectable } from "@/experimental/OneDataCollection/useSelectable"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/Card"
import { Skeleton } from "@/ui/skeleton"
import { useEffect, useMemo } from "react"
import { useI18n } from "../../../../../lib/providers/i18n"
import { OnePagination } from "../../../../OnePagination"
import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { PropertyDefinition, renderProperty } from "../../../property-render"
import { SortingsDefinition } from "../../../sortings"
import { CollectionProps, RecordType } from "../../../types"
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

export const CardCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
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
  ItemActions,
  NavigationFilters,
  CardVisualizationOptions<Record, Filters, Sortings>
>) => {
  const t = useI18n()

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
    NavigationFilters
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
      totalItems: paginationInfo?.total || data.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps --  we don't want to re-run this effect when the filters change, just when the data changes
  }, [paginationInfo?.total, data])

  /**
   * Item selection
   */

  const {
    selectedItems,
    handleSelectItemChange,
    // TODO Add all selection logic
    // isAllSelected,
    // isPartiallySelected,
    // handleSelectAll,
  } = useSelectable(data, paginationInfo, source, onSelectItems)

  const renderValue = (
    item: Record,
    property: CardPropertyDefinition<Record>
  ) => {
    return renderProperty(item, property, "card")
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isInitialLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>
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
            ))
          : data.map((item, index) => {
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
                itemActions.find((action) => action.type === "primary") ||
                undefined
              const secondaryActions =
                itemActions.filter((action) => action.type === "secondary") ||
                []

              const selectable = !!source.selectable && id !== undefined

              return (
                <OneCard
                  key={index}
                  title={title(item)}
                  selectable={selectable}
                  description={description ? description(item) : undefined}
                  avatar={avatar ? avatar(item) : undefined}
                  selected={selectable && selectedItems.has(id)}
                  onSelect={(selected) =>
                    handleSelectItemChange(item, selected)
                  }
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
                        <div className="text-sm">
                          {renderValue(item, property)}
                        </div>
                      </div>
                    ))}
                  </div>
                </OneCard>
              )
            })}
      </div>
      {paginationInfo && paginationInfo.type === "pages" && (
        <div className="flex w-full items-center justify-between px-6">
          <span className="shrink-0 text-f1-foreground-secondary">
            {`${(paginationInfo.currentPage - 1) * paginationInfo.perPage + 1}-${Math.min(
              paginationInfo.currentPage * paginationInfo.perPage,
              paginationInfo.total
            )} ${t.collections.visualizations.pagination.of} ${paginationInfo.total}`}
          </span>
          <div className="flex items-center">
            <OnePagination
              totalPages={paginationInfo.pagesCount}
              currentPage={paginationInfo.currentPage}
              onPageChange={setPage}
            />
          </div>
        </div>
      )}
    </>
  )
}
