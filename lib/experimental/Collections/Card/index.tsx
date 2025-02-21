import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
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
>({
  cardProperties,
  title,
  source,
}: CollectionProps<Record, Filters, CardVisualizationOptions<Record>>) => {
  const { data, isLoading } = useData<Record, Filters>(source)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isLoading
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
                    <div className="text-sm">{renderValue(item, property)}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
    </div>
  )
}
