import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import { EmojiAvatar } from "@/experimental/Information/Avatars/EmojiAvatar"
import { FileAvatar } from "@/experimental/Information/Avatars/FileAvatar"
import { cn } from "@/lib/utils"

type CardAvatarType =
  | AvatarVariant
  | { type: "emoji"; emoji: string }
  | { type: "file"; file: File }

interface CardAvatarProps {
  /**
   * The avatar to display
   */
  avatar: CardAvatarType

  /**
   * Whether the avatar is displayed with an overlay
   */
  overlay?: boolean

  /**
   * Whether the avatar is displayed in a compact layout
   */
  compact?: boolean
}

const AvatarRender = ({ avatar }: { avatar: CardAvatarType }) => {
  if (avatar.type === "emoji") {
    return <EmojiAvatar emoji={avatar.emoji} size="lg" />
  }
  if (avatar.type === "file") {
    return <FileAvatar file={avatar.file} size="large" />
  }
  return <Avatar avatar={avatar} size="large" />
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
      <AvatarRender avatar={avatar} />
    </div>
  )
}

export type { CardAvatarType }
