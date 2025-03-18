import {
  ButtonInternal,
  ButtonInternalProps,
} from "@/components/Actions/Button/internal"
import { IconType } from "@/components/Utilities/Icon"
import { DropdownInternal } from "@/experimental/Navigation/Dropdown/internal"
import { ChevronDown } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils.ts"
import { useMemo, useState } from "react"
import {
  internalButtonVariants,
  internalButtonVariantsStyles,
} from "./theme.ts"
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
        <ButtonInternal
          onClick={handleClick}
          icon={selectedItem.icon}
          label={selectedItem.label}
          {...props}
          appendButton={
            <DropdownInternal items={dropdownItems} align="end">
              <a
                className={cn(
                  "h-full",
                  internalButtonVariants({
                    size: props.size,
                  }),
                  "flex",
                  "hover:bg-[#0002]",
                  "rounded-e",
                  "align-middle",
                  "justify-center",
                  focusRing()
                )}
                style={internalButtonVariantsStyles(props.variant)}
                aria-label="Open dropdown"
                tabIndex={props.disabled ? -1 : 0}
                role="combobox"
              >
                <ChevronDown></ChevronDown>
              </a>
            </DropdownInternal>
          }
        ></ButtonInternal>
      </>
    )
  )
}

export { OneDropdownButton }
