import { useI18n } from "@/lib/providers/i18n"
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
  critical?: boolean
}

export type OneDropdownButtonProps<T = string> = Partial<
  Pick<ButtonInternalProps, "disabled" | "loading">
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
  const t = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const localValue = useMemo(() => value || items[0].value, [value, items])

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
            setIsOpen(false)
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
          data-testid="button-main"
          className="flex-1"
          {...props}
          appendButton={
            <DropdownInternal
              items={dropdownItems}
              align="end"
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <ButtonInternal
                variant={props.variant}
                size={props.size}
                label={t.actions.more}
                icon={ChevronDown}
                hideLabel
                data-testid="button-menu"
                pressed={isOpen}
              />
            </DropdownInternal>
          }
        />
      </div>
    )
  )
}

export { OneDropdownButton }
