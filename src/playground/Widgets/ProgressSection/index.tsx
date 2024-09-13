import {
  CategoryBar,
  CategoryBarProps,
} from "@/components/Charts/CategoryBarChart"

interface ProgressSectionProps extends Omit<CategoryBarProps, "data"> {
  label: string
  value: number
  max: number
  showMax?: boolean
  unit?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export function ProgressSection({
  label,
  value,
  max,
  showMax = false,
  unit = "h",
  primaryLabel = "Primary",
  secondaryLabel = "Secondary",
  ...categoryBarProps
}: ProgressSectionProps) {
  const isOverMax = value > max
  const remainingColor = isOverMax
    ? "hsl(var(--f1-foreground))"
    : "hsl(var(--f1-border))"
  const secondaryValue = isOverMax ? value - max : Math.max(0, max - value)

  const data = [
    { name: primaryLabel, value: isOverMax ? max : value },
    { name: secondaryLabel, value: secondaryValue, color: remainingColor },
  ]

  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <span className="text-f1-foreground-secondary text-base leading-none">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-f1-foreground text-xl font-bold">
            {value}
            {unit}
            {showMax && ` / ${max}${unit}`}
          </span>
        </div>
      </div>
      <CategoryBar data={data} {...categoryBarProps} />
    </div>
  )
}
