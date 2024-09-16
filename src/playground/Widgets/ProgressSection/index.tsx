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
  note?: string
}

export function ProgressSection({
  label,
  value,
  max,
  showMax = false,
  unit = "h",
  primaryLabel = "Primary",
  secondaryLabel = "Secondary",
  note,
  ...categoryBarProps
}: ProgressSectionProps) {
  const isOverMax = value > max
  const remainingColor = isOverMax
    ? "hsl(var(--critical-50))"
    : "hsl(var(--neutral-20))"
  const secondaryValue = isOverMax ? value - max : Math.max(0, max - value)

  const data = [
    { name: primaryLabel, value: isOverMax ? max : value },
    { name: secondaryLabel, value: secondaryValue, color: remainingColor },
  ]

  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <span className="text-base leading-none text-f1-foreground-secondary">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-xl text-f1-foreground">
            {value}
            {unit}
            {showMax && ` / ${max}${unit}`}
          </span>
        </div>
      </div>
      <CategoryBar data={data} {...categoryBarProps} />
      <p className="text-f1-foreground-secondary">{note}</p>
    </div>
  )
}
