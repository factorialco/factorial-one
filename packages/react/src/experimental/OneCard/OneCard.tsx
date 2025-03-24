import { Button } from "@/components/Actions/Button"
import { Link } from "@/components/Actions/Link"
import { IconType } from "@/components/Utilities/Icon"
import { DropdownItem } from "@/experimental/Navigation/Dropdown"
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
  title?: string
  description?: string
  metadata?: Metadata[]
  children?: ReactNode
  link?: string
  primaryAction?: {
    label: string
    icon?: IconType
    onClick: () => void
  }
  secondaryActions?: {
    label: string
    icon: IconType
    onClick: () => void
  }[]
  otherActions?: DropdownItem[]
}

export function OneCard({
  title,
  description,
  metadata,
  children,
  link,
  primaryAction,
  secondaryActions,
  otherActions,
}: OneCardProps) {
  const hasActions = primaryAction || secondaryActions || otherActions

  return (
    <Card
      className={cn(
        "relative bg-f1-background p-0 shadow-none transition-all",
        link &&
          "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md"
      )}
    >
      {link && (
        <Link
          href={link}
          className={cn("absolute inset-0 z-0 block rounded-xl", focusRing())}
        />
      )}
      <div className="flex flex-col gap-2.5 p-4">
        <CardHeader className="flex-col gap-0.5">
          <CardTitle className="flex flex-row gap-1 text-lg font-semibold text-f1-foreground">
            {title}
          </CardTitle>
          {description && (
            <CardSubtitle className="text-base text-f1-foreground-secondary">
              {description}
            </CardSubtitle>
          )}
        </CardHeader>
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
        <CardFooter className="flex justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary px-4 py-3 [&_button]:z-10">
          {secondaryActions && (
            <div className="flex gap-2">
              {secondaryActions.map((action) => (
                <Button
                  label={action.label}
                  icon={action.icon}
                  hideLabel
                  round
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
