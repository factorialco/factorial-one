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
