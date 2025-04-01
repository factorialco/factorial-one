import { Button } from "@/components/Actions/Button"
import {
  OneDropdownButton,
  OneDropdownButtonItem,
} from "@/components/Actions/OneDropdownButton"
import { actionType, primaryActionType } from "../../utils/types"
import { ToolbarDivider } from "../Toolbar"

interface ActionsMenuProps {
  secondaryAction?: actionType
  primaryAction?: primaryActionType
  useLittleMode: boolean
  disableButtons: boolean
  isFullscreen: boolean
}

const getLabelID = (label?: string) =>
  label ? label.toLowerCase().replace(" ", "-") : ""

const ActionsMenu = ({
  secondaryAction,
  primaryAction,
  useLittleMode,
  disableButtons,
  isFullscreen,
}: ActionsMenuProps) => {
  if (!secondaryAction && !primaryAction) return null

  const handleOnClick = (labelID: string) => {
    if (labelID === getLabelID(primaryAction?.action.label)) {
      primaryAction?.action.onClick()
    } else if (labelID === getLabelID(secondaryAction?.label)) {
      secondaryAction?.onClick()
    } else {
      primaryAction?.subActions
        ?.find((sub) => getLabelID(sub.label) === labelID)
        ?.onClick()
    }
  }

  const listOfActions: OneDropdownButtonItem<string>[] = [
    ...(primaryAction
      ? [
          {
            label: primaryAction.action.label,
            value: getLabelID(primaryAction.action.label),
            icon: primaryAction.action.icon,
          },
        ]
      : []),
    ...(primaryAction?.subActions?.map((sub) => ({
      label: sub.label,
      value: getLabelID(sub.label),
      icon: sub.icon,
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

  const renderSecondaryButton = () => {
    if (secondaryAction && (!useLittleMode || !primaryAction || isFullscreen)) {
      return (
        <Button
          onClick={(e) => {
            e.preventDefault()
            secondaryAction.onClick()
          }}
          variant={secondaryAction.variant ?? "outline"}
          size="md"
          label={secondaryAction.label}
          disabled={disableButtons || secondaryAction.disabled}
          type="button"
        />
      )
    }
    return null
  }

  const renderPrimaryAction = () => {
    if (!primaryAction) return null

    if (!isFullscreen) {
      return primaryAction.subActions ? (
        <OneDropdownButton
          items={listOfActions}
          onClick={handleOnClick}
          variant={primaryAction.action.variant ?? "default"}
          disabled={disableButtons}
          size="md"
        />
      ) : (
        <Button
          onClick={(e) => {
            e.preventDefault()
            primaryAction.action.onClick()
          }}
          variant={primaryAction.action.variant ?? "default"}
          size="md"
          label={primaryAction.action.label || ""}
          disabled={disableButtons || primaryAction.action.disabled}
          icon={primaryAction.action.icon}
          type="button"
        />
      )
    }

    return (
      <>
        {primaryAction.subActions?.map((sub) => (
          <Button
            key={getLabelID(sub.label)}
            onClick={(e) => {
              e.preventDefault()
              sub.onClick()
            }}
            variant={primaryAction.action.variant ?? "default"}
            size="md"
            label={sub.label}
            disabled={disableButtons || sub.disabled}
            icon={sub.icon}
            type="button"
          />
        ))}
        <ToolbarDivider />
        <Button
          onClick={(e) => {
            e.preventDefault()
            primaryAction.action.onClick()
          }}
          variant={primaryAction.action.variant ?? "default"}
          size="md"
          label={primaryAction.action.label || ""}
          disabled={disableButtons || primaryAction.action.disabled}
          icon={primaryAction.action.icon}
          type="button"
        />
      </>
    )
  }

  return (
    <div className="flex flex-shrink-0 items-center gap-2">
      {renderSecondaryButton()}
      {secondaryAction && primaryAction && (!useLittleMode || isFullscreen) && (
        <ToolbarDivider />
      )}
      {renderPrimaryAction()}
    </div>
  )
}

export { ActionsMenu }
