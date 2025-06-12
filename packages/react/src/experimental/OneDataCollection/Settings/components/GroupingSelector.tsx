import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ArrowDown, ArrowUp, Placeholder } from "@/icons/app"
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
    <div className="flex flex-col gap-0 pb-3">
      <div className="flex items-center gap-1 p-3 pb-2 text-sm font-medium text-f1-foreground-secondary">
        <div className="flex h-4 w-4 items-center justify-center text-f1-icon">
          <Icon icon={Placeholder} size="sm" />
        </div>
        {i18n.collections.grouping.groupBy}
      </div>
      <div className="flex items-center gap-2 px-3">
        <div className="shrink grow [&_button]:h-8 [&_button]:rounded">
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
