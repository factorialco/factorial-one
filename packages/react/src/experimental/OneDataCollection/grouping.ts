import {
  FiltersDefinition,
  FiltersState,
} from "../../components/OneFilterPicker/types"
import { SortOrder } from "./sortings"
import { RecordType } from "./types"

/**
 * Defines the structure and configuration of a grouping options for a data source.
 * @template RecordType - The type of records in the collection
 */
export type GroupingDefinition<R extends RecordType> = {
  /** Whether grouping is mandatory or the user can chose not to group */
  mandatory?: boolean
  groupBy: {
    [K in keyof R]?: {
      /** The label for the grouping */
      name: string
      /** The item count for the grouping */
      label: (
        groupId: R[K],
        filters: FiltersState<FiltersDefinition>
      ) => string | Promise<string>
      itemCount?: (
        groupId: R[K],
        filters: FiltersState<FiltersDefinition>
      ) => number | undefined | Promise<number | undefined>
    }
  }
} & (
  | {
      /** Whether the grouping is non collapsible */
      collapsible: true
      /** The initial open groups */
      defaultOpenGroups?: boolean | string[]
    }
  | {
      collapsible?: false
      defaultOpenGroups?: never
    }
)

/**
 * The selected the grouping state
 * @template Grouping - The grouping definition
 */
export type GroupingState<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
> =
  | {
      field: keyof Grouping["groupBy"]
      order: SortOrder
    }
  | undefined
