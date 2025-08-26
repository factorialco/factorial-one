/**
 * Tag cell type for displaying single tags with optional icons.
 * Used for labeling or categorizing items in data collections.
 */
import { IconType } from "@/components/Utilities/Icon"
import { TagRaw } from "@/experimental/Information/Tags/TagRaw"

interface TagValue {
  label: string
  icon?: IconType
}
export type TagCellValue = TagValue

export const TagCell = (args: TagCellValue) => (
  <TagRaw text={args.label} icon={args.icon} />
)
