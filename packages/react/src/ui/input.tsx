import * as React from "react"
import { cn } from "../lib/utils"
import { InputField, InputFieldProps } from "./InputField"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Pick<
    InputFieldProps<string | number | readonly string[] | undefined>,
    | "label"
    | "labelIcon"
    | "hideLabel"
    | "error"
    | "disabled"
    | "required"
    | "size"
    | "icon"
    | "clearable"
    | "isEmpty"
    | "emptyValue"
    | "maxLength"
    | "hideMaxLength"
    | "append"
    | "lengthProvider"
  >

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      labelIcon,
      icon,
      error,
      disabled,
      required,
      value,
      placeholder,
      clearable,
      size,
      isEmpty,
      emptyValue,
      maxLength,
      hideMaxLength,
      append,
      lengthProvider,
      ...props
    },
    ref
  ) => {
    return (
      <InputField
        label={label}
        icon={icon}
        labelIcon={labelIcon}
        error={error}
        disabled={disabled}
        required={required}
        value={value}
        clearable={clearable}
        className={className}
        placeholder={placeholder}
        size={size}
        isEmpty={isEmpty}
        emptyValue={emptyValue}
        maxLength={maxLength}
        hideMaxLength={hideMaxLength}
        append={append}
        lengthProvider={lengthProvider}
        hidePlaceholder={type === "file"}
      >
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "[&::-webkit-search-cancel-button]:hidden",
            "w-full shrink disabled:cursor-not-allowed"
          )}
        />
      </InputField>
    )
  }
)
Input.displayName = "Input"

export { Input }
