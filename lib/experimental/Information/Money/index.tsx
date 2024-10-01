import { cva, type VariantProps } from "class-variance-authority"
import { useEffect, useState } from "react"
import { formatLargeMoney } from "./utils"

const counterVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xs font-normal tabular-nums transition-colors duration-300",
  {
    variants: {
      size: {
        md: "min-w-5 p-0.5 text-2xl",
        sm: "min-w-4 px-0.5 text-lg",
      },
      type: {
        positive: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        negative: "bg-f1-background-accent-bold text-f1-foreground-inverse",
      },
    },
    defaultVariants: {
      size: "md",
      type: null,
    },
  }
)

type MoneyProps = {
  amount: number
  currency: string
  locale: string
  totalDigits?: number
  duration?: number // Duration of the animation
} & VariantProps<typeof counterVariants>

export function Money({
  amount,
  currency,
  locale,
  totalDigits,
  size,
  type,
  duration = 500, // Default animation duration
}: MoneyProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = amount / (duration / 16.66) // Calculate increment for 60fps

    const animateCounter = () => {
      start += increment
      if (start < amount) {
        setDisplayValue(start)
        requestAnimationFrame(animateCounter)
      } else {
        setDisplayValue(amount) // Ensure final value is precise
      }
    }

    requestAnimationFrame(animateCounter)
  }, [amount, duration])

  const formattedValue = formatLargeMoney(
    displayValue,
    currency,
    locale,
    totalDigits
  )

  return <div className={counterVariants({ size, type })}>{formattedValue}</div>
}
