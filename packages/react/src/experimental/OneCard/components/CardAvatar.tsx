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

  /**
   * The title to display
   */
  title?: string

  /**
   * The description to display
   */
  description?: string
}

const AvatarRender = ({
  avatar,
  title = "",
  description = "",
}: {
  avatar: CardAvatarType
  title?: string
  description?: string
}) => {
  let avatarElement = null
  let titleElement = title
  if (avatar.type === "emoji") {
    avatarElement = <EmojiAvatar emoji={avatar.emoji} size={"lg"} />
  } else if (avatar.type === "file") {
    avatarElement = <FileAvatar file={avatar.file} size={"large"} />
  } else {
    avatarElement = (
      <Avatar avatar={avatar} size={description ? "large" : "small"} />
    )
    if (avatar.type === "person") {
      titleElement = `${avatar.firstName} ${avatar.lastName}`
    } else {
      titleElement = avatar.name
    }
  }
  return !title ? (
    <div className="flex flex-row items-center gap-2">
      {avatarElement}
      <div className="flex flex-col gap-0">
        <span className="text-lg font-semibold text-f1-foreground">
          {titleElement}
        </span>
        <span className="line-clamp-1 text-base text-f1-foreground-secondary">
          {description}
        </span>
      </div>
    </div>
  ) : (
    avatarElement
  )
}

export function CardAvatar({
  avatar,
  overlay = false,
  compact = false,
  description = "",
  title = "",
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
      <AvatarRender avatar={avatar} title={title} description={description} />
    </div>
  )
}

export type { CardAvatarType }
