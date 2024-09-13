import { cn } from "@/lib/utils"
import * as React from "react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-lg border-2 border-solid border-f1-border-neutral bg-f1-background-neutral px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-neutral-secondary/60 hover:border-f1-border-neutral-hover focus-visible:border-f1-border-neutral-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-f1-background-neutral-secondary disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
