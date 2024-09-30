import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface IndicatorProps {
  content: string
  label: string
  color?: string
  icon?: IconType
}

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  function Indicator({ content, label, icon, color }, ref) {
    return (
      <div key={label} className="grid-row-2 col-span-1 grid" ref={ref}>
        <p className="font-medium text-f1-foreground-secondary">{label}</p>
        <div className="flex items-center gap-1">
          <p className="text-xl font-semibold">{content}</p>
          {icon && (
            <span className={cn("flex", color)}>
              <Icon icon={icon} size="md" />
            </span>
          )}
        </div>
      </div>
    )
  }
)
