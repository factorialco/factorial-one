/**
 * Dot tag cell type for displaying colored dot indicators with labels.
 * Used for status indicators or category markers with color coding.
 */
import { NewColor, TagDot } from "@/experimental/Information/Tags/TagDot"

interface DotTagValue {
  label: string
  color: NewColor
}
export type DotTagCellValue = DotTagValue

export const DotTagCell = (args: DotTagCellValue) => (
  <TagDot text={args.label} color={args.color} />
)
