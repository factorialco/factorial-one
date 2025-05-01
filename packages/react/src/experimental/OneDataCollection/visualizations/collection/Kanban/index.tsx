import { NewColor } from "@/experimental/Information/Tags/DotTag"
import { StatusVariant } from "@/experimental/Information/Tags/StatusTag"
import { Kanban } from "@/experimental/OneKanban"
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
  statusColor: StatusVariant | NewColor
  render: (item: _Record) => KanbanColumnDataDefinition[]
}

export type KanbanColumnDataDefinition = {
  id: string
  title: string
  projections: React.ReactNode[]
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
  columns,
  source: _source,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  KanbanVisualizationOptions<Record, Filters, Sortings>
>) => {
  return (
    <Kanban
      columns={columns.map((column) => ({
        label: column.label,
        statusColor: column.statusColor,
        items: [],
      }))}
    />
  )
}
