import { IconType } from "@/components/Utilities/Icon"
import {
  propertyRenderers,
  PropertyRendererType,
} from "@/experimental/OneDataCollection/visualizations/property"

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
export type CardMetadataProperty = {
  [K in PropertyRendererType]: {
    type: K
    value: Parameters<(typeof propertyRenderers)[K]>[0]
  }
}[PropertyRendererType]

export type CardMetadata = {
  icon: IconType
  property: CardMetadataProperty
}
