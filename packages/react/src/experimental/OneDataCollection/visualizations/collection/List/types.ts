import { AvatarVariant } from "@/components/avatars/F0Avatar"
import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import {
  SortingKey,
  SortingsDefinition,
} from "@/experimental/OneDataCollection/sortings"
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
