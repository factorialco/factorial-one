import { Button } from "@/components/Actions/Button"
import { EmojiAvatar } from "@/experimental/Information/Avatars/EmojiAvatar"
import { AlertAvatar } from "../Information/Avatars/AlertAvatar"
import * as Types from "./types"

export function OneEmptyState({
  title,
  description,
  variant = "default",
  emoji,
  actions,
}: Types.OneEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-8">
      {variant === "default" && <EmojiAvatar emoji={emoji!} size="lg" />}
      {variant !== "default" && <AlertAvatar type={variant} size="lg" />}
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
