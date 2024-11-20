import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { AlertAvatar } from "@/experimental/Information/Avatars/AlertAvatar"
import { EmojiAvatar } from "@/experimental/Information/Avatars/EmojiAvatar"

export type WidgetEmptyStateProps = {
  title: string
  description: string
  emoji?: string
  actions?: {
    primary: {
      label: string
      onClick: () => void
      icon?: IconType
    }
    outline: {
      label: string
      onClick: () => void
      icon?: IconType
    }
  }
}

export function WidgetEmptyState({
  title,
  description,
  emoji,
  actions,
}: WidgetEmptyStateProps) {
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
          <Button
            label={actions.primary.label}
            icon={actions.primary.icon}
            onClick={actions.primary.onClick}
          />
          <Button
            label={actions.outline.label}
            icon={actions.outline.icon}
            onClick={actions.outline.onClick}
            variant="outline"
          />
        </div>
      )}
    </div>
  )
}
