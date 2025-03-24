import { Icon } from "@/components/Utilities/Icon"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import { Metadata } from "./types"

interface CardMetadataProps {
  metadata: Metadata
}

export function CardMetadata({ metadata }: CardMetadataProps) {
  return (
    <div className="flex h-8 items-center gap-1.5 font-medium">
      <Icon icon={metadata.icon} className="text-f1-icon" size="md" />

      {metadata.type === "text" && (
        <div className="text-f1-foreground">{metadata.title}</div>
      )}

      {metadata.type === "avatarList" && (
        <AvatarList
          avatars={metadata.avatars}
          max={metadata.max}
          size="xsmall"
        />
      )}

      {metadata.type === "status" && (
        <StatusTag text={metadata.label} variant={metadata.status} />
      )}
    </div>
  )
}
