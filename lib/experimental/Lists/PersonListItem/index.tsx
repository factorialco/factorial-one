import { Button } from "@/components/Actions/Button"
import { Icon, IconType } from "@/components/Utilities/Icon"
import { BadgeProps } from "@/experimental/exports"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { DotTag, DotTagProps } from "@/experimental/Information/Tags/DotTag"
import { RawTag, RawTagProps } from "@/experimental/Information/Tags/RawTag"
import { InfoCircle } from "@/icons/app"
import React from "react"

export type PersonListItemProps = {
  person: {
    firstName: string
    lastName: string
    avatarUrl?: string
    avatarBadge?: Omit<BadgeProps, "size">
  }
  description?: string
  onClick: () => void
} & (
  | {
      description: string
    }
  | {
      tags: Omit<RawTagProps, "noBorder">[]
    }
) &
  (
    | {
        tag: DotTagProps
      }
    | {
        actions: {
          primary?: {
            icon?: IconType
            label: string
            onClick: () => void
          }
          secondary?: {
            icon: IconType
            onClick: () => void
          }
        }
      }
  )

export const PersonListItem = React.forwardRef<
  HTMLDivElement,
  PersonListItemProps
>(({ person, onClick, ...props }, ref) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <div
      ref={ref}
      className="flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"
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
          <Icon
            icon={InfoCircle}
            size="sm"
            className="text-f1-icon-secondary"
          />
        </div>
        {"tags" in props && (
          <div className="-ml-1.5 flex flex-row items-center text-f1-foreground-secondary [&>div]:-mr-1">
            {props.tags.map((tag, i) => (
              <>
                <RawTag key={tag.text} {...tag} noBorder />
                {i < props.tags.length - 1 && <span>·</span>}
              </>
            ))}
          </div>
        )}
        {"description" in props && (
          <p className="truncate text-f1-foreground-secondary">
            {props.description}
          </p>
        )}
      </div>

      <div className="flex flex-row items-center justify-between gap-2">
        {"tag" in props && <DotTag {...props.tag} />}
        {"actions" in props && (
          <div className="flex flex-1 flex-row items-center justify-end gap-2">
            {props.actions.primary && (
              <Button
                variant="outline"
                onClick={props.actions.primary.onClick}
                label={props.actions.primary.label}
                icon={props.actions.primary.icon}
              />
            )}

            {props.actions.secondary && (
              <Button
                variant="outline"
                onClick={props.actions.secondary.onClick}
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

PersonListItem.displayName = "PersonListItem"
