import { Placeholder } from "@/icons/app"
import { useMemo } from "react"
import { OneCard } from "../../OneCard"
import { OnePagination } from "../../OnePagination"
import { ActionsDefinition, filterActions } from "../actions"
import type { FiltersDefinition } from "../Filters/types"
import { SortingsDefinition } from "../sortings"
import { CollectionProps, RecordType } from "../types"
import { useData } from "../useData"
import { PropertyDefinition, renderValue } from "../utils"

export type CardPropertyDefinition<T> = PropertyDefinition<T>

export type CardVisualizationOptions<
  T,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  cardProperties: ReadonlyArray<CardPropertyDefinition<T>>
  title: (record: T) => string
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
  Actions extends ActionsDefinition<Record>,
>({
  cardProperties,
  title,
  source,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  Actions,
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
    Sortings
  >({
    ...source,
    dataAdapter: overridenDataAdapter,
  })

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isInitialLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <OneCard.Skeleton key={i} />
            ))
          : data.map((item, index) => (
              <OneCard
                key={index}
                title={title(item)}
                metadata={cardProperties.map((property) => ({
                  type: "text",
                  icon: Placeholder,
                  title: String(renderValue(item, property)),
                  subtitle: property.label,
                }))}
                otherActions={
                  source.actions
                    ? filterActions(source.actions, item)
                    : undefined
                }
              />
            ))}
      </div>
      {paginationInfo && (
        <OnePagination
          totalPages={paginationInfo.pagesCount}
          currentPage={paginationInfo.currentPage}
          onPageChange={setPage}
        />
      )}
    </>
  )
}
