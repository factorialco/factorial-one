import { Progress } from "@/ui/progress"
import { autoColor } from "../utils/colors"

export interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  color?: string
}

export function ProgressBar({
  value,
  max = 100,
  label,
  color,
}: ProgressBarProps) {
  const barColor = color || autoColor(0)
  const percentage = (value / max) * 100

  return (
    <div className="flex items-center space-x-2" aria-live="polite">
      <div className="flex-grow">
        <Progress
          color={barColor}
          value={percentage}
          className="w-full"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={`${percentage.toFixed(1)}%`}
        />
      </div>
      {label && (
        <div className="flex-shrink-0 text-sm font-medium tabular-nums">
          {label}
        </div>
      )}
    </div>
  )
}
