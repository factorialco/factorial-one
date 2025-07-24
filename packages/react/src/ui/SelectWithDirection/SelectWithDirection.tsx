import { Button } from "@/components/Actions/Button"
import { Select } from "@/experimental/Forms/Fields/Select"
import { ArrowDown, ArrowUp, Placeholder } from "@/icons/app"
import { cn } from "@/lib/utils"
import { InputFieldProps } from "../InputField"

type SelectWithDirectionValue = {
  selected: string
  direction: "asc" | "desc"
}

type SelectWithDirectionProps = {
  onChange?: (value: SelectWithDirectionValue | undefined) => void
  hideLabel?: boolean
  hideDirection?: boolean
  className?: string
  options: { label: string; value: string }[]
  value: SelectWithDirectionValue | undefined
} & Pick<InputFieldProps<string>, "label" | "hideLabel" | "labelIcon">

export const EmptyValue = "__no-value__"

export const SelectWithDirection = ({
  onChange,
  className,
  hideLabel,
  hideDirection,
  label,
  options,
  value,
}: SelectWithDirectionProps) => {
  return (
    <div className={cn("flex max-w-full flex-col gap-0", className)}>
      <div className="flex items-end gap-2">
        <div className="min-w-0 shrink grow [&_button]:h-8 [&_button]:rounded">
          <Select<string>
            label={label}
            hideLabel={hideLabel}
            labelIcon={Placeholder}
            options={options}
            value={value?.selected ?? EmptyValue}
            onChange={(value: string) => {
              onChange?.(
                value !== EmptyValue
                  ? {
                      selected: value,
                      direction: "asc",
                    }
                  : undefined
              )
            }}
          />
        </div>
        {value?.selected && !hideDirection && value.selected !== EmptyValue && (
          <div className="pb-0">
            <Button
              hideLabel
              label={label}
              variant="outline"
              icon={value?.direction === "asc" ? ArrowUp : ArrowDown}
              onClick={() =>
                onChange?.({
                  selected: value.selected,
                  direction: value.direction === "asc" ? "desc" : "asc",
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}
