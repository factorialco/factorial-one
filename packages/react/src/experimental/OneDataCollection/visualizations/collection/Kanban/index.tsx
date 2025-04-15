import type { FiltersDefinition } from "../../../Filters/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { SortingsDefinition } from "../../../sortings"
import { CollectionProps, RecordType } from "../../../types"

export type KanbanColumnDefinition<
  _Record extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  label: string
  render: (item: _Record) => string
}

export type KanbanVisualizationOptions<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
> = {
  columns: ReadonlyArray<KanbanColumnDefinition<Record, Filters, Sortings>>
}

export const KanbanCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  source: _source,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  KanbanVisualizationOptions<Record, Filters, Sortings>
>) => {
  return <>hello world from kanban</>
}
