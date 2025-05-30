import { Button } from "@/components/Actions/Button"
import {
  OneDropdownButton,
  OneDropdownButtonItem,
} from "@/components/Actions/OneDropdownButton"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { ToolbarDivider } from "@/experimental/RichText/CoreEditor/Toolbar/ToolbarDivider"
import { primaryActionType, secondaryActionType } from "../../utils/types"

interface ActionsMenuProps {
  secondaryAction?: secondaryActionType
  primaryAction?: primaryActionType
  useLittleMode: boolean
  disableButtons: boolean
  isFullscreen: boolean
}

const getLabelID = (label?: string) =>
  label ? label.toLowerCase().replace(" ", "-") : ""

const createActionItems = (
  primaryAction?: primaryActionType,
  secondaryAction?: secondaryActionType
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

  const secondaryActionItems = secondaryAction
    ? [
        {
          label: secondaryAction.label,
          value: getLabelID(secondaryAction.label),
          icon: "icon" in secondaryAction ? secondaryAction.icon : undefined,
        },
      ]
    : []

  return [...primaryActionItems, ...subActionItems, ...secondaryActionItems]
}

const handleActionClick = (
  labelID: string,
  primaryAction?: primaryActionType,
  secondaryAction?: secondaryActionType
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
  secondaryAction?: secondaryActionType
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
  const shouldHideButton =
    !secondaryAction ||
    (useLittleMode &&
      primaryAction &&
      !isFullscreen &&
      secondaryAction.type !== "switch")

  if (shouldHideButton) {
    return null
  }

  if (secondaryAction.type === "switch") {
    return (
      <Switch
        title={secondaryAction.label}
        checked={"checked" in secondaryAction ? secondaryAction.checked : false}
        onCheckedChange={(checked) => {
          secondaryAction.onClick(checked)
        }}
        disabled={disableButtons || secondaryAction.disabled}
        hideLabel={
          "hideLabel" in secondaryAction ? secondaryAction.hideLabel : false
        }
      />
    )
  }

  return (
    <Button
      onClick={(e) => {
        e.preventDefault()
        secondaryAction.onClick()
      }}
      variant={
        "variant" in secondaryAction ? secondaryAction.variant : "outline"
      }
      size="md"
      label={secondaryAction.label}
      disabled={disableButtons || secondaryAction.disabled}
      type="button"
      icon={"icon" in secondaryAction ? secondaryAction.icon : undefined}
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
  includeSecondaryInDropdown: boolean
}

const renderPrimaryActionContent = ({
  primaryAction,
  isFullscreen,
  listOfActions,
  handleOnClick,
  disableButtons,
  includeSecondaryInDropdown,
}: PrimaryActionContentProps) => {
  if (!isFullscreen) {
    return primaryAction.subActions || includeSecondaryInDropdown ? (
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
      {primaryAction.subActions?.length && <ToolbarDivider />}
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

  const shouldIncludeSecondaryInDropdown =
    secondaryAction &&
    useLittleMode &&
    secondaryAction.type !== "switch" &&
    primaryAction
      ? true
      : false

  const listOfActions = createActionItems(
    primaryAction,
    shouldIncludeSecondaryInDropdown ? secondaryAction : undefined
  )

  const onActionClick = (labelID: string) =>
    handleActionClick(labelID, primaryAction, secondaryAction)

  const shouldShowDivider =
    secondaryAction &&
    primaryAction &&
    (!useLittleMode || secondaryAction.type === "switch" || isFullscreen)

  return (
    <div className="scrollbar-macos flex items-center gap-2 overflow-x-auto">
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
          includeSecondaryInDropdown: shouldIncludeSecondaryInDropdown,
        })}
    </div>
  )
}

export { ActionsMenu }
