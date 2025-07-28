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
} from "./CardActions"
import { CardAvatar, type CardAvatarType } from "./CardAvatar"
import { CardMetadata } from "./CardMetadata"
import { CardOptions } from "./CardOptions"
import { type CardMetadata as CardMetadataType } from "./types"

interface OneCardProps {
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
}

export function OneCard({
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
}: OneCardProps) {
  return (
    <Card
      className={cn(
        "group relative bg-f1-background shadow-none transition-all",
        (selectable || (otherActions && otherActions.length > 0)) &&
          !selected &&
          "hover:border-f1-border",
        link &&
          "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md",
        selected &&
          "border-f1-border-selected bg-f1-background-selected-secondary"
      )}
      onClick={onClick}
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
        <div className="relative -mx-3 -mt-3 mb-4 h-32 overflow-hidden rounded-md">
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
            className={cn("relative flex-col gap-0 p-0", image && "pt-3")}
          >
            {avatar && <CardAvatar avatar={avatar} overlay={!!image} />}
            <CardTitle className="flex flex-row justify-between gap-1 text-lg font-semibold text-f1-foreground">
              {title}
            </CardTitle>
            {description && (
              <CardSubtitle className="line-clamp-3 text-base text-f1-foreground-secondary">
                {description}
              </CardSubtitle>
            )}
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
            <div className="flex flex-col gap-0.5">
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
      />
    </Card>
  )
}
