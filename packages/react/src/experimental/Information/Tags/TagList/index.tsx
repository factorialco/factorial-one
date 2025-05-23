import { OverflowList } from "@/ui/OverflowList"
import { cva } from "cva"
import { Tooltip } from "../../../Overlays/Tooltip"
import { Tag, TagVariant } from "../Tag"
import { TagCounter } from "./TagCounter"

const tagListVariants = cva({
  base: "flex items-center gap-2",
})

type WithTooltipDescription = {
  description?: string
}

// Generic type helper to create tag data types
type TagDataType<T extends string> = Omit<
  Extract<TagVariant, { type: T }>,
  "type" | "description"
>

// Define tag types using the generic helper
type TagTypeMapping = {
  dot: TagDataType<"dot">
  person: TagDataType<"person">
  team: TagDataType<"team">
  company: TagDataType<"company">
  alert: TagDataType<"alert">
  status: TagDataType<"status">
  balance: TagDataType<"balance">
}

export type TagType = keyof TagTypeMapping

type Props<T extends TagType> = {
  /**
   * The type of tags to display. Only one type can be used at a time.
   */
  type: T

  /**
   * Array of tag data corresponding to the specified type.
   */
  tags: Array<TagTypeMapping[T] & WithTooltipDescription>

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

export const TagList = <T extends TagType>({
  type,
  tags,
  max = 4,
  remainingCount: initialRemainingCount,
  layout = "compact",
}: Props<T>) => {
  // Convert tags to TagVariant
  const tagVariants = tags.map(
    (tagData) => ({ type, ...tagData }) as TagVariant
  )

  if (layout === "fill") {
    return (
      <OverflowList
        items={tagVariants}
        renderListItem={(tag) => {
          const description = getTagDescription(tag)

          return description ? (
            <Tooltip label={description}>
              <div>
                <Tag tag={tag} />
              </div>
            </Tooltip>
          ) : (
            <Tag tag={tag} />
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
                : tagVariants.slice(tagVariants.length - count)
            }
          />
        )}
        overflowIndicatorWithPopover={false}
        className="flex-1"
      />
    )
  }

  const visibleTags = tagVariants.slice(0, max)
  const remainingTags = tagVariants.slice(max)
  const remainingCount = initialRemainingCount ?? tagVariants.length - max
  const showCounter = remainingCount > 0

  return (
    <div className={tagListVariants()}>
      {visibleTags.map((tag, index) => {
        const description = getTagDescription(tag)

        return description ? (
          <Tooltip key={index} label={description}>
            <div>
              <Tag key={index} tag={tag} />
            </div>
          </Tooltip>
        ) : (
          <Tag key={index} tag={tag} />
        )
      })}
      {showCounter && (
        <TagCounter
          count={remainingCount}
          list={initialRemainingCount ? undefined : remainingTags}
        />
      )}
    </div>
  )
}
const getTagDescription = (tag: TagVariant): string | undefined => {
  if ("description" in tag && typeof tag.description === "string") {
    return tag.description
  }
  return undefined
}

TagList.displayName = "TagList"
