import { DotTag, NewColor } from "@/experimental/Information/Tags/DotTag"

interface DotTagValue {
  label: string
  color: NewColor
}
export type DotTagCellValue = DotTagValue

export const DotTagCell = (args: DotTagCellValue) => (
  <DotTag text={args.label} color={args.color} />
)
