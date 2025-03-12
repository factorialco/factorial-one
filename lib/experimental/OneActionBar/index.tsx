import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import {
  Dropdown,
  DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { useI18n } from "@/lib/i18n-provider"
import NumberFlow from "@number-flow/react"
import { AnimatePresence, motion } from "framer-motion"

type ActionType = {
  label: string
  icon?: IconType
  onClick?: () => void
  disabled?: boolean
  critical?: boolean
}

interface ActionBarProps {
  isOpen: boolean
  primaryAction: ActionType
  secondaryActions?: ActionType[]
  selectedNumber?: number
  onUnselect?: () => void
}

export const ActionBar = ({
  isOpen,
  primaryAction,
  secondaryActions = [],
  selectedNumber,
  onUnselect,
}: ActionBarProps) => {
  const i18n = useI18n()

  const selectedText =
    selectedNumber === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  const visibleSecondaryActions = secondaryActions.slice(0, 2)
  const dropdownActions = secondaryActions.slice(2).map((action) => ({
    ...action,
    critical: action.critical || false,
  })) as DropdownItem[]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          transition={{ ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 }}
          className="fixed bottom-2 left-2 right-2 z-50 flex h-fit w-[calc(100%-16px)] flex-col gap-2 rounded-xl bg-f1-background-inverse p-2 text-f1-foreground-inverse shadow-lg sm:bottom-5 sm:mx-auto sm:h-12 sm:w-max sm:flex-row sm:gap-8"
        >
          {selectedNumber && (
            <div className="dark flex h-8 w-full items-center justify-between gap-2 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0">
              <span className="text-sm font-medium tabular-nums">
                <NumberFlow
                  value={selectedNumber}
                  spinTiming={{
                    duration: 200,
                    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                />
                <span> {selectedText}</span>
              </span>
              <Button
                variant="outline"
                size="sm"
                label={i18n.actions.unselect}
                onClick={onUnselect}
              />
            </div>
          )}
          <div className="dark">
            <div className="flex flex-col items-center gap-2 sm:hidden [&_button]:w-full">
              <MobileDropdown items={secondaryActions} />
              <Button
                label={primaryAction.label}
                icon={primaryAction.icon}
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled}
                size="lg"
              />
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              {dropdownActions.length > 0 && (
                <Dropdown items={dropdownActions} />
              )}
              {visibleSecondaryActions
                .slice()
                .reverse()
                .map((action) => (
                  <Button
                    variant={action.critical ? "critical" : "outline"}
                    key={action.label}
                    label={action.label}
                    icon={action.icon}
                    onClick={action.onClick}
                    disabled={action.disabled}
                  />
                ))}
              <Button
                label={primaryAction.label}
                icon={primaryAction.icon}
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
