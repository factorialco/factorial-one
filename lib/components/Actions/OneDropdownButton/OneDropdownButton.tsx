import { Button, ButtonProps } from "@/components/Actions/Button"
import { internalButtonVariants } from "@/components/Actions/OneDropdownButton/theme.ts"
import {
  OneDropdownButtonSize,
  OneDropdownButtonVariant,
} from "@/components/Actions/OneDropdownButton/types.ts"
import { IconType } from "@/components/Utilities/Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils.ts"
import { useMemo, useState } from "react"

export type OneDropdownButtonItem<T> = {
  value: T
  label: string
  icon?: IconType
}

export type OneDropdownButtonProps<T = string> = Pick<
  ButtonProps,
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
  const [localValue, setLocalValue] = useState(value || items[0].value)

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
            setLocalValue(item.value)
          },
        })),
    [items, localValue]
  )

  return (
    selectedItem && (
      <>
        <Button
          onClick={handleClick}
          icon={selectedItem.icon}
          label={selectedItem.label}
          {...props}
          internalAppend={
            <Dropdown items={dropdownItems} internalAlign="end">
              <a
                className={cn(
                  "h-full",
                  internalButtonVariants({
                    variant: props.variant,
                    size: props.size,
                  }),
                  "flex",
                  "hover:bg-[#0002]",
                  "rounded-e",
                  "align-middle",
                  "justify-center",
                  focusRing()
                )}
                aria-label="Open dropdown"
                tabIndex={0}
                role="combobox"
              >
                <ChevronDown></ChevronDown>
              </a>
            </Dropdown>
          }
        ></Button>
      </>
    )
  )
}

export { OneDropdownButton }
