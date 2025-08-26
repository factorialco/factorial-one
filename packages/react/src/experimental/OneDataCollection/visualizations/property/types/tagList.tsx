/**
 * Tag list cell type for displaying multiple tags in a collection.
 * Supports different tag types and can limit the maximum number of visible tags.
 */
import { TagVariant } from "@/components/F0Tags/Tag"
import { F0TagList, TagType } from "@/components/F0Tags/TagList"

interface TagListValue {
  tags: Array<Omit<TagVariant, "type">>
  max?: number
  type: TagType
}
export type TagListCellValue = TagListValue

export const TagListCell = (args: TagListCellValue) => (
  <F0TagList type={args.type} tags={args.tags as TagVariant[]} max={args.max} />
)
