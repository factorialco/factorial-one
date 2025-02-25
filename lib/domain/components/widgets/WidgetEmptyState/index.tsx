import { Button, ButtonProps } from "@/core/components/actions/Button"
import { AlertAvatar } from "@/core/components/experimental/information/avatars/AlertAvatar"
import { EmojiAvatar } from "@/core/components/experimental/information/avatars/EmojiAvatar"
import { IconType } from "@/core/components/utility/Icon"

type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: ButtonProps["variant"]
}

export type WidgetEmptyStateProps = {
  title: string
  description: string
  emoji?: string
  actions?: Action[]
}

export function WidgetEmptyState({
  title,
  description,
  emoji,
  actions,
}: WidgetEmptyStateProps) {
  if ((actions?.length ?? 0) > 2) {
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    )
  }

  return (
    <div className="flex min-h-56 flex-col items-center justify-center p-8">
      {emoji ? (
        <EmojiAvatar emoji={emoji} size="lg" />
      ) : (
        <AlertAvatar type="warning" size="lg" />
      )}
      <div className="mt-3 text-center">
        <p className="line-clamp-2 font-medium">{title}</p>
        <p className="mt-0.5 line-clamp-2 text-f1-foreground-secondary">
          {description}
        </p>
      </div>
      {!!actions && (
        <div className="mt-5 flex flex-row gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              label={action.label}
              icon={action.icon}
              onClick={action.onClick}
              variant={action.variant}
            />
          ))}
        </div>
      )}
    </div>
  )
}
