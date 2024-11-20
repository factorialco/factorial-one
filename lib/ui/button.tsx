import { cn, focusRing } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

export const variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
] as const

export const sizes = ["sm", "md", "lg"] as const

const buttonVariants = cva(
  cn(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    focusRing()
  ),
  {
    variants: {
      variant: {
        default:
          "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
        outline:
          "border border-solid border-f1-border bg-f1-background-inverse-secondary text-f1-foreground hover:border-f1-border-hover",
        neutral:
          "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        critical:
          "border border-solid border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:border-transparent hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse dark:bg-transparent dark:hover:bg-f1-background-critical-bold",
        ghost:
          "bg-transparent text-f1-foreground hover:bg-f1-background-secondary-hover",
        promote:
          "border border-solid border-f1-border-promote bg-f1-background-promote text-f1-foreground hover:bg-f1-background-promote-hover",
      } satisfies Record<(typeof variants)[number], string>,
      size: {
        sm: "h-6 rounded-sm px-2",
        md: "h-8 rounded px-3",
        lg: "h-10 rounded px-4",
      } satisfies Record<(typeof sizes)[number], string>,
      round: {
        true: "aspect-square px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      round: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, round, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, round }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
