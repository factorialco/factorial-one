import * as React from "react"
import { cn } from "../lib/utils"
import { InputField, InputFieldProps } from "./InputField"

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange"
> &
  Pick<
    InputFieldProps<string>,
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
    | "loading"
    | "onChange"
    | "role"
    | "onClickContent"
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
      loading,
      isEmpty,
      emptyValue,
      maxLength,
      hideMaxLength,
      append,
      onChange,
      role,
      lengthProvider,
      onClickContent,
      hideLabel,
      name,
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
        value={value as string}
        loading={loading}
        clearable={clearable}
        className={className}
        placeholder={placeholder || ""}
        size={size}
        role={role}
        isEmpty={isEmpty}
        emptyValue={emptyValue as string}
        maxLength={maxLength}
        hideMaxLength={hideMaxLength}
        append={append}
        lengthProvider={lengthProvider}
        hidePlaceholder={type === "file"}
        hideLabel={hideLabel}
        onChange={onChange}
        onClickContent={onClickContent}
        name={name}
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
