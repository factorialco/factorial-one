/**
 * Alert tag cell type for displaying alert indicators with labels.
 * Used for showing alerts on items in data collections.
 */
import { AlertTag } from "@/experimental/Information/Tags/AlertTag"
import { ComponentProps } from "react"

interface AlertTagValue {
  level: ComponentProps<typeof AlertTag>["level"]
  label: string
}
export type AlertTagCellValue = AlertTagValue

export const AlertTagCell = (args: AlertTagCellValue) => (
  <AlertTag level={args.level} text={args.label} />
)
