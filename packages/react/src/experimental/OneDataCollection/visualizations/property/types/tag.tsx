/**
 * Tag cell type for displaying single tags with optional icons.
 * Used for labeling or categorizing items in data collections.
 */
import { IconType } from "@/components/Utilities/Icon"
import { RawTag } from "@/experimental/Information/Tags/RawTag"

interface TagValue {
  label: string
  icon?: IconType
}
export type TagCellValue = TagValue

export const TagCell = (args: TagCellValue) => (
  <RawTag text={args.label} icon={args.icon} />
)
