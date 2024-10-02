import { cva, type VariantProps } from "class-variance-authority"
import { formatLargeMoney } from "./utils"

const counterVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xs font-normal tabular-nums transition-colors duration-300", // Basic styling for positioning and formatting
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
      blur: {
        true: "blur-md",
        false: "",
      },
      animation: {
        true: "animate-count-up",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      type: null,
      blur: false,
      animation: true,
    },
  }
)

type MoneyProps = {
  amount: number
  currency: string
  locale: string
  totalDigits?: number
  duration?: number // Duration of the animation
  blur?: boolean // Enable or disable blur effect
  animated?: boolean // Enable or disable the counting animation
} & VariantProps<typeof counterVariants>

export function Money({
  amount,
  currency,
  locale,
  totalDigits,
  size,
  type,
  duration = 500, // Default animation duration
  blur = false, // Disable blur by default
  animated = true, // Enable animation by default
}: MoneyProps) {
  const formattedValue = formatLargeMoney(amount, currency, locale, totalDigits)

  // Generate the style for dynamic animation duration
  const inlineStyles = {
    animationDuration: `${duration}ms`, // Use the duration prop dynamically
  }

  return (
    <div
      className={counterVariants({ size, type, blur, animation: animated })}
      style={animated ? inlineStyles : {}}
    >
      {formattedValue}
    </div>
  )
}
