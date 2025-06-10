import { Icon, IconType } from "@/components/Utilities/Icon"
import { CrossedCircle } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { cva } from "cva"
import { forwardRef, useId } from "react"
import { InputMessages } from "./components/InputMessages"
import { Label } from "./components/Label"
;``
export const inputFieldSizes = ["sm", "md"] as const
export type InputFieldSize = (typeof inputFieldSizes)[number]

export type InputFieldProps<T> = {
  label: string // Required for accessibility purpose
  hideLabel?: boolean
  placeholder?: string
  value: T
  onChange: (value: T) => void
  size?: InputFieldSize
  error?: string | string[] | boolean
  disabled?: boolean
  className?: string
  required?: boolean
  clearable?: boolean
  onClear?: () => void
  onFocus?: () => void
  onBlur?: () => void
  children: React.ReactNode
  icon?: IconType
  isEmpty?: (value: T) => boolean
  tag?: string
  maxLength?: number
  hideMaxLength?: boolean
}

const defaultIsEmpty = (value: string | number | undefined | null) =>
  value ? value.toString().length === 0 : true

export const inputFieldVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "rounded-sm",
      md: "rounded-md",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const InputField = forwardRef<HTMLDivElement, InputFieldProps<string>>(
  (
    {
      children,
      disabled,
      label,
      className,
      required,
      error,
      size = "md",
      icon,
      value,
      hideLabel = false,
      clearable = false,
      isEmpty = defaultIsEmpty,
      maxLength,
      hideMaxLength = false,
      tag,
      ...props
    }: InputFieldProps<string>,
    ref
  ) => {
    const id = useId()

    return (
      <div
        className={cn("flex flex-col", disabled && "opacity-30", className)}
        ref={ref}
      >
        <div className="flex max-w-full items-center gap-2">
          {((!hideLabel && label) || maxLength) && (
            <div className={cn("flex flex-row")} data-testid="input-field-top">
              {!hideLabel && (
                <Label
                  label={label}
                  required={required}
                  htmlFor={id}
                  className="min-w-0 flex-1 border-2 border-solid border-[#f00]"
                />
              )}
              {maxLength && !hideMaxLength && (
                <div className="text-right text-f1-foreground-secondary">
                  {value.length}/{maxLength}
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={cn(
            "flex w-full gap-2 transition-all",
            "border-[1px] border-solid border-f1-border-secondary bg-f1-background hover:border-f1-border-hover",
            "group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
            "active-within:border-f1-border- active-within:ring-1 active-within:ring-f1-border-hover",
            // error && "ring-f1-border-critical-bold",
            // "ring-offset-background focus-visible:ring-ring w-full rounded-xl",
            inputFieldVariants({ size })
          )}
          data-testid="input-field-wrapper"
        >
          {icon && (
            <Icon
              icon={icon}
              className="h-5 w-5 shrink-0 text-f1-foreground-secondary"
            />
          )}
          <div className="flex w-full gap-2">{children}</div>
          {clearable && !isEmpty(value) && (
            <Icon
              className="hover:text-f1-foreground-primary h-5 w-5 shrink-0 cursor-pointer text-f1-foreground-secondary"
              onClick={props.onClear}
              icon={CrossedCircle}
            />
          )}
          {tag && (
            <div className="rounded-full bg-f1-background-secondary px-2 py-1 text-f1-foreground-secondary">
              {tag}
            </div>
          )}
        </div>
        <InputMessages error={error} />
      </div>
    )
  }
)

InputField.displayName = "InputField"

export { InputField }
