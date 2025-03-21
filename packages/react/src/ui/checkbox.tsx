import { Icon } from "../components/Utilities/Icon"
import { Check, Minus } from "../icons/app"
import { cn, focusRing } from "../lib/utils"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useId } from "react"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    indeterminate?: boolean
    hideLabel?: boolean
  }
>(({ className, indeterminate, disabled, hideLabel, ...props }, ref) => {
  // Generate a unique ID if one isn't provided
  const uniqueId = useId()
  const checkboxId = props.id || uniqueId

  return (
    <div className="flex items-center">
      <CheckboxPrimitive.Root
        {...props}
        ref={ref}
        id={checkboxId}
        name={checkboxId}
        aria-label={props.title}
        className={cn(
          "h-5 w-5 shrink-0 rounded-xs border border-solid border-f1-border text-f1-foreground-selected transition-[background-color,border-color] hover:border-f1-border-hover data-[state=checked]:bg-f1-background-selected-bold data-[state=checked]:text-f1-foreground-inverse hover:data-[state=checked]:border-transparent",
          disabled && "cursor-not-allowed opacity-50 hover:border-f1-border",
          indeterminate &&
            "data-[state=checked]:bg-f1-background data-[state=checked]:text-f1-foreground-selected hover:data-[state=checked]:border-f1-border-hover",
          props.checked &&
            disabled &&
            "data-[state=checked]:bg-f1-background-secondary data-[state=checked]:text-f1-foreground-secondary",
          focusRing(),
          className
        )}
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
        disabled={disabled}
      >
        <AnimatePresence>
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current transition-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                ease: [0.175, 0.885, 0.32, 1.275],
                duration: 0.4,
              }}
              className="flex items-center justify-center"
            >
              {indeterminate ? (
                <Icon icon={Minus} size="sm" />
              ) : (
                <Icon icon={Check} size="sm" />
              )}
            </motion.div>
          </CheckboxPrimitive.Indicator>
        </AnimatePresence>
      </CheckboxPrimitive.Root>
      {props.title && !hideLabel && (
        <label
          htmlFor={checkboxId}
          className={cn(
            "flex items-center justify-center pl-2.5 text-current hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
            disabled && "cursor-not-allowed opacity-50 hover:cursor-not-allowed"
          )}
        >
          {props.title}
        </label>
      )}
    </div>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

const CheckboxRoot = CheckboxPrimitive.Root

export { Checkbox, CheckboxRoot }
