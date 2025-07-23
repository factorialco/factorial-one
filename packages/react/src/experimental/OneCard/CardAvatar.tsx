import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import { EmojiAvatar } from "@/experimental/Information/Avatars/EmojiAvatar"
import { cn } from "@/lib/utils"

type CardAvatarType =
  | AvatarVariant
  | { type: "emoji"; emoji: string; size?: "sm" | "md" | "lg" }

interface CardAvatarProps {
  /**
   * The avatar to display
   */
  avatar: CardAvatarType

  /**
   * Whether the avatar is displayed with an overlay
   */
  overlay?: boolean
}

export function CardAvatar({ avatar, overlay = false }: CardAvatarProps) {
  const isRounded = avatar.type === "person"

  return (
    <div
      className={cn(
        "mb-1.5 flex h-fit w-fit",
        overlay &&
          "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background",
        overlay && isRounded && "rounded-full"
      )}
    >
      {avatar.type === "emoji" ? (
        <EmojiAvatar emoji={avatar.emoji} size={avatar.size || "md"} />
      ) : (
        <Avatar avatar={avatar} size="medium" />
      )}
    </div>
  )
}

export type { CardAvatarType }
