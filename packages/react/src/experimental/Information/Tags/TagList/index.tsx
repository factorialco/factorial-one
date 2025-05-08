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

type DotTagData = Omit<
  Extract<TagVariant, { type: "dot" }>,
  "type" | "description"
>
type PersonTagData = Omit<
  Extract<TagVariant, { type: "person" }>,
  "type" | "description"
>
type TeamTagData = Omit<
  Extract<TagVariant, { type: "team" }>,
  "type" | "description"
>
type CompanyTagData = Omit<
  Extract<TagVariant, { type: "company" }>,
  "type" | "description"
>
type AlertTagData = Omit<
  Extract<TagVariant, { type: "alert" }>,
  "type" | "description"
>
type StatusTagData = Omit<
  Extract<TagVariant, { type: "status" }>,
  "type" | "description"
>
type BalanceTagData = Omit<
  Extract<TagVariant, { type: "balance" }>,
  "type" | "description"
>

type TagTypeMapping = {
  dot: DotTagData
  person: PersonTagData
  team: TeamTagData
  company: CompanyTagData
  alert: AlertTagData
  status: StatusTagData
  balance: BalanceTagData
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

export const TagList = <T extends TagType>({
  type,
  tags,
  noTooltip = false,
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
