import { Indicator } from "@/ui/indicator"
import { ComponentProps, forwardRef } from "react"

export interface IndicatorsListProps {
  items: ComponentProps<typeof Indicator>[]
}

export const IndicatorsList = forwardRef<HTMLDivElement, IndicatorsListProps>(
  ({ items }, ref) => {
    return (
      <div ref={ref} className="flex flex-grow flex-row justify-between">
        {items.map(({ label, count, icon, color }) => (
          <div key={label} className="flex-1">
            <Indicator label={label} count={count} icon={icon} color={color} />
          </div>
        ))}
      </div>
    )
  }
)
