import { Icon, IconType } from "@/components/Utilities/Icon"

interface IconValue {
  icon: IconType
  label: string
}
export type IconCellValue = IconValue

export const IconCell = (args: IconCellValue) => (
  <div className="flex items-center gap-2">
    <Icon icon={args.icon} />
    <span className="text-f1-foreground">{args.label}</span>
  </div>
)
