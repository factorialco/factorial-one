import { cn, focusRing } from "@/lib/utils"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import * as React from "react"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    partial?: boolean
  }
>(({ className, partial, ...props }, ref) => (
  <div className="flex items-center gap-4">
    <CheckboxPrimitive.Root
      ref={ref}
      id={props.id}
      className={cn(
        "ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary peer h-4 w-4 shrink-0 rounded-2xs border-2 border-solid border-f1-border disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-f1-foreground",
        focusRing(),
        className
      )}
      {...props}
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {partial ? (
          <Minus className="h-3 w-3" />
        ) : (
          <Check className="h-3 w-3" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {props.title && (
      <label
        htmlFor={props.id}
        className="flex items-center justify-center text-current hover:cursor-pointer"
      >
        {props.title}
      </label>
    )}
  </div>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxRoot = CheckboxPrimitive.Root

export { Checkbox, CheckboxRoot }
