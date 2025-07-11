import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { AvatarVariant } from "@/experimental/Information/Avatars/Avatar"
import {
  SortingKey,
  SortingsDefinition,
} from "@/hooks/datasource/types/sortings.typings"
import { PropertyDefinition } from "../../../property-render"
import { RecordType } from "../../../types"

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
