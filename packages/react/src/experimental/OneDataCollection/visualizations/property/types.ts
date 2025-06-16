import { ReactNode } from "react"
import { PropertyDefinition } from "../../property-render"
import { VisualizationType } from "../../visualizations"

/**
 * The renderer function to use for a property.
 */
export type PropertyRenderer<T extends string | number | object> = (
  args: T,
  meta: PropertyRendererMetadata<T>
) => ReactNode

export type PropertyRendererMetadata<T> = {
  visualization: VisualizationType
  property: PropertyDefinition<T>
}
