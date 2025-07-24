import {
  GroupingDefinition,
  GroupingState,
  RecordType,
  SortOrder,
} from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { SelectWithDirection } from "../SelectWithDirection"

type GroupingSelectorProps<
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
> = {
  grouping?: Grouping
  currentGrouping?: GroupingState<R, Grouping>
  onGroupingChange?: (groupingState: GroupingState<R, Grouping>) => void
  hideLabel?: boolean
  hideDirection?: boolean
  className?: string
}

const EmptyGroupingValue = "__no-grouping__"

export const GroupingSelector = <
  R extends RecordType,
  Grouping extends GroupingDefinition<R>,
>({
  grouping,
  currentGrouping,
  onGroupingChange,
  className,
  hideLabel,
  hideDirection,
}: GroupingSelectorProps<R, Grouping>) => {
  const i18n = useI18n()
  if (
    !grouping ||
    (!!grouping.mandatory && Object.entries(grouping.groupBy).length < 2)
  ) {
    return null
  }

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
    <SelectWithDirection
      options={groupingOptions}
      value={
        currentGrouping
          ? {
              selected: currentGrouping.field.toString(),
              direction: currentGrouping.order,
            }
          : {
              selected: EmptyGroupingValue,
              direction: "asc",
            }
      }
      onChange={
        onGroupingChange
          ? (value) =>
              onGroupingChange(
                value?.selected === EmptyGroupingValue
                  ? undefined
                  : {
                      field: value?.selected as keyof Grouping["groupBy"],
                      order: value?.direction as SortOrder,
                    }
              )
          : undefined
      }
      label={i18n.collections.grouping.groupBy}
      className={className}
      hideDirection={hideDirection}
      hideLabel={hideLabel}
    />
  )
}
