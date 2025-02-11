import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
import type { FiltersDefinition } from "../Filters/types"
import { CollectionProps, CollectionSchema, SourceData } from "../types"
import { useData } from "../useData"

export type CardPropertyDefinition<T> = {
  label: string
  key: keyof T
  render?: (item: T) => string
}

export type CardVisualizationOptions<T> = {
  cardProperties: ReadonlyArray<CardPropertyDefinition<T>>
}

export const CardCollection = <
  Schema extends CollectionSchema,
  Filters extends FiltersDefinition,
>({
  cardProperties,
  source,
}: CollectionProps<
  Schema,
  Filters,
  CardVisualizationOptions<SourceData<Schema, Filters>>
>) => {
  const { data, isLoading } = useData<Schema, Filters>(source)

  const renderValue = (
    item: SourceData<Schema, Filters>,
    property: CardPropertyDefinition<SourceData<Schema, Filters>>
  ) => {
    if (property.render) {
      return property.render(item)
    }
    return String(item[property.key])
  }

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
                  <div key={String(property.key)} className="space-y-1">
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
                <CardTitle>{renderValue(item, cardProperties[0])}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {cardProperties.slice(1).map((property) => (
                  <div key={String(property.key)} className="space-y-1">
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
