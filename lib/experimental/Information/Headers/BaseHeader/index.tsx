import { Button, ButtonProps } from "@/components/Actions/Button"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import { StatusVariant } from "@/experimental/Information/Tags/StatusTag"
import {
  PrimaryAction,
  SecondaryAction,
} from "@/experimental/Information/utils"
import {
  Dropdown,
  DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Fragment, memo } from "react"
import { Metadata, MetadataAction, MetadataProps } from "../Metadata"

interface BaseHeaderProps {
  title: string
  avatar?: AvatarVariant
  description?: string
  primaryAction?: PrimaryAction
  secondaryActions?: SecondaryAction[]
  otherActions?: (DropdownItem & { isVisible?: boolean })[]
  status?: {
    label: string
    text: string
    variant: StatusVariant
    actions?: MetadataAction[]
  }
  metadata?: MetadataProps["items"]
}

const isVisible = (action: { isVisible?: boolean }) =>
  action.isVisible !== false

const ButtonWithTooltip = memo(function ButtonWithTooltip({
  tooltip,
  ...buttonProps
}: ButtonProps & { tooltip?: string }) {
  if (tooltip) {
    const Wrapper = buttonProps.disabled ? "span" : Fragment
    return (
      <Tooltip description={tooltip}>
        <Wrapper>
          <Button {...buttonProps} />
        </Wrapper>
      </Tooltip>
    )
  }
  return <Button {...buttonProps} />
})

export function BaseHeader({
  title,
  avatar,
  description,
  primaryAction,
  secondaryActions = [],
  otherActions = [],
  status,
  metadata = [],
}: BaseHeaderProps) {
  const allMetadata: BaseHeaderProps["metadata"] = [
    status && {
      label: status.label,
      value: {
        type: "status" as const,
        label: status.text,
        variant: status.variant,
      },
      actions: status.actions,
      hideLabel: true,
    },
    ...metadata,
  ]

  const visibleSecondaryActions = secondaryActions.filter(isVisible)
  const visibleOtherActions = otherActions.filter(isVisible)
  const isPrimaryActionVisible = primaryAction && isVisible(primaryAction)
  const hasSecondaryActions = visibleSecondaryActions.length > 0
  const hasOtherActions = visibleOtherActions.length > 0

  return (
    <div className="flex flex-col gap-3 px-6 pb-5 pt-3">
      <div className="flex flex-col items-start justify-start gap-4 md:flex-row">
        <div className="flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-center">
          {avatar && (
            <div className="flex items-start">
              <Avatar avatar={avatar} size="large" />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold text-f1-foreground">
              {title}
            </span>
            {description && (
              <div className="text-lg text-f1-foreground-secondary">
                {description}
              </div>
            )}
          </div>
        </div>
        {allMetadata.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
            <Metadata items={allMetadata} />
          </div>
        )}
        <div className="flex w-full shrink-0 flex-wrap items-center gap-x-2 gap-y-3 md:w-fit md:flex-row-reverse md:gap-y-2 md:overflow-x-auto">
          {isPrimaryActionVisible && (
            <>
              <div className="hidden md:block">
                <ButtonWithTooltip
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  variant="default"
                  icon={primaryAction.icon}
                  disabled={primaryAction.disabled}
                  tooltip={primaryAction.tooltip}
                />
              </div>
              <div className="w-full md:hidden [&>*]:w-full">
                <ButtonWithTooltip
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  variant="default"
                  icon={primaryAction.icon}
                  size="lg"
                  disabled={primaryAction.disabled}
                  tooltip={primaryAction.tooltip}
                />
              </div>
            </>
          )}
          {isPrimaryActionVisible &&
            (hasSecondaryActions || hasOtherActions) && (
              <div className="mx-1 hidden h-4 w-px bg-f1-background-secondary md:block" />
            )}
          {visibleSecondaryActions.map((action) => (
            <Fragment key={action.label}>
              <div className="hidden md:block">
                <ButtonWithTooltip
                  label={action.label}
                  onClick={action.onClick}
                  variant={action.variant ?? "outline"}
                  icon={action.icon}
                  disabled={action.disabled}
                  tooltip={action.tooltip}
                />
              </div>
              <div className="w-full md:hidden [&>*]:w-full">
                <ButtonWithTooltip
                  label={action.label}
                  onClick={action.onClick}
                  variant={action.variant ?? "outline"}
                  icon={action.icon}
                  size="lg"
                  disabled={action.disabled}
                  tooltip={action.tooltip}
                />
              </div>
            </Fragment>
          ))}
          {visibleOtherActions.length > 0 && (
            <>
              <div className="hidden md:block">
                <Dropdown items={visibleOtherActions} />
              </div>
              <div className="w-full md:hidden">
                <MobileDropdown items={visibleOtherActions} />
              </div>
            </>
          )}
        </div>
      </div>
      {allMetadata.length > 0 && (
        <div className="hidden flex-wrap items-center gap-x-3 gap-y-1 md:block">
          <Metadata items={allMetadata} />
        </div>
      )}
    </div>
  )
}
