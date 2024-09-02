import { Progress } from "@/ui/progress"
import { autoColor } from "../utils/colors"

export interface ProgressBarProps {
  value: number
  label?: string
  color?: string
}

export function ProgressBar({ value, label, color }: ProgressBarProps) {
  const barColor = color || autoColor(0)
  return (
    <div className={`flex items-center space-x-2`}>
      <div className="flex-grow">
        <Progress
          color={barColor}
          value={value}
          className="w-full"
          aria-label={`${value}%`}
        />
      </div>
      {label && (
        <div className="flex-shrink-0 text-sm font-medium" aria-live="polite">
          {label}
        </div>
      )}
    </div>
  )
}
