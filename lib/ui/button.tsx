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
        default: "hover:bg-accent-60 text-neutral-0 bg-accent",
        outline:
          "border-neutral-30 bg-neutral-0 hover:border-neutral-40 border border-solid text-neutral-100",
        neutral: "bg-neutral-10 hover:bg-neutral-20 text-neutral-100",
        critical:
          "border-neutral-20 bg-neutral-5 text-critical-70 hover:bg-critical-70 hover:text-neutral-0 border border-solid hover:border-none",
        ghost: "hover:bg-neutral-10 bg-transparent text-neutral-100",
        promote:
          "bg-promote-50/20 border-promote-50/40 hover:bg-promote-50/40 border border-solid text-neutral-100",
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
