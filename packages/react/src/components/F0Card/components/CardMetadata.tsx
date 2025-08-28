import { Icon } from "@/components/Utilities/Icon"
import { metadataRenderers } from "@/internal/metadata"
import React from "react"
import { CardMetadata as CardMetadataType } from "../types"

export const cardPropertyRenderers = {
  text: metadataRenderers.text,
  number: metadataRenderers.number,
  date: metadataRenderers.date,
  amount: metadataRenderers.amount,
  person: metadataRenderers.person,
  company: metadataRenderers.company,
  team: metadataRenderers.team,
  status: metadataRenderers.status,
  tag: metadataRenderers.tag,
  avatarList: metadataRenderers.avatarList,
  tagList: metadataRenderers.tagList,
  alertTag: metadataRenderers.alertTag,
  dotTag: metadataRenderers.dotTag,
  file: metadataRenderers.file,
  folder: metadataRenderers.folder,
} as const

export type CardPropertyType = keyof typeof cardPropertyRenderers

interface CardMetadataProps {
  metadata: CardMetadataType
}

export function CardMetadata({ metadata }: CardMetadataProps) {
  const { type, value } = metadata.property

  const renderer = cardPropertyRenderers[type as CardPropertyType]

  if (!renderer) {
    return (
      <div className="flex h-8 items-center gap-1.5 font-medium">
        {"icon" in metadata && (
          <Icon icon={metadata.icon} color="default" size="md" />
        )}
        <span>Unsupported property type: {type}</span>
      </div>
    )
  }

  const typedRenderer = renderer as (
    arg: Parameters<(typeof cardPropertyRenderers)[CardPropertyType]>[0],
    meta?: { visualization: "card" }
  ) => React.ReactNode

  return (
    <div className="flex h-8 items-center gap-1.5 font-medium">
      {"icon" in metadata && (
        <Icon icon={metadata.icon} color="default" size="md" />
      )}
      {typedRenderer(value, { visualization: "card" })}
    </div>
  )
}
