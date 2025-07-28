import { Button } from "@/components/Actions/Button"
import { Link, type LinkProps } from "@/components/Actions/Link"
import { IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { CardFooter } from "@/ui/Card"

export interface CardPrimaryAction {
  label: string
  icon?: IconType
  onClick: () => void
}

export interface CardSecondaryAction {
  label: string
  icon?: IconType
  onClick: () => void
}

export interface CardSecondaryLink
  extends Pick<LinkProps, "href" | "target" | "disabled"> {
  label: string
}

interface CardActionsProps {
  primaryAction?: CardPrimaryAction
  secondaryActions?: CardSecondaryAction[] | CardSecondaryLink
  compact?: boolean
}

export function CardActions({
  primaryAction,
  secondaryActions,
  compact = false,
}: CardActionsProps) {
  const hasActions = primaryAction || secondaryActions

  if (!hasActions) {
    return null
  }

  return (
    <CardFooter
      className={cn(
        "justify-between gap-2 [&>div]:z-[1]",
        "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
        compact && "pt-3"
      )}
    >
      {secondaryActions && (
        <div className="flex gap-2">
          {Array.isArray(secondaryActions) ? (
            secondaryActions.map((action, index) => (
              <Button
                key={index}
                label={action.label}
                icon={action.icon}
                hideLabel={index > 0}
                round={index > 0}
                variant="outline"
                onClick={action.onClick}
                size={compact ? "sm" : "md"}
              />
            ))
          ) : (
            <Link
              href={secondaryActions.href}
              target={secondaryActions.target}
              disabled={secondaryActions.disabled}
            >
              {secondaryActions.label}
            </Link>
          )}
        </div>
      )}

      {primaryAction && (
        <Button
          label={primaryAction.label}
          icon={primaryAction.icon}
          onClick={primaryAction.onClick}
          size={compact ? "sm" : "md"}
        />
      )}
    </CardFooter>
  )
}
