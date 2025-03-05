import { cn } from "@/lib/utils.ts"
import { forwardRef, useId } from "react"
import { Label } from "./components/Label.tsx"

export const inputFieldSizes = ["sm", "md"] as const
export type InputFieldSize = (typeof inputFieldSizes)[number]

export type InputFieldProps<T> = {
  label: string // Required for accessibility purpose
  hideLabel?: boolean
  placeholder?: string
  value: T
  onChange: (value: T) => void
  size?: InputFieldSize
  errors?: string | string[] | boolean
  disabled?: boolean
  className?: string
  required?: boolean
  clearable?: boolean
  onClear?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

const InputField = forwardRef(
  (
    {
      children,
      disabled,
      label,
      className,
      required,
      hideLabel = false,
      ...props
    }: InputFieldProps<T>,
    ref
  ) => {
    const id = useId()

    return (
      <div className={cn("flex flex-col", className)} ref={ref}>
        (!hideLabel && (
        <div className={cn("flex flex-col")} data-testid="input-field-top">
          <Label label={label} required={required} htmlFor={id} />
        </div>
        ))
        <div
          className={cn(
            "ring-offset-background focus-visible:ring-ring w-full rounded-xl",
            disabled ? "opacity-30" : ""
          )}
          data-testid="input-field-wrapper"
        >
          {children}
        </div>
      </div>
    )
  }
)

InputField.displayName = "InputField"

export { InputField }
