import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { GroupingDefinition, GroupingState } from "../../grouping"
import { RecordType } from "../../types"

type GroupingSelectorProps<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
> = {
  grouping: Grouping
  currentGrouping: GroupingState<R, Grouping> | undefined
  onGroupingChange: (groupingState: GroupingState<R, Grouping>) => void
}

const EmptyGroupingValue = "__no-grouping__"

export const GroupingSelector = <
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
>({
  grouping,
  currentGrouping,
  onGroupingChange,
}: GroupingSelectorProps<R, Grouping>) => {
  const i18n = useI18n()
  const groupingOptions = [
    ...(!grouping.mandatory
      ? [
          {
            label: i18n.collections.grouping.noGrouping,
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
      <label>{i18n.collections.grouping.groupBy}</label>
      <div className="flex items-center gap-2">
        <div className="shrink grow">
          <Select
            options={groupingOptions}
            value={currentGrouping?.field.toString() ?? EmptyGroupingValue}
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
              label={i18n.collections.grouping.toggleDirection}
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
