import {
  SelectContent,
  SelectItem,
  Select as SelectPrimitive,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { forwardRef } from "react"

type SelectProps<T> = {
  placeholder: string
  onChange: (value: T) => void
  value?: T
  options: { value: T; label: string }[]
}

export const Select = forwardRef<HTMLButtonElement, SelectProps<string>>(
  function Select({ placeholder, options, onChange, ...props }, ref) {
    return (
      <SelectPrimitive onValueChange={onChange} {...props}>
        <SelectTrigger ref={ref}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive>
    )
  }
)
