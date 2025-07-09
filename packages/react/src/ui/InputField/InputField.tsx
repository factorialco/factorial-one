import { Icon, IconType } from "@/components/Utilities/Icon"
import { Spinner } from "@/experimental/exports"
import { CrossedCircle } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { cva } from "cva"
import { AnimatePresence } from "motion/react"
import { cloneElement, forwardRef, useEffect, useId, useState } from "react"
import { InputMessages } from "./components/InputMessages"
import { Label } from "./components/Label"
export const inputFieldSizes = ["sm", "md"] as const
export type InputFieldSize = (typeof inputFieldSizes)[number]

const defaultEmptyValue = ""

const defaultIsEmpty = (value: string | number | undefined | null) => {
  return value === defaultEmptyValue || value
    ? value.toString().length === 0
    : true
}
const defaultLengthProvider = (value: string | number | undefined | null) =>
  value ? value.toString().length : 0

const inputFieldVariants = cva({
  base: "",
  variants: {
    canGrow: {
      true: "flex-1",
      false: "flex-none",
    },
    size: {
      sm: "rounded-sm p-1 pl-2 pt-[5px]",
      md: "rounded-md p-2 pl-3",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      canGrow: true,
      class: "min-h-[32px]",
    },
    {
      size: "md",
      canGrow: true,
      class: "min-h-[40px]",
    },
    {
      size: "sm",
      canGrow: false,
      class: "h-[32px]",
    },
    {
      size: "md",
      canGrow: false,
      class: "h-[40px]",
    },
  ],
  defaultVariants: {
    size: "md",
    canGrow: false,
  },
})

const inputFieldWrapperVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-2",
    },
  },
})

export type InputFieldProps<T> = // label or placeholder is required
  (
    | {
        label: string
        placeholder?: string
      }
    | {
        label?: string
        placeholder: string
      }
  ) & {
    labelIcon?: IconType
    hideLabel?: boolean
    hidePlaceholder?: boolean
    onClickPlaceholder?: () => void
    onClickChildren?: () => void
    onClickContent?: () => void
    value: T | undefined
    onChange?: (value: T) => void
    size?: InputFieldSize
    error?: string | string[] | boolean
    disabled?: boolean
    className?: string
    required?: boolean
    readonly?: boolean
    clearable?: boolean
    onClear?: () => void
    onFocus?: () => void
    onBlur?: () => void
    canGrow?: boolean
    children: React.ReactNode & {
      onFocus?: () => void
      onBlur?: () => void
      onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
      onChange?: (
        value: T | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => void
      value?: T
    }
    icon?: IconType
    isEmpty?: (value: T | undefined) => boolean
    emptyValue?: T
    maxLength?: number
    hideMaxLength?: boolean
    append?: React.ReactNode
    lengthProvider?: (value: T | undefined) => number
    loading?: boolean
  }

const InputField = forwardRef<
  HTMLDivElement,
  InputFieldProps<string | undefined>
>(
  (
    {
      children,
      disabled,
      readonly,
      label,
      labelIcon,
      hideLabel = false,
      className,
      required,
      error,
      size = "md",
      icon,
      canGrow = false,
      value,
      loading = false,
      placeholder,
      clearable = false,
      isEmpty = defaultIsEmpty,
      emptyValue = defaultEmptyValue,
      lengthProvider = defaultLengthProvider,
      maxLength,
      hideMaxLength = false,
      append,
      hidePlaceholder = false,
      onClickPlaceholder,
      onClickChildren,
      onClickContent,
      ...props
    }: InputFieldProps<string>,
    ref
  ) => {
    const id = useId()

    const noEdit = disabled || readonly

    const [localValue, setLocalValue] = useState(value)

    useEffect(() => {
      setLocalValue(value)
    }, [value])

    const handleChange = (
      value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const v = typeof value === "string" ? value : value.target.value

      if (maxLength && lengthProvider(v) > maxLength) {
        return
      }

      setLocalValue(v)
      props.onChange?.(v)
    }

    const handleClear = () => {
      handleChange(emptyValue)
    }

    const showClear = clearable && !noEdit && !isEmpty(localValue)

    return (
      <div
        className={cn(
          "flex flex-col gap-2",
          disabled && "opacity-30",
          className
        )}
        ref={ref}
      >
        <div
          className={cn(
            "flex max-w-full items-center",
            inputFieldWrapperVariants({ size })
          )}
        >
          {((!hideLabel && label) || maxLength) && (
            <div
              className={cn("flex min-w-0 flex-1 flex-row gap-4")}
              data-testid="input-field-top"
            >
              {!hideLabel && label && (
                <Label
                  label={label}
                  required={required}
                  htmlFor={id}
                  icon={labelIcon}
                  className="min-w-0 flex-1"
                />
              )}
              {maxLength && !hideMaxLength && !noEdit && (
                <div className="text-right text-f1-foreground-secondary">
                  {lengthProvider(localValue)}/{maxLength}
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
            "focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
            error
              ? "focus-within:ring-f1-critical border-f1-border-critical-bold bg-f1-background-critical"
              : "focus-within:ring-f1-ring",
            readonly && "border-f1-border-secondary bg-f1-background-secondary",
            inputFieldVariants({ size, canGrow })
          )}
          data-testid="input-field-wrapper"
        >
          {icon && (
            <Icon
              onClick={onClickContent}
              icon={icon}
              className="h-5 w-5 shrink-0 pt-[2px] text-f1-foreground-secondary"
            />
          )}
          <div className="relative flex w-full gap-2" onClick={onClickContent}>
            <div onClick={onClickChildren} className="w-full">
              {cloneElement(children as React.ReactElement, {
                onChange: handleChange,
                onBlur: props.onBlur,
                onFocus: props.onFocus,
                disabled: noEdit,
                readonly,
                value: localValue,
                "aria-label": label || placeholder,
                "aria-busy": loading,
                "aria-live": "spolite",
              })}
            </div>
            {loading && (
              <div className="i pointer-events-none flex justify-start pt-[2px]">
                <Spinner size="small" />
              </div>
            )}
            <div
              className={cn(
                "pointer-events-none absolute bottom-0 left-0 top-0 z-10 flex flex-1 justify-start text-f1-foreground-secondary transition-opacity",
                placeholder && !hidePlaceholder && isEmpty(localValue)
                  ? "opacity-1"
                  : "opacity-0"
              )}
              onClick={onClickPlaceholder}
              aria-hidden="true"
            >
              {placeholder}
            </div>
          </div>
          {clearable && !noEdit && (
            <div className="h-5 w-5 shrink-0">
              <AnimatePresence initial={!isEmpty(localValue)}>
                {!isEmpty(localValue) && (
                  <Icon
                    className="hover:text-f1-foreground-primary h-5 w-5 cursor-pointer text-f1-foreground-secondary"
                    onClick={handleClear}
                    icon={CrossedCircle}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
          {append && <div className="flex gap-2">{append}</div>}
        </div>
        <InputMessages error={error} />
      </div>
    )
  }
)

InputField.displayName = "InputField"

export { InputField }
