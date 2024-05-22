import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "f-inline-flex f-outline-none f-items-center f-justify-center f-whitespace-nowrap f-rounded-md f-text-sm f-font-medium f-ring-offset-background f-transition-colors focus-visible:f-outline-none focus-visible:f-ring-2 focus-visible:f-ring-ring focus-visible:f-ring-offset-2 disabled:f-pointer-events-none disabled:f-opacity-50",
  {
    variants: {
      variant: {
        default: "f-bg-primary f-text-primary-foreground hover:f-bg-primary/90",
        destructive:
          "f-bg-destructive f-text-destructive-foreground hover:f-bg-destructive/90",
        outline:
          "f-border f-border-input f-bg-background hover:f-bg-accent hover:f-text-accent-foreground",
        secondary:
          "f-bg-secondary f-text-secondary-foreground hover:f-bg-secondary/80",
        ghost: "hover:f-bg-accent hover:f-text-accent-foreground",
        link: "f-text-primary f-underline-offset-4 hover:f-underline",
      },
      size: {
        default: "f-h-10 f-px-4 f-py-2",
        sm: "f-h-9 f-rounded-md f-px-3",
        lg: "f-h-11 f-rounded-md f-px-8",
        icon: "f-h-10 f-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
