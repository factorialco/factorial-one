import { OverflowList } from "@/ui/OverflowList"
import { cva } from "cva"
import { TagCounter, DotTagItem as TagCounterDotTagItem } from "./TagCounter"
import { TooltippedDotTag } from "./TooltippedDotTag"

const dotTagListVariants = cva({
  base: "flex items-center gap-2",
})

export type DotTagItem = TagCounterDotTagItem

type Props = {
  tags: DotTagItem[]

  /**
   * Whether to hide tooltips for each tag
   * @default false
   */
  noTooltip?: boolean

  /**
   * The maximum number of tags to display.
   * @default 4
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * The layout of the tag list.
   * - "fill" - Tags will expand to fill the available width, with overflow items shown in a counter
   * - "compact" - Tags will be stacked together up to the max limit, with remaining shown in counter
   * @default "compact"
   */
  layout?: "fill" | "compact"
}

export const DotTagList = ({
  tags,
  noTooltip = false,
  max = 4,
  remainingCount: initialRemainingCount,
  layout = "compact",
}: Props) => {
  if (layout === "fill") {
    return (
      <OverflowList
        items={tags}
        renderListItem={(tag) => (
          <TooltippedDotTag
            label={tag.label}
            description={tag.description}
            color={tag.color}
            noTooltip={noTooltip}
          />
        )}
        renderDropdownItem={() => null}
        forceShowingOverflowIndicator={initialRemainingCount !== undefined}
        renderOverflowIndicator={(count) => (
          <TagCounter
            count={(initialRemainingCount ?? 0) + count}
            list={
              initialRemainingCount
                ? undefined
                : tags.slice(tags.length - count)
            }
          />
        )}
        overflowIndicatorWithPopover={false}
        className="flex-1"
      />
    )
  }

  const visibleTags = tags.slice(0, max)
  const remainingTags = tags.slice(max)
  const remainingCount = initialRemainingCount ?? tags.length - max
  const showCounter = remainingCount > 0

  return (
    <div className={dotTagListVariants()}>
      {visibleTags.map((tag, index) => (
        <TooltippedDotTag
          key={index}
          label={tag.label}
          description={tag.description}
          color={tag.color}
          noTooltip={noTooltip}
        />
      ))}
      {showCounter && (
        <TagCounter
          count={remainingCount}
          list={noTooltip || initialRemainingCount ? undefined : remainingTags}
        />
      )}
    </div>
  )
}

DotTagList.displayName = "DotTagList"
