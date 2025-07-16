import { Icon, IconType } from "@/components/Utilities/Icon"
import { Spinner } from "@/experimental/Information/Spinner"
import { CrossedCircle } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { cva } from "cva"
import { AnimatePresence } from "motion/react"
import {
  AriaAttributes,
  cloneElement,
  forwardRef,
  useEffect,
  useId,
  useState,
} from "react"
import { InputMessages } from "./components/InputMessages"
import { Label } from "./components/Label"
export const INPUTFIELD_SIZES = ["sm", "md"] as const
export type InputFieldSize = (typeof INPUTFIELD_SIZES)[number]

const defaultEmptyValue = ""

const defaultIsEmpty = (value: string | number | undefined | null) => {
  return value === defaultEmptyValue || value
    ? value.toString().length === 0
    : true
}
const defaultLengthProvider = (value: string | number | undefined | null) =>
  value ? value.toString().length : 0

const inputElementVariants = cva({
  base: "",
  variants: {
    size: {
      sm: "py-1",
      md: "py-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const inputFieldVariants = cva({
  base: "",
  variants: {
    canGrow: {
      true: "flex-1",
      false: "flex-none",
    },
    size: {
      sm: "rounded-[10px] pl-2 pr-1",
      md: "rounded-[12px] pl-3 pr-2",
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

export type InputFieldProps<T> = {
  label: string
  placeholder?: string
  labelIcon?: IconType
  hideLabel?: boolean
  hidePlaceholder?: boolean
  name?: string
  onClickPlaceholder?: () => void
  onClickChildren?: () => void
  onClickContent?: () => void
  value?: T | undefined
  onChange?: (value: T) => void
  size?: InputFieldSize
  error?: string | string[] | boolean
  disabled?: boolean
  className?: string
  required?: boolean
  readonly?: boolean
  clearable?: boolean
  role?: string
  "aria-controls"?: AriaAttributes["aria-controls"]
  "aria-expanded"?: AriaAttributes["aria-expanded"]
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
  minWidth?: string
  maxWidth?: string
}

const InputField = forwardRef<HTMLDivElement, InputFieldProps<string>>(
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
      size = "sm",
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
      name,
      role,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      minWidth,
      maxWidth,
      ...props
    }: InputFieldProps<string>,
    ref
  ) => {
    const id = useId()

    const noEdit = disabled || readonly

    const [localValue, setLocalValue] = useState(value)

    if (!label) {
      console.error(
        "InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."
      )
    }

    useEffect(
      () => {
        if (
          localValue === value ||
          value === emptyValue ||
          value === undefined
        ) {
          return
        }
        setLocalValue(value)
      },
      // localValue is a dep because we want to recociliate both values, in some cases the value will not change for example when the parent limits the chars the user can input
      [value, localValue, emptyValue]
    )

    const handleChange = (
      value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const v =
        (typeof value === "string" ? value : value.target.value) ?? emptyValue

      if (maxLength && lengthProvider(v) > maxLength) {
        return
      }

      setLocalValue(v)
      props.onChange?.(v)
    }

    const handleClear = () => {
      handleChange(emptyValue)
    }

    const handleClickContent = () => {
      if (!disabled) {
        onClickContent?.()
      }
    }

    const handleClickChildren = () => {
      if (!disabled) {
        onClickChildren?.()
      }
    }

    const handleClickPlaceholder = () => {
      if (!disabled) {
        onClickPlaceholder?.()
      }
    }

    return (
      <div
        className={cn(
          "flex flex-col gap-2",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        ref={ref}
        style={{ minWidth, maxWidth }}
      >
        {((!hideLabel && label) || maxLength) && (
          <div
            className={cn(
              "flex max-w-full items-center",
              inputFieldWrapperVariants({ size })
            )}
          >
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
                  disabled={disabled}
                />
              )}
              {maxLength && !hideMaxLength && !noEdit && (
                <div className="text-right text-f1-foreground-secondary">
                  {lengthProvider(localValue)}/{maxLength}
                </div>
              )}
            </div>
          </div>
        )}
        <div
          className={cn(
            "flex w-full gap-2 transition-all",
            "border-[f1-border-secondary bg-f1-background] border-[1px] border-solid",
            "border-[1px] border-solid border-f1-border-secondary bg-f1-background",
            !noEdit && "hover:border-f1-border-hover",
            "group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
            "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover",
            "focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
            error
              ? "focus-within:ring-f1-critical border-f1-border-critical-bold"
              : "focus-within:ring-f1-special-ring",
            readonly && "border-f1-border-secondary bg-f1-background-secondary",
            disabled && "cursor-not-allowed",
            inputFieldVariants({ size, canGrow })
          )}
          data-testid="input-field-wrapper"
        >
          {icon && (
            <div className={cn(inputElementVariants({ size }))}>
              <Icon
                onClick={handleClickContent}
                icon={icon}
                className="text-f1-icon-default h-5 w-5 shrink-0 pt-[2px]"
              />
            </div>
          )}
          <div
            className="relative flex w-full min-w-0 flex-1 gap-2"
            onClick={handleClickContent}
          >
            <div onClick={handleClickChildren} className="w-full">
              {cloneElement(children as React.ReactElement, {
                onChange: handleChange,
                onBlur: props.onBlur,
                onFocus: props.onFocus,
                disabled: noEdit,
                readOnly: readonly,
                role,
                "aria-controls": ariaControls,
                "aria-expanded": ariaExpanded,
                id,
                value: localValue,
                "aria-label": label || placeholder,
                "aria-busy": loading,
                "aria-disabled": noEdit,
                name,
                className: cn(
                  "h-full w-full shrink flex-1 min-w-0",
                  "[&::-webkit-search-cancel-button]:hidden",
                  (children as React.ReactElement).props.className,
                  inputElementVariants({ size })
                ),
              })}
            </div>
            {!noEdit && (
              <div
                className={cn(
                  "pointer-events-none absolute bottom-0 left-0 top-[1px] z-10 flex flex-1 justify-start text-f1-foreground-secondary transition-opacity",
                  inputElementVariants({ size }),
                  placeholder && !hidePlaceholder && isEmpty(localValue)
                    ? "opacity-1"
                    : "opacity-0"
                )}
                onClick={handleClickPlaceholder}
                aria-hidden="true"
              >
                {placeholder}
              </div>
            )}
          </div>
          {loading && (
            <div
              className={cn(
                "pointer-events-none flex justify-start",
                inputElementVariants({ size })
              )}
            >
              <Spinner size="small" className="mt-[3px]" />
            </div>
          )}
          {clearable && !noEdit && (
            <div
              className={cn("h-5 w-5 shrink-0", inputElementVariants({ size }))}
            >
              <AnimatePresence initial={!isEmpty(localValue)}>
                {!isEmpty(localValue) && (
                  <Icon
                    className="mt-[1px] h-5 w-5 cursor-pointer text-f1-icon-secondary hover:text-f1-icon"
                    onClick={handleClear}
                    icon={CrossedCircle}
                  />
                )}
              </AnimatePresence>
            </div>
          )}
          {append && (
            <div className={cn("flex gap-2", inputElementVariants({ size }))}>
              {append}
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
