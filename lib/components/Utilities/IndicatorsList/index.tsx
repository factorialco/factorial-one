import { Indicator } from "@/ui/indicator"
import { IconType } from "../Icon"

interface IndicatorsListProps {
  items: {
    label: string
    count: number
    icon?: IconType
    color: string
  }[]
}

export const IndicatorsList: React.FC<IndicatorsListProps> = ({ items }) => {
  return (
    <div className="flex flex-grow flex-row justify-between">
      {items.map(({ label, count, icon, color }) => (
        <div className="flex-1">
          <Indicator
            key={label}
            label={label}
            count={count}
            icon={icon}
            color={color}
          />
        </div>
      ))}
    </div>
  )
}
