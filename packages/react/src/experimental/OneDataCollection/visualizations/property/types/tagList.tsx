/**
 * Tag list cell type for displaying multiple tags in a collection.
 * Supports different tag types and can limit the maximum number of visible tags.
 */
import { TagList, TagType } from "@/experimental/Information/Tags/exports"
import { TagVariant } from "@/experimental/Information/Tags/Tag"

interface TagListValue {
  tags: Array<Omit<TagVariant, "type">>
  max?: number
  type: TagType
}
export type TagListCellValue = TagListValue

export const TagListCell = (args: TagListCellValue) => (
  <TagList type={args.type} tags={args.tags as TagVariant[]} max={args.max} />
)
