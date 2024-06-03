import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

export const variants = [
  "default",
  "secondary",
  "outline",
  "destructive",
  "positive",
  "ghost",
] as const

export const sizes = ["default", "sm"] as const

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border-solid text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-2 border-primary-intermediate bg-background text-primary-foreground hover:bg-primary",
        secondary:
          "border-2 border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        outline:
          "border-2 border-solid border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        destructive:
          "border-2 border-destructive-intermediate bg-destructive text-destructive-foreground hover:bg-destructive/70",
        positive:
          "border-2 border-positive-intermediate bg-positive text-positive-foreground hover:bg-positive/70",
        ghost:
          "border-none text-intermediate hover:bg-accent hover:text-accent-foreground",
      } satisfies Record<(typeof variants)[number], string>,
      rounded: {
        true: "aspect-square px-0",
      },
      size: {
        default: "h-10 py-2",
        sm: "h-8",
      } satisfies Record<(typeof sizes)[number], string>,
    },
    compoundVariants: [
      {
        size: "default",
        rounded: false,
        class: "px-4",
      },
      {
        size: "sm",
        rounded: false,
        class: "px-3",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, rounded, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, rounded }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
