/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { TagAlert } from "@/experimental/Information/Tags/TagAlert"
import { ComponentProps } from "react"

interface AlertTagValue {
  level: ComponentProps<typeof TagAlert>["level"]
  label: string
}
export type AlertTagCellValue = AlertTagValue

export const AlertTagCell = (args: AlertTagCellValue) => (
  <TagAlert level={args.level} text={args.label} />
)
