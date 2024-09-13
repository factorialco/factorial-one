import { cn } from "@/lib/utils"
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

const buttonVariants = cva(
  "focus-visible:ring-offset inline-flex h-10 items-center justify-center gap-1 whitespace-nowrap rounded-xl border-none text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
        outline:
          "border-f1-border bg-f1-background text-f1-foreground hover:border-f1-border-hover border border-solid",
        neutral:
          "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        critical:
          "border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse border border-solid hover:border-none",
        ghost:
          "text-f1-foreground hover:bg-f1-background-secondary-hover bg-transparent",
        promote:
          "border-f1-border-promote bg-f1-background-promote text-f1-foreground hover:bg-f1-background-promote-hover border border-solid",
      } satisfies Record<(typeof variants)[number], string>,
      round: {
        true: "aspect-square px-0",
        false: "px-4",
      },
    },
    defaultVariants: {
      variant: "default",
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
  ({ className, round, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, round }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
