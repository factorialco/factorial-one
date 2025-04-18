import { forwardRef } from "react"
import { Icon, IconType } from "../components/Utilities/Icon"
import { cn } from "../lib/utils"

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
        <p className="text-3xl font-semibold">{content}</p>
        <div className="flex items-center gap-1">
          <p
            className="line-clamp-1 text-f1-foreground-secondary"
            title={label}
          >
            {label}
          </p>
          {icon && (
            <span className={cn("flex", color)}>
              <Icon icon={icon} />
            </span>
          )}
        </div>
      </div>
    )
  }
)
