import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { GroupingDefinition, GroupingState } from "../../grouping"
import { RecordType } from "../../types"

type GroupingSelectorProps = {
  grouping: GroupingDefinition<RecordType>
  currentGrouping: GroupingState<GroupingDefinition<RecordType>>
  onGroupingChange: (
    groupingState: GroupingState<GroupingDefinition<RecordType>>
  ) => void
}

export const GroupingSelector = ({
  grouping,
  currentGrouping,
  onGroupingChange,
}: GroupingSelectorProps) => {
  const groupingOptions = [
    ...(!grouping.mandatory
      ? [
          {
            label: "No grouping",
            value: "",
          },
        ]
      : []),
    ...Object.entries(grouping.groupBy).map(([key, value]) => ({
      label: value.name,
      value: key,
    })),
  ]

  return (
    <div>
      <label>Group by...</label>
      <div className="flex items-center gap-2">
        <div className="shrink grow">
          <Select
            options={groupingOptions}
            value={currentGrouping?.field}
            onChange={(value: string) =>
              onGroupingChange({
                field: value,
                order: currentGrouping.order,
              })
            }
          />
        </div>
        <div>
          <Button
            hideLabel
            label="Toggle sort direction"
            variant="outline"
            icon={currentGrouping?.order === "asc" ? ArrowUp : ArrowDown}
            onClick={() =>
              onGroupingChange({
                field: currentGrouping.field,
                order: currentGrouping.order === "asc" ? "desc" : "asc",
              })
            }
          />
        </div>
      </div>
    </div>
  )
}
