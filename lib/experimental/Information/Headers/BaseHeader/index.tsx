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
import { useI18n } from "@/lib/i18n-provider"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Fragment, memo, useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"
import { Metadata, MetadataAction, MetadataProps } from "../Metadata"

interface BaseHeaderProps {
  title: string
  avatar?:
    | {
        type: "generic"
        name: string
        src?: string
      }
    | AvatarVariant

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

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const translations = useI18n()

  /*
    Checks if the description is long enough to be truncated
  */
  const [descriptionRef, measureRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const [descriptionSize, measureSize] = [
    useResizeObserver({ ref: descriptionRef }),
    useResizeObserver({ ref: measureRef }),
  ]

  useEffect(() => {
    if (measureSize.height && descriptionSize.height) {
      setNeedsTruncation(measureSize.height > descriptionSize.height)
    }
  }, [measureSize.height, descriptionSize.height])

  const visibleSecondaryActions = secondaryActions.filter(isVisible)
  const visibleOtherActions = otherActions.filter(isVisible)
  const isPrimaryActionVisible = primaryAction && isVisible(primaryAction)
  const hasSecondaryActions = visibleSecondaryActions.length > 0
  const hasOtherActions = visibleOtherActions.length > 0

  return (
    <div className="flex flex-col gap-3 px-6 pb-5 pt-3">
      <div
        className={cn(
          "flex flex-col items-start justify-start gap-4 md:flex-row",
          !description && "md:items-center"
        )}
      >
        <div
          className={cn(
            "flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start",
            !description && "md:items-center"
          )}
        >
          {avatar && (
            <div className="flex items-start">
              <Avatar
                avatar={{
                  ...(avatar.type === "generic"
                    ? { ...avatar, type: "company" }
                    : avatar),
                }}
                size="large"
              />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-semibold text-f1-foreground">
              {title}
            </span>
            {description && (
              <div className="flex max-w-[640px] flex-col gap-1">
                <motion.div
                  initial={false}
                  animate={{
                    height: isDescriptionExpanded
                      ? (measureSize.height ?? descriptionSize.height)
                      : (descriptionSize.height ?? "3rem"),
                  }}
                  transition={{
                    duration: needsTruncation ? 0.15 : 0,
                    ease: [0.165, 0.84, 0.44, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div
                    ref={descriptionRef}
                    className={cn(
                      "text-lg text-f1-foreground-secondary",
                      !isDescriptionExpanded && "line-clamp-2"
                    )}
                  >
                    {description}
                  </div>
                  <div
                    ref={measureRef}
                    className="invisible text-lg text-f1-foreground-secondary"
                    aria-hidden="true"
                  >
                    {description}
                  </div>
                </motion.div>
                {(needsTruncation || isDescriptionExpanded) && (
                  <button
                    onClick={() =>
                      setIsDescriptionExpanded(!isDescriptionExpanded)
                    }
                    className="relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover"
                  >
                    {isDescriptionExpanded
                      ? translations.actions.showLess
                      : translations.actions.showAll}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {allMetadata.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
            <Metadata items={allMetadata} />
          </div>
        )}

        <div className="flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden">
          {isPrimaryActionVisible && (
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
          )}

          {visibleSecondaryActions.map((action) => (
            <Fragment key={action.label}>
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
            <div className="w-full">
              <MobileDropdown items={visibleOtherActions} />
            </div>
          )}
        </div>

        <div className="-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto">
          {visibleOtherActions.length > 0 && (
            <div>
              <Dropdown items={visibleOtherActions} />
            </div>
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
            </Fragment>
          ))}
          {isPrimaryActionVisible &&
            (hasSecondaryActions || hasOtherActions) && (
              <div className="mx-1 h-4 w-px bg-f1-background-secondary-hover" />
            )}
          {isPrimaryActionVisible && (
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
