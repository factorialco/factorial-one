import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { GroupingDefinition, GroupingState } from "../../grouping"
import { RecordType } from "../../types"

type GroupingSelectorProps = {
  grouping: GroupingDefinition<RecordType>
  currentGrouping:
    | GroupingState<RecordType, GroupingDefinition<RecordType>>
    | undefined
  onGroupingChange: (
    groupingState:
      | GroupingState<RecordType, GroupingDefinition<RecordType>>
      | undefined
  ) => void
}

const EmptyGroupingValue = "__no-grouping__"

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
            value: EmptyGroupingValue,
          },
        ]
      : []),
    ...Object.entries(grouping.groupBy || {})
      .filter(
        (
          entry
        ): entry is [
          string,
          NonNullable<(typeof grouping.groupBy)[keyof typeof grouping.groupBy]>,
        ] => !!entry[1]
      )
      .map(([key, value]) => ({
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
            value={currentGrouping?.field ?? EmptyGroupingValue}
            onChange={(value: string) =>
              onGroupingChange(
                value !== EmptyGroupingValue
                  ? {
                      field: value,
                      order: currentGrouping?.order ?? "asc",
                    }
                  : undefined
              )
            }
          />
        </div>
        {currentGrouping?.field && (
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
        )}
      </div>
    </div>
  )
}
