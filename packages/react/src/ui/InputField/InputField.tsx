import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Icon, IconType } from "@/components/F0Icon"
import { Spinner } from "@/experimental/Information/Spinner"
import { CrossedCircle } from "@/icons/app"
import { cn } from "@/lib/utils.ts"
import { cva } from "cva"
import { AnimatePresence, motion } from "motion/react"
import {
  AriaAttributes,
  cloneElement,
  forwardRef,
  useEffect,
  useId,
  useState,
} from "react"
import { AppendTag } from "./AppendTag"
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
      sm: "rounded-[10px]",
      md: "rounded-[12px]",
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

const inputFieldStatusVariants = cva({
  base: "focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
  variants: {
    status: {
      default:
        "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning:
        "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error:
        "border-f1-border-critical-bold focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      status: "default",
      class: "hover:border-f1-border-selected-bold",
    },
    {
      disabled: false,
      status: "warning",
      class: "hover:border-f1-border-warning-bold",
    },
    {
      disabled: false,
      status: "info",
      class: "hover:border-f1-border-info-bold",
    },
    {
      disabled: false,
      status: "error",
      class: "hover:border-f1-border-critical-bold",
    },
  ],
})

export const inputFieldStatus = ["default", "warning", "info", "error"] as const
export type InputFieldStatusType = (typeof inputFieldStatus)[number]

export type InputFieldStatus =
  | {
      type: Exclude<InputFieldStatusType, "error">
      message: string
    }
  | {
      type: "error"
      message?: string
    }

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
  /* @deprecated Use state (with type error)instead */
  error?: string | boolean
  status?: InputFieldStatus
  /* shortcut for status with type default */
  hint?: string
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
  appendTag?: string
  lengthProvider?: (value: T | undefined) => number
  loading?: boolean
  avatar?: string
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
      status,
      hint,
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
      appendTag,
      avatar,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      ...props
    }: InputFieldProps<string>,
    ref
  ) => {
    const id = useId()

    const noEdit = disabled || readonly

    const [localValue, setLocalValue] = useState(value)

    // For legacy reasons, error is a shortcut for status with type error
    if (hint) {
      status = {
        type: "default",
        message: hint,
      }
    }

    // Error overrides hint
    if (error) {
      status = {
        type: "error",
        message: typeof error === "string" ? error : undefined,
      }
    }

    if (!label) {
      console.error(
        "InputField: label is required for accessibility reasons. If you don't want to show a label, set hideLabel to true."
      )
    }

    useEffect(
      () => {
        if (localValue === value) {
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
      let v =
        (typeof value === "string" ? value : value.target.value) ?? emptyValue

      if (maxLength && lengthProvider(v) > maxLength) {
        if (typeof v === "string") {
          v = v.substring(0, maxLength)
        } else {
          return
        }
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
          "pointer-events-none",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        ref={ref}
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
            "relative h-fit transition-all",
            "border-[1px] border-solid border-f1-border-secondary bg-f1-background",
            !noEdit && !disabled && "hover:border-f1-border-hover",
            "group focus-within:border-f1-border-hover focus-within:ring-1 focus-within:ring-f1-border-hover",
            "active-within:border-f1-border active-within:ring-1 active-within:ring-f1-border-hover",
            "focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1",
            inputFieldStatusVariants({
              status: status?.type ?? "default",
              disabled: disabled || readonly,
            }),
            readonly && "border-f1-border-secondary bg-f1-background-secondary",
            disabled && "cursor-not-allowed",
            inputFieldVariants({ size, canGrow })
          )}
          data-testid="input-field-wrapper"
        >
          <div
            className="pointer-events-auto relative flex h-full w-full min-w-0 flex-1 pl-2"
            onClick={handleClickContent}
          >
            {(icon || avatar) && (
              <div
                className={cn(
                  "pointer-events-none my-auto flex h-5 shrink-0 gap-0.5"
                )}
              >
                {icon && (
                  <F0Icon
                    onClick={handleClickContent}
                    icon={icon}
                    color="default"
                  />
                )}
                {avatar && (
                  <F0AvatarPerson
                    firstName={avatar}
                    lastName={""}
                    size="xsmall"
                  />
                )}
              </div>
            )}
            {!!localValue && (
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
                    "h-full w-full min-w-0 pl-1 pr-3",
                    "[&::-webkit-search-cancel-button]:hidden",
                    disabled && "cursor-not-allowed",
                    (children as React.ReactElement).props.className,
                    inputElementVariants({ size })
                  ),
                })}
              </div>
            )}
            {!noEdit && !localValue && (
              <div
                className={cn(
                  "pointer-events-none flex flex-1 items-center justify-start pl-1 pr-3 text-f1-foreground-secondary transition-opacity",
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
            {(clearable || append || appendTag || loading) && (
              <div
                className={cn(
                  "flex h-fit items-center gap-1.5 self-center pr-1",
                  size === "md" && "pr-1.5 pt-1.5"
                )}
              >
                {clearable && !noEdit && (
                  <AnimatePresence initial={!isEmpty(localValue)}>
                    {!isEmpty(localValue) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mr-px mt-px flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center"
                        onClick={handleClear}
                      >
                        <F0Icon icon={CrossedCircle} color="bold" size="md" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                {(append || appendTag) && (
                  <div
                    className={cn(
                      "mt-px flex h-fit items-center",
                      size === "sm" && "h-[24px] pr-0.5",
                      size === "md" && "pr-0.1 h-[25px]"
                    )}
                  >
                    {append}
                    {appendTag && <AppendTag text={appendTag} />}
                  </div>
                )}

                {loading && (
                  <div
                    className={cn(
                      "pointer-events-none flex h-6 w-6 items-center justify-center",
                      inputElementVariants({ size })
                    )}
                  >
                    <Spinner size="small" className="mt-[1px]" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <InputMessages status={status} />
      </div>
    )
  }
)

InputField.displayName = "InputField"

export { InputField }
