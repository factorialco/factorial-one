/**
 * Tag list cell type for displaying multiple tags in a collection.
 * Supports different tag types and can limit the maximum number of visible tags.
 */
import { TagVariant } from "@/experimental/Information/Tags/Tag"
import { TagList, TagType } from "@/experimental/Information/Tags/TagList"

interface TagListValue {
  tags: Array<Omit<TagVariant, "type">>
  max?: number
  type: TagType
}
export type TagListCellValue = TagListValue

export const TagListCell = (args: TagListCellValue) => (
  <TagList type={args.type} tags={args.tags as TagVariant[]} max={args.max} />
)
