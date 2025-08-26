/**
 * Status cell type for displaying status indicators with labels.
 * Used for showing the current state or condition of items in data collections.
 */
import {
  StatusVariant,
  TagStatus,
} from "@/experimental/Information/Tags/TagStatus"

interface StatusValue {
  status: StatusVariant
  label: string
}
export type StatusCellValue = StatusValue

export const StatusCell = (args: StatusCellValue) => (
  <TagStatus variant={args.status} text={args.label} />
)
