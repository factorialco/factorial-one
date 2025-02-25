import { Search } from "@/icons/app"
import { Input } from "@/core/internal/input.tsx"
import { ChangeEventHandler, forwardRef, useRef } from "react"

type F1SearchBoxProps = {
  placeholder?: string
  value?: string
  disabled?: boolean
  threshold?: number
  debounceTime?: number
  clearable?: boolean
  autoFocus?: boolean
  onChange?: (value: string) => void
}

const F1SearchBox = forwardRef<HTMLInputElement, F1SearchBoxProps>(
  (
    {
      value,
      threshold = 0,
      onChange,
      debounceTime = 0,
      clearable = false,
      ...props
    },
    ref
  ) => {
    const valueToEmitRef = useRef<string | undefined>(undefined)

    const onChangeLocal: ChangeEventHandler<HTMLInputElement> = (e) => {
      if (
        onChange &&
        // It should emit the change when the user clears the field
        (e.target.value.length >= threshold || e.target.value.length === 0)
      ) {
        // Debounces the onChange callback
        if (valueToEmitRef.current === undefined) {
          setTimeout(() => {
            if (valueToEmitRef.current !== undefined) {
              onChange(valueToEmitRef.current)
            }
            valueToEmitRef.current = undefined
          }, debounceTime)
        }
        valueToEmitRef.current = e.target.value
      }
    }

    return (
      <Input
        ref={ref}
        type="search"
        icon={Search}
        value={value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={onChangeLocal}
        role="searchbox"
        autoFocus={props.autoFocus}
        clearable={clearable}
      />
    )
  }
)

// Add display name for better debugging
F1SearchBox.displayName = "F1SearchBox"

export { F1SearchBox }
