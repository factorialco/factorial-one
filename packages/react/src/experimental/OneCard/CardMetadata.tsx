import { Icon } from "@/components/Utilities/Icon"
import {
  RendererDefinition,
  renderProperty,
} from "@/experimental/OneDataCollection/property-render"
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

  const mockItem = {}
  const propertyDefinition = {
    label: "",
    render: (): RendererDefinition =>
      ({
        type,
        value,
      }) as RendererDefinition,
  }

  const renderedValue = renderProperty(mockItem, propertyDefinition, "card")

  return (
    <div className="flex h-8 items-center gap-1.5 font-medium">
      <Icon icon={metadata.icon} color="default" size="md" />
      {renderedValue}
    </div>
  )
}
