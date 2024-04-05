import { useId } from "react"

import { Checkbox } from "@/foundations/checkbox"

interface Props {
  label: string
  checked?: boolean
  onChange?: (value: boolean) => void
}

export const CheckboxField: React.FC<Props> = ({
  label,
  checked,
  onChange,
}) => {
  const id = useId()

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        id={id}
        onCheckedChange={(value) => onChange?.(value === true)}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
}
