import { useMemo, useState } from "react"
import { DropdownInternal } from "../../../experimental/Navigation/Dropdown/internal"
import { ChevronDown } from "../../../icons/app"
import { IconType } from "../../Utilities/Icon"
import { ButtonInternal, ButtonInternalProps } from "../Button/internal"
import { OneDropdownButtonSize, OneDropdownButtonVariant } from "./types.ts"

export type OneDropdownButtonItem<T = string> = {
  value: T
  label: string
  icon?: IconType
}

export type OneDropdownButtonProps<T = string> = Pick<
  ButtonInternalProps,
  "disabled" | "loading"
> & {
  size?: OneDropdownButtonSize
  items: OneDropdownButtonItem<T>[]
  variant?: OneDropdownButtonVariant
  value?: T
  onClick: (value: T, item: OneDropdownButtonItem<T>) => void
}

const OneDropdownButton = ({
  items,
  onClick,
  value,
  ...props
}: OneDropdownButtonProps) => {
  const [localValue] = useState(value || items[0].value)

  const selectedItem = useMemo(
    () => items.find((item) => item.value === localValue),
    [localValue, items]
  )

  const handleClick = () => {
    onClick(localValue, items.find((value) => value.value === localValue)!)
  }

  const dropdownItems = useMemo(
    () =>
      items
        .filter((item) => item.value !== localValue)
        .map((item) => ({
          ...item,
          onClick: () => {
            onClick(item.value, item)
          },
        })),
    [items, localValue, onClick]
  )

  return (
    selectedItem && (
      <div className="flex items-center">
        <ButtonInternal
          onClick={handleClick}
          icon={selectedItem.icon}
          label={selectedItem.label}
          {...props}
          appendButton={
            <DropdownInternal items={dropdownItems} align="end">
              <ButtonInternal
                variant={props.variant}
                size={props.size}
                label="Add"
                icon={ChevronDown}
                hideLabel
              />
            </DropdownInternal>
          }
        />
      </div>
    )
  )
}

export { OneDropdownButton }
