import { Search } from "@/icons/app"
import { Input } from "@/ui/input"
import { ChangeEventHandler, useRef } from "react"

type F1SearchBoxProps = {
  placeholder?: string
  value?: string
  disabled?: boolean
  threshold?: number
  debounceTime?: number
  clearable?: boolean
  onChange?: (value: string) => void
}

const F1SearchBox = ({
  value,
  threshold = 0,
  onChange,
  debounceTime = 0,
  clearable = false,
  ...props
}: F1SearchBoxProps) => {
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
      type="search"
      icon={Search}
      value={value}
      placeholder={props.placeholder}
      disabled={props.disabled}
      onChange={onChangeLocal}
      role="searchbox"
      clearable={clearable}
    />
  )
}

export { F1SearchBox }
