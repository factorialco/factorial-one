/**
 * Status cell type for displaying status indicators with labels.
 * Used for showing the current state or condition of items in data collections.
 */
import {
  StatusTag,
  StatusVariant,
} from "@/experimental/Information/Tags/exports"

interface StatusValue {
  status: StatusVariant
  label: string
}
export type StatusCellValue = StatusValue

export const StatusCell = (args: StatusCellValue) => (
  <StatusTag variant={args.status} text={args.label} />
)
