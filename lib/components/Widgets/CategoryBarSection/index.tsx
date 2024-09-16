import {
  CategoryBar,
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
        <span className="text-base leading-none text-muted-foreground">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">{title}</span>
        </div>
      </div>
      <div className="mt-2">
        <CategoryBar data={data} legend={legend} />
      </div>
      {!!helpText && (
        <div className="mt-1">
          <span className="text-sm text-foreground">{helpText}</span>
        </div>
      )}
    </div>
  )
}
