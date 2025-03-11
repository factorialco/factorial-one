import { Button, ButtonProps } from "@/components/Actions/Button"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { useI18n } from "@/lib/i18n-provider"
import { AnimatePresence, motion } from "framer-motion"

type Action = Pick<ButtonProps, "label" | "onClick" | "icon" | "disabled">

interface ActionBarProps {
  isOpen: boolean
  primaryAction: Action
  secondaryActions?: Action[]
  otherActions?: DropdownItem[]
  selectedNumber?: number
  onUnselect?: () => void
}

export const ActionBar = ({
  isOpen,
  primaryAction,
  secondaryActions,
  otherActions,
  selectedNumber,
  onUnselect,
}: ActionBarProps) => {
  const i18n = useI18n()

  const selectedText =
    selectedNumber === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          transition={{ ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 }}
          className="fixed bottom-5 left-0 right-0 z-50 mx-auto flex h-12 w-max gap-5 rounded-xl bg-f1-background-inverse p-2 text-f1-foreground-inverse shadow-lg"
        >
          {selectedNumber && (
            <div className="dark flex items-center gap-2 pl-2">
              <span className="text-sm font-medium tabular-nums">
                {selectedNumber} {selectedText}
              </span>
              <Button
                variant="outline"
                size="sm"
                label={i18n.actions.unselect}
                onClick={onUnselect}
              />
            </div>
          )}
          <div className="dark flex items-center gap-2">
            {otherActions && (
              <div>
                <Dropdown items={otherActions} />
              </div>
            )}
            {secondaryActions?.map((action) => (
              <Button variant="outline" key={action.label} {...action} />
            ))}
            <Button {...primaryAction} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
