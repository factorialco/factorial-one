import {
  CategoryBar,
  CategoryBarProps,
} from "@/components/Charts/CategoryBarChart"

interface ProgressSectionProps extends CategoryBarProps {
  label: string
  value: number
  max: number
  showMax?: boolean
  unit?: string
}

export function ProgressSection({
  label,
  value,
  max,
  showMax = false,
  unit = "h",
  ...categoryBarProps
}: ProgressSectionProps) {
  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <span className="text-base leading-none text-muted-foreground">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">
            {value}
            {unit}
          </span>
          {showMax && (
            <span className="text-lg font-medium text-muted-foreground">{` / ${max}${unit}`}</span>
          )}
        </div>
      </div>
      <CategoryBar {...categoryBarProps} />
    </div>
  )
}
