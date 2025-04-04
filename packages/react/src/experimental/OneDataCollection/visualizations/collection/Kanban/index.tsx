
import type { FiltersDefinition } from "../../../Filters/types"
import { CollectionProps, RecordType } from "../../../types"
import {
    SortingsDefinition,
  } from "../../../sortings"
import { useI18n } from "@/lib/i18n-provider"
import { ItemActionsDefinition } from "../../../item-actions"
export type KanbanVisualizationOptions<
  _Record extends RecordType,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
}

export const KanbanCollection = <
Record extends RecordType,
Filters extends FiltersDefinition,
Sortings extends SortingsDefinition,
ItemActions extends ItemActionsDefinition<Record>,
>({
  source
}: CollectionProps<
  Record, 
  Filters, 
  Sortings, 
  ItemActions, 
  KanbanVisualizationOptions<Record, Filters, Sortings>
>) => {
  const t = useI18n()

  return <></>
}