import { Icon, IconType } from "../components/Utilities/Icon"
import { cn, focusRing } from "../lib/utils"
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
          "flex w-full appearance-none rounded-md border-0 bg-f1-background p-2 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
          focusRing("focus:ring-f1-border-hover"),
          icon ? "flex gap-1 ps-2" : "ps-3",
          props.disabled &&
            "cursor-not-allowed bg-f1-background-secondary opacity-50",
          className
        )}
      >
        {icon && <Icon icon={icon} className="text-f1-foreground-secondary" />}
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            !clearable ? "[&::-webkit-search-cancel-button]:hidden" : "",
            "w-full shrink disabled:cursor-not-allowed"
          )}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
