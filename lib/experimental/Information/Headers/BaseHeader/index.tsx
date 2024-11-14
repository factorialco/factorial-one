import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import {
  AvatarVariant,
  renderAvatar,
} from "@/experimental/Information/Avatars/utils"
import { cn } from "@/lib/utils"

interface BaseHeaderProps {
  title: string
  avatar?: AvatarVariant
  description?: string
  eyebrow?: React.ReactNode
  footer?: React.ReactNode
  primaryAction?: {
    label: string
    icon?: IconType
    onClick: () => void
  }
  secondaryActions?: Array<{
    label: string
    icon?: IconType
    onClick: () => void
    variant?: "outline" | "critical"
  }>
}

export function BaseHeader({
  title,
  avatar,
  description,
  eyebrow,
  footer,
  primaryAction,
  secondaryActions,
}: BaseHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-4 p-8 md:flex-row">
      <div className="flex grow flex-col items-start justify-start gap-4 md:flex-row md:items-center">
        {avatar && (
          <div className="flex items-start">
            {renderAvatar(avatar, "large")}
          </div>
        )}
        <div className="flex flex-col gap-1">
          {eyebrow && (
            <div className="w-fit text-f1-foreground-secondary">{eyebrow}</div>
          )}
          <span className="text-xl font-semibold text-f1-foreground">
            {title}
          </span>
          {description && (
            <div className="text-lg text-f1-foreground-secondary">
              {description}
            </div>
          )}
          {footer && (
            <div className="w-fit text-f1-foreground-secondary">{footer}</div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 overflow-x-auto md:flex-row-reverse",
          avatar && "md:pt-1.5"
        )}
      >
        {primaryAction && (
          <Button
            label={primaryAction.label}
            onClick={primaryAction.onClick}
            variant="default"
            icon={primaryAction.icon}
          />
        )}
        {primaryAction && secondaryActions && (
          <div className="hidden h-4 w-px bg-f1-background-secondary md:block" />
        )}
        {secondaryActions &&
          secondaryActions.map((action) => (
            <Button
              key={action.label}
              label={action.label}
              onClick={action.onClick}
              variant={action.variant ?? "outline"}
              icon={action.icon}
            />
          ))}
      </div>
    </div>
  )
}
