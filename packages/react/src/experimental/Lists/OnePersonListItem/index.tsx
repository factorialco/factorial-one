import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import React from "react"
import { Button } from "../../../components/Actions/Button"
import { Icon, IconType } from "../../../components/Utilities/Icon"
import { InfoCircle } from "../../../icons/app"
import { BadgeProps } from "../../exports"
import { PersonAvatar } from "../../Information/Avatars/PersonAvatar"
import { DotTag, DotTagProps } from "../../Information/Tags/DotTag"
import { RawTag, RawTagProps } from "../../Information/Tags/RawTag"

type Person = {
  id: string
  firstName: string
  lastName: string
  avatarUrl?: string
  avatarBadge?: Omit<BadgeProps, "size">
}

export type OnePersonListItemProps = {
  person: Person
  description?: string
  bottomTags: Omit<RawTagProps, "noBorder">[]
  rightTag?: DotTagProps
  actions?: {
    primary?: {
      icon?: IconType
      label: string
      onClick: (person: Person) => void
    }
    secondary?: {
      icon: IconType
      onClick: (person: Person) => void
    }
  }
  info?: string
  onClick: (person: Person) => void
  withPointerCursor?: boolean
}

const BaseOnePersonListItem = React.forwardRef<
  HTMLDivElement,
  OnePersonListItemProps
>(({ person, onClick, ...props }, ref) => {
  const handleClick = () => {
    onClick(person)
  }

  const handlePrimaryActionClick = () => {
    props.actions?.primary?.onClick(person)
  }

  const handleSecondaryActionClick = () => {
    props.actions?.secondary?.onClick(person)
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        props.withPointerCursor && "cursor-pointer"
      )}
      onClick={handleClick}
    >
      <PersonAvatar
        firstName={person.firstName}
        lastName={person.lastName}
        src={person.avatarUrl}
        badge={person.avatarBadge}
      />

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center gap-1">
          <span className="truncate font-medium">{`${person.firstName} ${person.lastName}`}</span>
          {props.info && (
            <Tooltip label={props.info}>
              <Icon
                icon={InfoCircle}
                size="sm"
                className="text-f1-icon-secondary"
              />
            </Tooltip>
          )}
        </div>
        {"bottomTags" in props && (
          <div className="-ml-1.5 flex flex-row items-center [&>div]:-mr-1">
            {props.bottomTags.map((tag, i) => (
              <>
                <RawTag
                  key={tag.text}
                  {...tag}
                  className="text-f1-foreground-secondary"
                  noBorder
                />
                {i < props.bottomTags.length - 1 && <span>·</span>}
              </>
            ))}
          </div>
        )}
        {"description" in props && props.description && (
          <p className="truncate text-f1-foreground-secondary">
            {props.description}
          </p>
        )}
      </div>

      <div className="flex flex-row items-center justify-between gap-2">
        {"rightTag" in props && props.rightTag && (
          <DotTag {...props.rightTag} />
        )}
        {"actions" in props && (
          <div className="flex flex-1 flex-row items-center justify-end gap-2">
            {props.actions?.primary && (
              <Button
                variant="outline"
                onClick={handlePrimaryActionClick}
                label={props.actions.primary.label}
                icon={props.actions.primary.icon}
              />
            )}

            {props.actions?.secondary && (
              <Button
                variant="outline"
                onClick={handleSecondaryActionClick}
                label="Secondary"
                icon={props.actions.secondary.icon}
                hideLabel
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
})

const OnePersonListItemSkeleton = () => {
  return (
    <div className="flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold">
      <Skeleton className="aspect-square w-8 rounded-full" />
      <div className="flex flex-1 flex-col gap-0.5">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}

BaseOnePersonListItem.displayName = "OnePersonListItem"

export const OnePersonListItem = withSkeleton(
  BaseOnePersonListItem,
  OnePersonListItemSkeleton
)
