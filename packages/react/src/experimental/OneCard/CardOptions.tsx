import { Button } from "@/components/Actions/Button"
import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface CardOptionsProps {
  /**
   * Actions to display in the dropdown menu
   */
  otherActions?: DropdownItem[]

  /**
   * Whether the card is selectable
   */
  selectable?: boolean

  /**
   * Whether the card is selected
   */
  selected?: boolean

  /**
   * The callback to handle the selection of the card
   */
  onSelect?: (selected: boolean) => void

  /**
   * Title for accessibility
   */
  title?: string

  /**
   * Whether the options are displayed with an overlay (displayed with the image)
   */
  overlay?: boolean
}

export function CardOptions({
  otherActions,
  selectable = false,
  selected = false,
  onSelect,
  title,
  overlay = false,
}: CardOptionsProps) {
  const translations = useI18n()
  const hasOtherActions = otherActions && otherActions.length > 0
  const [isOpen, setIsOpen] = useState(false)

  if (!hasOtherActions && !selectable) {
    return null
  }

  return (
    <div
      className={cn(
        "flex flex-row gap-1 opacity-100 transition-opacity focus-within:opacity-100 group-hover:opacity-100 sm:opacity-0 [&>div]:z-[1]",
        isOpen && "opacity-100",
        selected && "opacity-100",
        overlay &&
          "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"
      )}
    >
      {hasOtherActions && (
        <div className="flex items-center justify-center">
          <Dropdown items={otherActions} open={isOpen} onOpenChange={setIsOpen}>
            <Button
              label={translations.actions.other}
              icon={Ellipsis}
              variant="ghost"
              size="sm"
              round
              hideLabel
              pressed={isOpen}
            />
          </Dropdown>
        </div>
      )}
      {selectable && (
        <div className="flex items-center justify-center">
          <Checkbox
            title={title}
            checked={selected}
            onCheckedChange={onSelect}
            hideLabel
          />
        </div>
      )}
    </div>
  )
}
