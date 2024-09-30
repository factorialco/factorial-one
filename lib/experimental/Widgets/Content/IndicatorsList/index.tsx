import { Icon } from "@/components/Utilities/Icon"
import { Indicator } from "@/ui/indicator"
import { ComponentProps, forwardRef } from "react"

export interface IndicatorsListProps {
  items: ComponentProps<typeof Indicator>[]
}

export const IndicatorsList = forwardRef<HTMLDivElement, IndicatorsListProps>(
  ({ items }, ref) => {
    return (
      <div
        ref={ref}
        className="grid auto-cols-fr grid-flow-col items-end gap-x-3"
      >
        {items.map(({ label, content, icon, color }) => (
          <>
            <p className="row-start-1 line-clamp-2 text-sm font-medium uppercase text-f1-foreground-secondary">
              {label}
            </p>
            <div className="row-start-2 flex items-baseline gap-1">
              <p className="text-2xl font-semibold">{content}</p>
              {icon && (
                <span className={color}>
                  <Icon icon={icon} size="md" />
                </span>
              )}
            </div>
          </>
        ))}
      </div>
    )
  }
)

IndicatorsList.displayName = "IndicatorsList"
