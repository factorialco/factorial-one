import { AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarEmoji } from "@/components/avatars/F0AvatarEmoji"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { cn } from "@/lib/utils"

type CardAvatarVariant =
  | AvatarVariant
  | { type: "emoji"; emoji: string }
  | { type: "file"; file: File }

interface CardAvatarProps {
  /**
   * The avatar to display
   */
  avatar: CardAvatarVariant

  /**
   * Whether the avatar is displayed with an overlay
   */
  overlay?: boolean

  /**
   * Whether the avatar is displayed in a compact layout
   */
  compact?: boolean
}

const AvatarRender = ({
  avatar,
  compact = false,
}: {
  avatar: CardAvatarVariant
  compact?: boolean
}) => {
  if (avatar.type === "emoji") {
    return (
      <F0AvatarEmoji emoji={avatar.emoji} size={compact ? "small" : "large"} />
    )
  }
  if (avatar.type === "file") {
    return (
      <F0AvatarFile file={avatar.file} size={compact ? "small" : "large"} />
    )
  }
  return <F0Avatar avatar={avatar} size={compact ? "small" : "large"} />
}

export function CardAvatar({
  avatar,
  overlay = false,
  compact = false,
}: CardAvatarProps) {
  const isRounded = avatar.type === "person"

  return (
    <div
      className={cn(
        "mb-1.5 flex h-fit w-fit",
        overlay &&
          !compact &&
          "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background",
        overlay && isRounded && "rounded-full",
        compact && "mb-0"
      )}
      data-testid="card-avatar"
    >
      <AvatarRender avatar={avatar} compact={compact} />
    </div>
  )
}

export type { CardAvatarVariant }
