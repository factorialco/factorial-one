import { OverflowList } from "@/ui/OverflowList"
import { Tag, TagVariant } from "../F0Tag/F0Tag"
import { TagCounter } from "./components/TagCounter"
import type { F0TagListProps, TagType } from "./types"

export const F0TagList = <T extends TagType>({
  type,
  tags,
  max = 4,
  remainingCount: initialRemainingCount,
}: F0TagListProps<T>) => {
  // Convert tags to TagVariant
  const tagVariants = tags.map(
    (tagData) => ({ type, ...tagData }) as TagVariant
  )

  return (
    <OverflowList
      items={tagVariants}
      max={max}
      renderListItem={(tag) => <Tag tag={tag} />}
      renderDropdownItem={() => null}
      forceShowingOverflowIndicator={initialRemainingCount !== undefined}
      renderOverflowIndicator={(count) => (
        <TagCounter
          count={(initialRemainingCount ?? 0) + count}
          list={
            initialRemainingCount
              ? undefined
              : tagVariants.slice(tagVariants.length - count)
          }
        />
      )}
      overflowIndicatorWithPopover={false}
      className="flex-1"
    />
  )
}

F0TagList.displayName = "F0TagList"
