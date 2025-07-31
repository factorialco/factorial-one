import { Link } from "@/components/Actions/Link"
import { Image } from "@/components/Utilities/Image"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
import { cn, focusRing } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/ui/Card"
import { type ReactNode } from "react"
import {
  CardActions,
  type CardPrimaryAction,
  type CardSecondaryAction,
  type CardSecondaryLink,
} from "./components/CardActions"
import { CardAvatar, type CardAvatarType } from "./components/CardAvatar"
import { CardMetadata } from "./components/CardMetadata"
import { CardOptions } from "./components/CardOptions"
import { type CardMetadata as CardMetadataType } from "./types"

export interface CardInternalProps {
  /**
   * Whether the card has a compact layout
   */
  compact?: boolean

  /**
   * The avatar to display in the card
   */
  avatar?: CardAvatarType

  /**
   * Whether the card has an image
   */
  image?: string

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
  metadata?: CardMetadataType[]

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
  primaryAction?: CardPrimaryAction

  /**
   * The secondary actions - either an array of button actions or a single link
   */
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink

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

  /**
   * The callback to handle the click of the card
   */
  onClick?: () => void

  /**
   * Force vertical metadata for compact layout
   * Private prop
   */
  forceVerticalMetadata?: boolean
}

export function CardInternal({
  compact = false,
  avatar,
  image,
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
  onClick,
  forceVerticalMetadata = false,
}: CardInternalProps) {
  return (
    <Card
      className={cn(
        "group relative bg-f1-background shadow-none transition-all",
        compact && "p-3",
        (selectable || (otherActions && otherActions.length > 0)) &&
          !selected &&
          "hover:border-f1-border",
        link &&
          "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md",
        selected &&
          "border-f1-border-selected bg-f1-background-selected-secondary"
      )}
      onClick={onClick}
      data-testid="card"
    >
      {link && (
        <Link
          href={link}
          style={{
            zIndex: 1,
          }}
          className={cn("z-1 absolute inset-0 block rounded-xl", focusRing())}
          aria-label={title}
        />
      )}

      {image && (
        <div
          className={cn(
            "relative -mx-3 -mt-3 mb-4 h-32 overflow-hidden rounded-md",
            compact && "-mx-2 -mt-2 mb-3"
          )}
        >
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <CardOptions
            otherActions={otherActions}
            selectable={selectable}
            selected={selected}
            onSelect={onSelect}
            title={title}
            overlay
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-start justify-between gap-1">
          <CardHeader
            className={cn(
              "relative flex-col gap-0 p-0",
              image && !compact && "pt-3",
              compact && "flex-row items-center gap-2"
            )}
          >
            {avatar && (
              <CardAvatar avatar={avatar} overlay={!!image} compact={compact} />
            )}
            <div
              className={cn(
                "flex flex-col gap-0",
                compact && "flex-row items-center gap-2"
              )}
            >
              <CardTitle
                className={cn(
                  "flex flex-row justify-between gap-1 text-lg font-semibold text-f1-foreground",
                  compact && "shrink-0 text-base"
                )}
              >
                {title}
              </CardTitle>
              {description && (
                <CardSubtitle
                  className={cn(
                    "line-clamp-3 text-base text-f1-foreground-secondary",
                    compact && "line-clamp-1"
                  )}
                >
                  {description}
                </CardSubtitle>
              )}
            </div>
          </CardHeader>
          {!image && (
            <CardOptions
              otherActions={otherActions}
              selectable={selectable}
              selected={selected}
              onSelect={onSelect}
              title={title}
            />
          )}
        </div>
        <CardContent>
          {metadata && (
            <div
              className={cn(
                "flex flex-col gap-0.5",
                compact && "flex-row flex-wrap gap-x-3 gap-y-0",
                forceVerticalMetadata && "flex-col gap-y-0.5"
              )}
            >
              {metadata.map((item, index) => (
                <CardMetadata key={index} metadata={item} />
              ))}
            </div>
          )}
          {children}
        </CardContent>
      </div>
      <CardActions
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        compact={compact}
      />
    </Card>
  )
}
