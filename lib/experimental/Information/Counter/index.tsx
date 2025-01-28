import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"

const counterVariants = cva({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums",
    variants: {
      size: {
        md: "min-w-5 p-0.5",
        sm: "min-w-4 px-0.5",
      },
      type: {
        default:
          "border border-solid border-f1-border bg-f1-background-secondary",
        selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        bold: "bg-f1-background-accent-bold text-f1-foreground-inverse",
      },
    },
    defaultVariants: {
      size: "md",
      type: "default",
    },
  }
)

type CounterProps = {
  value: number
  maxValue?: number
} & VariantProps<typeof counterVariants>

export function Counter({ size, type, value, maxValue }: CounterProps) {
  const displayValue = maxValue && value > maxValue ? `+${maxValue}` : value

  return (
    <div className={cn("text-f1-foreground", counterVariants({ size, type }))}>
      {displayValue}
    </div>
  )
}
