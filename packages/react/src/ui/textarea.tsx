import * as React from "react"

import { cn } from "../lib/utils"
import { InputField, InputFieldProps } from "./InputField"

export type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "value" | "onFocus" | "onBlur"
> & {
  value?: string
} & Pick<
    InputFieldProps<string>,
    | "label"
    | "labelIcon"
    | "icon"
    | "error"
    | "hideLabel"
    | "maxLength"
    | "clearable"
    | "placeholder"
    | "onChange"
    | "value"
    | "onClear"
    | "onFocus"
    | "onBlur"
  >

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      labelIcon,
      icon,
      error,
      hideLabel,
      maxLength,
      clearable,
      disabled,
      value,
      cols,
      rows,
      onChange,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <InputField
        label={label}
        labelIcon={labelIcon}
        icon={icon}
        error={error}
        hideLabel={hideLabel}
        maxLength={maxLength}
        clearable={clearable}
        value={value}
        canGrow
        placeholder={placeholder ?? ""}
        onChange={(value) => {
          onChange?.(value ?? "")
        }}
        {...props}
      >
        <textarea
          className={cn("block w-full", className)}
          ref={ref}
          value={value}
          cols={cols}
          rows={rows}
          disabled={disabled}
        />
      </InputField>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
