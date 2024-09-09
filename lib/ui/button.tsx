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
        default: "bg-accent text-neutral-0 hover:bg-accent-60",
        outline:
          "border border-solid border-neutral-30 bg-neutral-0 text-neutral-100 hover:border-neutral-40",
        neutral: "bg-neutral-10 text-neutral-100 hover:bg-neutral-20",
        critical:
          "border border-solid border-neutral-20 bg-neutral-5 text-critical-70 hover:border-none hover:bg-critical-70 hover:text-neutral-0",
        ghost: "bg-transparent text-neutral-100 hover:bg-neutral-10",
        promote:
          "border border-solid border-promote-50/40 bg-promote-50/20 text-neutral-100 hover:bg-promote-50/40",
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
