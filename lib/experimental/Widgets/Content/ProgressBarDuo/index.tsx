import { autoColor } from "@/components/Charts/utils/colors"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface DualProgressBarProps {
  value: number
  max?: number
}

export const ProgressBarDuo = forwardRef<HTMLDivElement, DualProgressBarProps>(
  function ProgressBarDuo({ value, max = 100 }: DualProgressBarProps, ref) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))

    return (
      <div ref={ref} className="flex h-2 w-full gap-0.5 overflow-hidden">
        <div
          className={cn(
            "rounded transition-all duration-300 ease-in-out",
            `bg-[${autoColor(0)}]`
          )}
          style={{ width: `${percentage}%` }}
        />
        <div
          className="rounded bg-f1-foreground-disabled transition-all duration-300 ease-in-out"
          style={{ width: `${100 - percentage}%` }}
        />
      </div>
    )
  }
)

ProgressBarDuo.displayName = "ProgressBarDuo"
