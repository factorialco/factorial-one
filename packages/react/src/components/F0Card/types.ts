import { IconType } from "@/components/Utilities/Icon"
import { propertyRenderers } from "@/experimental/OneDataCollection/visualizations/property"
import { CardPropertyType } from "./components/CardMetadata"

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
export type CardMetadataProperty = {
  [K in CardPropertyType]: {
    type: K
    value: Parameters<(typeof propertyRenderers)[K]>[0]
  }
}[CardPropertyType]

export type CardMetadata =
  | {
      icon: IconType
      property: Exclude<CardMetadataProperty, { type: "file" }>
    }
  | {
      property: Extract<CardMetadataProperty, { type: "file" }>
    }
