import {
  ButtonInternal,
  ButtonInternalProps,
} from "@/components/Actions/Button/internal"
import { Icon, IconType } from "@/components/Utilities/Icon"
import { DropdownInternal } from "@/experimental/Navigation/Dropdown/internal"
import { ChevronDown } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { useMemo } from "react"
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
  const mainAction = items[0]

  const handleClick = () => {
    onClick(mainAction.value, mainAction)
  }

  const dropdownItems = useMemo(
    () =>
      items
        .filter((item) => item.value !== mainAction.value)
        .map((item) => ({
          ...item,
          onClick: () => {
            onClick(item.value, item)
          },
        })),
    [items, onClick]
  )

  return (
    <>
      <ButtonInternal
        onClick={handleClick}
        icon={mainAction.icon}
        label={mainAction.label}
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
              <Icon icon={ChevronDown} />
            </a>
          </DropdownInternal>
        }
      ></ButtonInternal>
    </>
  )
}

export { OneDropdownButton }
