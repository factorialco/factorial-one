import { Button } from "@/components/Actions/Button"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useState } from "react"
import { Sliders } from "../../../../icons/app"
import { FiltersDefinition } from "../Filters/types"
import { GroupingDefinition, GroupingState } from "../grouping"
import { ItemActionsDefinition } from "../item-actions"
import { RecordType, SortingsDefinition } from "../types"
import { Visualization } from "../visualizations/collection"
import { GroupingSelector } from "./components/GroupingSelector"
import { VisualizationSelector } from "./components/VisualizationSelector"

type SettingsProps = {
  visualizations: ReadonlyArray<
    Visualization<
      RecordType,
      FiltersDefinition,
      SortingsDefinition,
      ItemActionsDefinition<RecordType>,
      GroupingDefinition<RecordType>
    >
  >
  currentVisualization: number
  onVisualizationChange: (index: number) => void
  grouping: GroupingDefinition<RecordType>
  currentGrouping: GroupingState<GroupingDefinition<RecordType>>
  onGroupingChange: (
    groupingState: GroupingState<GroupingDefinition<RecordType>>
  ) => void
}

export const Settings = ({
  visualizations,
  currentVisualization,
  onVisualizationChange,
  grouping,
  currentGrouping,
  onGroupingChange,
}: SettingsProps) => {
  const shouldShowSettings =
    (visualizations && visualizations.length > 1) ||
    (grouping && Object.keys(grouping.groupBy).length > 1)

  const [open, setOpen] = useState(false)

  const handleVisualizationChange = (index: number) => {
    setOpen(false)
    onVisualizationChange(index)
  }

  const handleGroupingChange = (grouping: GroupingDefinition<RecordType>) => {
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
            {grouping && Object.keys(grouping.groupBy).length > 1 && (
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
