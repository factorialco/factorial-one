import { RecordType } from "./exports"
import { SortOrder } from "./sortings"

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
      label: (groupId: R[K]) => string | Promise<string>
      itemCount?: (
        groupId: R[K]
      ) => number | undefined | Promise<number | undefined>
    }
  }
}

/**
 * The selected the grouping state
 * @template Grouping - The grouping definition
 */
export type GroupingState<
  Grouping extends { groupBy: { [key: string]: unknown } },
> =
  | (Grouping extends GroupingDefinition<RecordType>
      ? {
          field: keyof Grouping["groupBy"]
          order: SortOrder
        }
      : never)
  | undefined
