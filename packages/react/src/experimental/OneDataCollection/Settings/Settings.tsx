import { Button } from "@/components/Actions/Button"
import { Sliders } from "@/icons/app"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useState } from "react"
import { FiltersDefinition } from "../Filters/types"
import { GroupingDefinition, GroupingState } from "../grouping"
import { ItemActionsDefinition } from "../item-actions"
import { RecordType, SortingsDefinition } from "../types"
import { Visualization } from "../visualizations/collection"
import { GroupingSelector } from "./components/GroupingSelector"
import { VisualizationSelector } from "./components/VisualizationSelector"

type SettingsProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  Grouping extends GroupingDefinition<R>,
> = {
  visualizations: ReadonlyArray<
    Visualization<R, Filters, Sortings, ItemActions, Grouping>
  >
  currentVisualization: number
  onVisualizationChange: (index: number) => void
  grouping?: Grouping
  currentGrouping?: GroupingState<R, Grouping>
  onGroupingChange: (groupingState: GroupingState<R, Grouping>) => void
}

export const Settings = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  Grouping extends GroupingDefinition<R>,
>({
  visualizations,
  currentVisualization,
  onVisualizationChange,
  grouping,
  currentGrouping,
  onGroupingChange,
}: SettingsProps<R, Filters, Sortings, ItemActions, Grouping>) => {
  const groupByOptions = grouping
    ? Object.keys(grouping.groupBy).length + (grouping.mandatory ? 1 : 0)
    : 0

  const shouldShowSettings =
    (visualizations && visualizations.length > 1) || groupByOptions > 0

  const [open, setOpen] = useState(false)

  const handleVisualizationChange = (index: number) => {
    setOpen(false)
    onVisualizationChange(index)
  }

  const handleGroupingChange = (
    grouping: GroupingState<R, Grouping> | undefined
  ) => {
    onGroupingChange(grouping)
  }

  return (
    shouldShowSettings && (
      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild onClick={() => setOpen(!open)}>
            <Button
              variant="outline"
              label="Filters"
              icon={Sliders}
              onClick={() => {}}
              hideLabel
              round
            />
          </PopoverTrigger>
          <PopoverContent
            className="w-[280px] rounded-md border border-solid border-f1-border-secondary p-2"
            align="end"
            sideOffset={8}
            alignOffset={-6}
          >
            {visualizations && visualizations.length > 1 && (
              <div className="mb-2">
                <VisualizationSelector
                  visualizations={visualizations}
                  currentVisualization={currentVisualization}
                  onVisualizationChange={handleVisualizationChange}
                />
              </div>
            )}
            {grouping && groupByOptions > 0 && (
              <div className="mb-2">
                <GroupingSelector
                  grouping={grouping}
                  currentGrouping={currentGrouping}
                  onGroupingChange={handleGroupingChange}
                />
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    )
  )
}
