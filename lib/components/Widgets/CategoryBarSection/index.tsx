import {
  CategoryBarChart,
  CategoryBarProps,
} from "@/components/Charts/CategoryBarChart"

interface CategoryBarSectionProps {
  label: string
  title: string
  data: CategoryBarProps["data"]
  helpText?: string
  legend?: boolean
}

export function CategoryBarSection({
  label,
  title,
  data,
  helpText,
  legend = false,
}: CategoryBarSectionProps) {
  return (
    <div>
      <div className="space-y-0.5">
        <span className="text-base leading-none text-f1-foreground-secondary">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-2xl">{title}</span>
        </div>
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
