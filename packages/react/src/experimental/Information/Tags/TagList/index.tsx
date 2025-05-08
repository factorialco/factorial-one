import { OverflowList } from "@/ui/OverflowList"
import { cva } from "cva"
import { Tooltip } from "../../../Overlays/Tooltip"
import { Tag, TagVariant } from "../Tag"
import { TagCounter } from "./TagCounter"

const tagListVariants = cva({
  base: "flex items-center gap-2",
})

type Props = {
  tags: TagVariant[]
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

export const TagList = ({
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
        renderListItem={(tag) => {
          const displayName = getTagDisplayName(tag)
          const description = getTagDescription(tag)

          return noTooltip ? (
            <Tag tag={tag} />
          ) : (
            <Tooltip label={displayName} description={description}>
              <div>
                <Tag tag={tag} />
              </div>
            </Tooltip>
          )
        }}
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
    <div className={tagListVariants()}>
      {visibleTags.map((tag, index) => {
        const displayName = getTagDisplayName(tag)
        const description = getTagDescription(tag)

        return noTooltip ? (
          <Tag key={index} tag={tag} />
        ) : (
          <Tooltip key={index} label={displayName} description={description}>
            <div>
              <Tag tag={tag} />
            </div>
          </Tooltip>
        )
      })}
      {showCounter && (
        <TagCounter
          count={remainingCount}
          list={noTooltip || initialRemainingCount ? undefined : remainingTags}
        />
      )}
    </div>
  )
}

const getTagDisplayName = (tag: TagVariant): string => {
  switch (tag.type) {
    case "dot":
      return tag.text
    case "person":
      return tag.name
    case "team":
      return tag.teamName
    case "company":
      return tag.companyName
    case "alert":
    case "status":
    case "balance":
      return tag.text
    default:
      return ""
  }
}

const getTagDescription = (tag: TagVariant): string | undefined => {
  if ("description" in tag && typeof tag.description === "string") {
    return tag.description
  }
  return undefined
}

TagList.displayName = "TagList"
