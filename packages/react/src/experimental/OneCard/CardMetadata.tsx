import { Icon } from "@/components/Utilities/Icon"
import { propertyRenderers } from "@/experimental/OneDataCollection/visualizations/property"
import { CardMetadata as CardMetadataType } from "./types"

const cardPropertyRenderers = {
  text: propertyRenderers.text,
  number: propertyRenderers.number,
  date: propertyRenderers.date,
  amount: propertyRenderers.amount,
  person: propertyRenderers.person,
  company: propertyRenderers.company,
  team: propertyRenderers.team,
  status: propertyRenderers.status,
  tag: propertyRenderers.tag,
  avatarList: propertyRenderers.avatarList,
  tagList: propertyRenderers.tagList,
  alertTag: propertyRenderers.alertTag,
  dotTag: propertyRenderers.dotTag,
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
        <Icon icon={metadata.icon} color="default" size="md" />
        <span>Unknown property type: {type}</span>
      </div>
    )
  }

  const propertyMeta = {
    visualization: "card" as const,
    property: {
      label: "", // Cards don't need property labels
      render: () => value,
    },
  }

  return (
    <div className="flex h-8 items-center gap-1.5 font-medium">
      <Icon icon={metadata.icon} color="default" size="md" />
      {(renderer as any)(value, propertyMeta)}
    </div>
  )
}
