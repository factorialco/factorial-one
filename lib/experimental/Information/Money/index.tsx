import { cva, type VariantProps } from "class-variance-authority"
import { formatLargeMoney } from "./utils"

const counterVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-xl font-normal tabular-nums",
  {
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

type MoneyProps = {
  amount: number
  currency: string
  locale: string
  totalDigits?: number
} & VariantProps<typeof counterVariants>

export function Money({
  amount,
  currency,
  locale,
  totalDigits,
  size,
  type,
}: MoneyProps) {
  const displayValue = formatLargeMoney(amount, currency, locale, totalDigits)

  return <div className={counterVariants({ size, type })}>{displayValue}</div>
}
