import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import { FiltersDefinition } from "@/experimental/OneDataCollection/Filters/types"
import { PropertyDefinition } from "@/experimental/OneDataCollection/property-render"
import {
  SortingKey,
  SortingsDefinition,
} from "@/experimental/OneDataCollection/sortings"
import { RecordType } from "@/experimental/OneDataCollection/types"

export type WithOptionalSorting<
  Record,
  Sortings extends SortingsDefinition,
> = PropertyDefinition<Record> & {
  sorting?: SortingKey<Sortings>
}

export type ItemDefinition = {
  title: string
  description?: string[]
  avatar?: AvatarVariant
}

export type ListPropertyDefinition<
  R,
  Sortings extends SortingsDefinition,
> = WithOptionalSorting<R, Sortings> & PropertyDefinition<R>

export type ListVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  itemDefinition: (record: R) => ItemDefinition
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
}
