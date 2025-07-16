import { Icon } from "@/components/Utilities/Icon"
import { propertyRenderers } from "@/experimental/OneDataCollection/visualizations/property"
import { CardMetadata as CardMetadataType } from "./types"

interface CardMetadataProps {
  metadata: CardMetadataType
}

export function CardMetadata({ metadata }: CardMetadataProps) {
  const { type, value } = metadata.property
  const renderer = propertyRenderers[type]

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
