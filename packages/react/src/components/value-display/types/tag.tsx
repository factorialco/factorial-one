/**
 * Tag cell type for displaying single tags with optional icons.
 * Used for labeling or categorizing items in data collections.
 */
import { F0IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"

interface TagValue {
  label: string
  icon?: F0IconType
}
export type TagCellValue = TagValue

export const TagCell = (args: TagCellValue) => (
  <F0TagRaw text={args.label} icon={args.icon} />
)
