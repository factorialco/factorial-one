import {
  SelectContent,
  SelectItem,
  Select as SelectPrimitive,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"

type SelectProps<T> = {
  placeholder: string
  onChange: (value: T) => void
  value?: T
  options: { value: T; label: string }[]
}

export function Select<T extends string>({
  placeholder,
  options,
  onChange,
  ...props
}: SelectProps<T>) {
  return (
    <SelectPrimitive onValueChange={onChange} {...props}>
      <SelectTrigger>
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
