import { Icon } from "@/components/Utilities/Icon"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import {
  CompanyAvatar,
  PersonAvatar,
  TeamAvatar,
} from "@/experimental/Information/Avatars/exports"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
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

      {metadata.type === "user" && (
        <div className="flex flex-row items-center gap-1">
          <PersonAvatar
            size="xsmall"
            firstName={metadata.firstName}
            lastName={metadata.lastName}
            src={metadata.src}
          />
          <span className="text-f1-foreground">
            {metadata.firstName} {metadata.lastName}
          </span>
        </div>
      )}

      {metadata.type === "company" && (
        <div className="flex flex-row items-center gap-1">
          <CompanyAvatar
            name={metadata.name}
            src={metadata.src}
            size="xsmall"
          />
          <span className="text-f1-foreground">{metadata.name}</span>
        </div>
      )}

      {metadata.type === "team" && (
        <div className="flex flex-row items-center gap-1">
          <TeamAvatar name={metadata.name} src={metadata.src} size="xsmall" />
          <span className="text-f1-foreground">{metadata.name}</span>
        </div>
      )}

      {metadata.type === "tag" && (
        <RawTag text={metadata.label} icon={metadata.tagIcon} />
      )}
    </div>
  )
}
