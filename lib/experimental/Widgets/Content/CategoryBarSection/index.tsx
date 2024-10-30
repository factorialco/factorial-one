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
}

export function CategoryBarSection({
  title,
  subtitle,
  data,
  helpText,
  legend = false,
}: CategoryBarSectionProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-2xl font-semibold text-f1-foreground-secondary">
          {subtitle}
        </span>
      </div>
      <div className="mt-2">
        <CategoryBarChart data={data} legend={legend} />
      </div>
      {!!helpText && (
        <div className="mt-1">
          <span className="text-sm">{helpText}</span>
        </div>
      )}
    </div>
  )
}
