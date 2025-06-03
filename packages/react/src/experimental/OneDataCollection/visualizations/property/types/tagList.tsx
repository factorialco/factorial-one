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
