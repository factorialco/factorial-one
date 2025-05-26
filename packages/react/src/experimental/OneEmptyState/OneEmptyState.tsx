import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { EmojiAvatar } from "@/experimental/Information/Avatars/EmojiAvatar"

type ActionProps = {
  /**
   * The label of the action
   */
  label: string

  /**
   * The click handler of the action
   */
  onClick: () => void
  
  /**
   * The variant of the action
   * @default "default"
   * @optional
   */
  variant?: "default" | "outline"

  /**
   * The icon of the action
   * @optional
   */
  icon?: IconType
}

type EmptyStateProps = {
  /**
   * The title of the empty state
   */
  title: string

  /**
   * If defined, a description will be displayed in the empty state
   * @optional
   */
  description?: string

  /**
   * If defined, an emoji will be displayed in the empty state
   * @optional
   */
  icon?: string

  /**
   * An array of action objects to display as buttons in the empty state.
   * Each action represents a user-interactable option, such as "Retry" or "Go Back",
   * and can include a label, click handler, optional icon, and button variant.
   * @optional
   */
  actions?: ActionProps[]
}

export function EmptyState({
  title,
  description,
  icon,
  actions,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-8">
      {icon && <EmojiAvatar emoji={icon} size="lg" />}
      <div className="flex flex-col items-center justify-center gap-0.5">
        <p className="text-center text-lg font-medium text-f1-foreground">
          {title}
        </p>
        {description && (
          <p className="max-w-96 text-center text-f1-foreground-secondary">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:w-fit sm:flex-row sm:gap-3 [&>div]:w-full">
          {actions.map((action) => (
            <Button key={action.label} {...action} />
          ))}
        </div>
      )}
    </div>
  )
}
