import { FiltersDefinition } from "@/experimental/OneDataCollection/Filters/types"
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

export type ListPropertyDefinition<
  R,
  Sortings extends SortingsDefinition,
> = WithOptionalSorting<R, Sortings> & PropertyDefinition<R>

export type ListVisualizationOptions<
  R extends RecordType,
  _Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
}
