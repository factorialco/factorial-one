import { Button } from "@/components/Actions/Button"
import {
  OneDropdownButton,
  OneDropdownButtonItem,
} from "@/components/Actions/OneDropdownButton"
import { actionType, primaryActionType } from "../../utils/types"
import { ToolbarDivider } from "../Toolbar"

interface actionsMenuProps {
  secondaryAction: actionType | undefined
  primaryAction: primaryActionType | undefined
  useLittleMode: boolean
  isAcceptChangesOpen: boolean
}

const getLabelID = (label: string | undefined) => {
  if (!label) return ""
  return label.toLowerCase().replace(" ", "-")
}

const ActionsMenu = ({
  secondaryAction,
  primaryAction,
  useLittleMode,
  isAcceptChangesOpen,
}: actionsMenuProps) => {
  if (!secondaryAction && !primaryAction) return null

  const handleOnClick = (labelID: string) => {
    if (labelID === getLabelID(primaryAction?.action.label)) {
      primaryAction?.action.onClick()
    } else if (labelID === getLabelID(secondaryAction?.label)) {
      secondaryAction?.onClick()
    } else {
      const subAction = primaryAction?.subActions?.find(
        (sub) => getLabelID(sub.label) === labelID
      )
      subAction?.onClick()
    }
  }

  const listOfActions: OneDropdownButtonItem<string | undefined>[] = [
    ...(primaryAction
      ? [
          {
            label: primaryAction?.action.label,
            value: getLabelID(primaryAction?.action.label),
            icon: primaryAction?.action.icon,
          },
        ]
      : []),
    ...(primaryAction?.subActions?.map((subAction) => ({
      label: subAction.label,
      value: getLabelID(subAction.label),
      icon: subAction.icon,
    })) || []),
    ...(secondaryAction && useLittleMode
      ? [
          {
            label: secondaryAction.label,
            value: getLabelID(secondaryAction.label),
            icon: secondaryAction.icon,
          },
        ]
      : []),
  ]

  return (
    <div className="flex flex-shrink-0 items-center gap-2">
      {secondaryAction && (!useLittleMode || !primaryAction) && (
        <Button
          onClick={(e) => {
            e.preventDefault()
            secondaryAction.onClick()
          }}
          variant={secondaryAction.variant ?? "outline"}
          size="md"
          label={secondaryAction.label}
          disabled={isAcceptChangesOpen || secondaryAction.disabled}
          type="button"
        />
      )}
      {secondaryAction && primaryAction && !useLittleMode && <ToolbarDivider />}
      {primaryAction &&
        (primaryAction.subActions ? (
          <OneDropdownButton
            items={listOfActions as OneDropdownButtonItem<string>[]}
            onClick={(value) => handleOnClick(value)}
            variant={primaryAction?.action.variant ?? "default"}
            size="md"
          />
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault()
              primaryAction?.action.onClick()
            }}
            variant={primaryAction?.action.variant ?? "default"}
            size="md"
            label={primaryAction?.action.label || ""}
            disabled={isAcceptChangesOpen || primaryAction?.action.disabled}
            icon={primaryAction?.action.icon ?? undefined}
            type="button"
          />
        ))}
    </div>
  )
}

export { ActionsMenu }
