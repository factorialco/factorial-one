import { Button } from "@/components/Actions/Button"
import {
  OneDropdownButton,
  OneDropdownButtonItem,
} from "@/components/Actions/OneDropdownButton"
import { ToolbarDivider } from "../../Toolbar"
import { actionType, primaryActionType } from "../../utils/types"

interface ActionsMenuProps {
  secondaryAction?: actionType
  primaryAction?: primaryActionType
  useLittleMode: boolean
  disableButtons: boolean
  isFullscreen: boolean
}

const getLabelID = (label?: string) =>
  label ? label.toLowerCase().replace(" ", "-") : ""

const createActionItems = (
  primaryAction?: primaryActionType,
  secondaryAction?: actionType,
  useLittleMode?: boolean
): OneDropdownButtonItem<string>[] => {
  const primaryActionItems = primaryAction
    ? [
        {
          label: primaryAction.action.label,
          value: getLabelID(primaryAction.action.label),
          icon: primaryAction.action.icon,
        },
      ]
    : []

  const subActionItems =
    primaryAction?.subActions?.map((sub) => ({
      label: sub.label,
      value: getLabelID(sub.label),
      icon: sub.icon,
    })) || []

  const secondaryActionItems =
    secondaryAction && useLittleMode
      ? [
          {
            label: secondaryAction.label,
            value: getLabelID(secondaryAction.label),
            icon: secondaryAction.icon,
          },
        ]
      : []

  return [...primaryActionItems, ...subActionItems, ...secondaryActionItems]
}

const handleActionClick = (
  labelID: string,
  primaryAction?: primaryActionType,
  secondaryAction?: actionType
) => {
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

interface SecondaryActionButtonProps {
  secondaryAction?: actionType
  useLittleMode: boolean
  primaryAction?: primaryActionType
  isFullscreen: boolean
  disableButtons: boolean
}

const SecondaryActionButton = ({
  secondaryAction,
  useLittleMode,
  primaryAction,
  isFullscreen,
  disableButtons,
}: SecondaryActionButtonProps) => {
  if (!secondaryAction || (useLittleMode && primaryAction && !isFullscreen)) {
    return null
  }

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

interface PrimaryActionButtonProps {
  primaryAction: primaryActionType["action"]
  disableButtons: boolean
  onClick: (e: React.MouseEvent) => void
}

const PrimaryActionButton = ({
  primaryAction,
  disableButtons,
  onClick,
}: PrimaryActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={primaryAction.variant ?? "default"}
      size="md"
      label={primaryAction.label || ""}
      disabled={disableButtons || primaryAction.disabled}
      icon={primaryAction.icon}
      type="button"
    />
  )
}

interface PrimaryActionContentProps {
  primaryAction: primaryActionType
  isFullscreen: boolean
  listOfActions: OneDropdownButtonItem<string>[]
  handleOnClick: (labelID: string) => void
  disableButtons: boolean
}

const renderPrimaryActionContent = ({
  primaryAction,
  isFullscreen,
  listOfActions,
  handleOnClick,
  disableButtons,
}: PrimaryActionContentProps) => {
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
      <PrimaryActionButton
        primaryAction={primaryAction.action}
        disableButtons={disableButtons}
        onClick={(e) => {
          e.preventDefault()
          primaryAction.action.onClick()
        }}
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
      <PrimaryActionButton
        primaryAction={primaryAction.action}
        disableButtons={disableButtons}
        onClick={(e) => {
          e.preventDefault()
          primaryAction.action.onClick()
        }}
      />
    </>
  )
}

const ActionsMenu = ({
  secondaryAction,
  primaryAction,
  useLittleMode,
  disableButtons,
  isFullscreen,
}: ActionsMenuProps) => {
  if (!secondaryAction && !primaryAction) return null

  const listOfActions = createActionItems(
    primaryAction,
    secondaryAction,
    useLittleMode
  )

  const onActionClick = (labelID: string) =>
    handleActionClick(labelID, primaryAction, secondaryAction)

  const shouldShowDivider =
    secondaryAction && primaryAction && (!useLittleMode || isFullscreen)

  return (
    <div className="flex flex-shrink-0 items-center gap-2">
      <SecondaryActionButton
        secondaryAction={secondaryAction}
        useLittleMode={useLittleMode}
        primaryAction={primaryAction}
        isFullscreen={isFullscreen}
        disableButtons={disableButtons}
      />

      {shouldShowDivider && <ToolbarDivider />}

      {primaryAction &&
        renderPrimaryActionContent({
          primaryAction,
          isFullscreen,
          listOfActions,
          handleOnClick: onActionClick,
          disableButtons,
        })}
    </div>
  )
}

export { ActionsMenu }
