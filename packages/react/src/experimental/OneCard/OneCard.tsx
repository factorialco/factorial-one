import { Button } from "@/components/Actions/Button"
import { Link } from "@/components/Actions/Link"
import { IconType } from "@/components/Utilities/Icon"
import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { EllipsisHorizontal } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import {
  Card,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { type ReactNode } from "react"
import { CardMetadata } from "./CardMetadata"
import { type Metadata } from "./types"

interface OneCardProps {
  /**
   * The avatar to display in the card
   */
  avatar?: AvatarVariant

  /**
   * The title of the card
   */
  title?: string

  /**
   * The description of the card
   */
  description?: string

  /**
   * Metadata items to display in the card
   */
  metadata?: Metadata[]

  /**
   * The children to display in the card
   */
  children?: ReactNode

  /**
   * The link to navigate to when the card is clicked
   */
  link?: string

  /**
   * The primary action that displays a primary button in the card footer
   */
  primaryAction?: {
    label: string
    icon?: IconType
    onClick: () => void
  }

  /**
   * The secondary actions that display a secondary button in the card footer
   * The first secondary action will display its label, while the rest will display
   * just the icon
   */
  secondaryActions?: {
    label: string
    icon: IconType
    onClick: () => void
  }[]

  /**
   * Actions to display in the dropdown menu inside the card content
   */
  otherActions?: DropdownItem[]

  /**
   * Whether the card is selectable
   */
  selectable?: boolean

  /**
   * Whether the card is selected
   */
  selected?: boolean

  /**
   * The callback to handle the selection of the card
   */
  onSelect?: (selected: boolean) => void
}

export function OneCard({
  avatar,
  title,
  description,
  metadata,
  children,
  link,
  primaryAction,
  secondaryActions,
  otherActions,
  selectable = false,
  selected = false,
  onSelect,
}: OneCardProps) {
  const hasActions = primaryAction || secondaryActions
  const hasOtherActions = otherActions && otherActions.length > 0

  return (
    <Card
      className={cn(
        "group relative bg-f1-background p-0 shadow-none transition-all",
        (selectable || hasOtherActions) &&
          !selected &&
          "hover:border-f1-border",
        link &&
          "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md",
        selected &&
          "border-f1-border-selected bg-f1-background-selected-secondary"
      )}
    >
      {link && (
        <Link
          href={link}
          className={cn("absolute inset-0 z-0 block rounded-xl", focusRing())}
          aria-label={title}
        />
      )}

      <div className="flex flex-col gap-2.5 p-4">
        <div className="flex flex-row items-start justify-between gap-1">
          <CardHeader className="flex-col gap-0.5">
            {avatar && (
              <div className="mb-1.5 flex h-fit w-fit">
                <Avatar avatar={avatar} size="medium" />
              </div>
            )}
            <CardTitle className="flex flex-row justify-between gap-1 text-lg font-semibold text-f1-foreground">
              {title}
            </CardTitle>
            {description && (
              <CardSubtitle className="line-clamp-3 text-base text-f1-foreground-secondary">
                {description}
              </CardSubtitle>
            )}
          </CardHeader>
          {(hasOtherActions || selectable) && (
            <div
              className={cn(
                "flex flex-row gap-2 opacity-0 transition-opacity group-hover:opacity-100 [&_div]:z-10",
                "focus-within:opacity-100",
                selected && "opacity-100"
              )}
            >
              {hasOtherActions && (
                <Dropdown items={otherActions}>
                  <Button
                    label="Other actions"
                    hideLabel
                    icon={EllipsisHorizontal}
                    variant="ghost"
                    round
                    size="sm"
                  />
                </Dropdown>
              )}
              {selectable && (
                <Checkbox
                  title={title}
                  checked={selected}
                  onCheckedChange={onSelect}
                  hideLabel
                />
              )}
            </div>
          )}
        </div>
        {metadata && (
          <div className="flex flex-col gap-0.5">
            {metadata.map((item) => (
              <CardMetadata key={item.type} metadata={item} />
            ))}
          </div>
        )}
        {children}
      </div>
      {hasActions && (
        <CardFooter className="flex justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary px-4 py-3 [&>div]:z-10">
          {secondaryActions && (
            <div className="flex gap-2">
              {secondaryActions.map((action, index) => (
                <Button
                  label={action.label}
                  icon={action.icon}
                  hideLabel={index > 0}
                  round={index > 0}
                  variant="outline"
                  onClick={action.onClick}
                />
              ))}
            </div>
          )}

          {primaryAction && (
            <Button
              label={primaryAction.label}
              icon={primaryAction.icon}
              onClick={primaryAction.onClick}
            />
          )}
        </CardFooter>
      )}
    </Card>
  )
}
