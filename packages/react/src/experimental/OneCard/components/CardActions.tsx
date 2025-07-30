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
        "flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]",
        "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4",
        compact && "pt-3"
      )}
    >
      {secondaryActions && (
        <>
          <div className="flex w-full flex-col gap-2 sm:hidden [&_a]:justify-center [&_button]:w-full [&_div]:w-full [&_div]:justify-center">
            {Array.isArray(secondaryActions) ? (
              secondaryActions.map((action, index) => (
                <Button
                  key={index}
                  label={action.label}
                  icon={action.icon}
                  variant="outline"
                  onClick={action.onClick}
                  size="lg"
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
          <div className="hidden gap-2 sm:flex">
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
        </>
      )}

      {primaryAction && (
        <>
          <div className="flex w-full sm:hidden [&_button]:w-full [&_div]:w-full [&_div]:justify-center">
            <Button
              label={primaryAction.label}
              icon={primaryAction.icon}
              onClick={primaryAction.onClick}
              size="lg"
            />
          </div>
          <div className="hidden w-fit sm:flex [&_button]:w-fit [&_div]:w-full [&_div]:justify-center">
            <Button
              label={primaryAction.label}
              icon={primaryAction.icon}
              onClick={primaryAction.onClick}
              size={compact ? "sm" : "md"}
            />
          </div>
        </>
      )}
    </CardFooter>
  )
}
