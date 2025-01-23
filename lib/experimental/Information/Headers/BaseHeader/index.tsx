import { Button } from "@/components/Actions/Button"
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
import { useI18n } from "@/lib/i18n-provider"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"
import { Metadata, MetadataAction, MetadataItem } from "../Metadata"

interface BaseHeaderProps {
  title: string
  avatar?: AvatarVariant
  description?: string
  eyebrow?: React.ReactNode
  primaryAction?: PrimaryAction
  secondaryActions?: SecondaryAction[]
  otherActions?: DropdownItem[]
  status?: {
    label: string
    text: string
    variant: StatusVariant
    actions?: MetadataAction[]
  }
  metadata?: MetadataItem[]
}

export function BaseHeader({
  title,
  avatar,
  description,
  eyebrow,
  primaryAction,
  secondaryActions,
  otherActions,
  status,
  metadata,
}: BaseHeaderProps) {
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

  const allMetadata = status
    ? [
        {
          label: status.label,
          value: {
            type: "status" as const,
            label: status.text,
            variant: status.variant,
          },
          actions: status.actions,
          hideLabel: true,
        },
        ...(metadata ?? []),
      ]
    : metadata

  return (
    <div className="flex flex-col gap-3 px-6 pb-5 pt-3">
      <div className="flex flex-col items-start justify-start gap-4 md:flex-row">
        <div className="flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start">
          {avatar && (
            <div className="flex items-start">
              <Avatar avatar={avatar} size="large" />
            </div>
          )}
          <div className="flex flex-col gap-1">
            {eyebrow && (
              <div className="text-lg text-f1-foreground-secondary">
                {eyebrow}
              </div>
            )}
            <span className="text-xl font-semibold text-f1-foreground">
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
                    duration: 0.15,
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
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
          {allMetadata && <Metadata items={allMetadata} />}
        </div>
        <div className="flex w-full shrink-0 flex-wrap items-center gap-x-2 gap-y-3 md:w-fit md:flex-row-reverse md:gap-y-2 md:overflow-x-auto">
          {primaryAction && (
            <>
              <div className="hidden md:block">
                <Button
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  variant="default"
                  icon={primaryAction.icon}
                />
              </div>
              <div className="w-full md:hidden [&>*]:w-full">
                <Button
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  variant="default"
                  icon={primaryAction.icon}
                  size="lg"
                />
              </div>
            </>
          )}
          {primaryAction && (secondaryActions || otherActions) && (
            <div className="mx-1 hidden h-4 w-px bg-f1-background-secondary md:block" />
          )}
          {secondaryActions &&
            secondaryActions.map((action) => (
              <>
                <div className="hidden md:block">
                  <Button
                    key={action.label}
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                  />
                </div>
                <div className="w-full md:hidden [&>*]:w-full">
                  <Button
                    key={action.label}
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                    size="lg"
                  />
                </div>
              </>
            ))}
          {otherActions && otherActions.length > 0 && (
            <>
              <div className="hidden md:block">
                <Dropdown items={otherActions} />
              </div>
              <div className="w-full md:hidden">
                <MobileDropdown items={otherActions} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="hidden flex-wrap items-center gap-x-3 gap-y-1 md:block">
        {allMetadata && <Metadata items={allMetadata} />}
      </div>
    </div>
  )
}
