import {
  CategoryBarChart,
  CategoryBarProps,
} from "@/components/Charts/CategoryBarChart"

interface CategoryBarSectionProps {
  title: string
  subtitle: string
  data: CategoryBarProps["data"]
  helpText?: string
  legend?: boolean
  hideTooltip?: boolean
}

export function CategoryBarSection({
  title,
  subtitle,
  data,
  helpText,
  legend = false,
  hideTooltip = false,
}: CategoryBarSectionProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-xl text-f1-foreground-secondary">{subtitle}</span>
      </div>
      <div className="mt-2">
        <CategoryBarChart
          data={data}
          legend={legend}
          hideTooltip={hideTooltip}
        />
      </div>
      {!!helpText && (
        <div className="mt-1">
          <span className="text-sm">{helpText}</span>
        </div>
      )}
    </div>
  )
}
