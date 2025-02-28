import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
import { useMemo } from "react"
import { OnePagination } from "../../OnePagination"
import { ActionsDefinition } from "../actions"
import { ActionsDropdown } from "../Actions/Dropdown"
import type { FiltersDefinition } from "../Filters/types"
import { CollectionProps, RecordType } from "../types"
import { useData } from "../useData"
import { PropertyDefinition, renderValue } from "../utils"

export type CardPropertyDefinition<T> = PropertyDefinition<T>

export type CardVisualizationOptions<T> = {
  cardProperties: ReadonlyArray<CardPropertyDefinition<T>>
  title: (record: T) => string
}

export const CardCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Actions extends ActionsDefinition<Record>,
>({
  cardProperties,
  title,
  source,
}: CollectionProps<
  Record,
  Filters,
  Actions,
  CardVisualizationOptions<Record>
>) => {
  // We override this to force a perPage of 24 (unless set at the dataAdapter
  // level), which is a multiple of 2, 3 and 4 This is to ensure that the cards
  // are always aligned in a grid
  const overridenSource = useMemo(() => {
    if (source.dataAdapter.paginationType === "pages") {
      return {
        ...source,
        dataAdapter: {
          ...source.dataAdapter,
          perPage: source.dataAdapter.perPage ?? 24,
        },
      }
    }
    return source
  }, [source])

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters
  >(overridenSource)

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          : data.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{title(item)}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {cardProperties.map((property) => (
                    <div key={String(property.label)} className="space-y-1">
                      <div className="text-muted-foreground text-sm font-medium">
                        {property.label}
                      </div>
                      <div className="text-sm">
                        {renderValue(item, property)}
                      </div>
                    </div>
                  ))}
                </CardContent>
                {source.actions && (
                  <CardFooter className="justify-end">
                    <ActionsDropdown item={item} actions={source.actions} />
                  </CardFooter>
                )}
              </Card>
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
