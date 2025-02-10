import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn, focusRing } from "@/lib/utils"
import * as React from "react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType
  clearable?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, clearable, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover",
          focusRing("focus-visible:border-f1-border-hover"),
          icon ? "flex gap-1.5 ps-2" : "ps-3",
          props.disabled &&
            "cursor-not-allowed bg-f1-background-secondary opacity-50",
          className
        )}
      >
        {icon && <Icon icon={icon} />}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            !clearable ? "[&::-webkit-search-cancel-button]:hidden" : "",
            "growth w-full shrink disabled:cursor-not-allowed"
          )}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
