import { Button } from "@/components/Actions/Button"
import { ChevronDown, ChevronUp } from "@/icons"

export interface NavigationProps {
  current: number
  total: number
  onPrevious: () => void
  onNext: () => void
}

export function Navigation({
  current,
  total,
  onPrevious,
  onNext,
}: NavigationProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-sm tabular-nums text-f1-foreground-secondary">
        {current}/{total}
      </div>
      <Button
        round
        size="sm"
        variant="outline"
        onClick={onPrevious}
        label="Previous"
        icon={ChevronUp}
        hideLabel
        disabled={current === 1}
      />
      <Button
        round
        size="sm"
        variant="outline"
        onClick={onNext}
        label="Next"
        icon={ChevronDown}
        hideLabel
        disabled={current === total}
      />
    </div>
  )
}
