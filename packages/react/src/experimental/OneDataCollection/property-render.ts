import { ReactNode } from "react"
import { VisualizationType } from "./visualizations"
import {
  PropertyRendererMetadata,
  propertyRenderers,
} from "./visualizations/property"

/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
export type RendererDefinition = {
  [K in keyof typeof propertyRenderers]: {
    type: K
    value: Parameters<(typeof propertyRenderers)[K]>[0]
  }
}[keyof typeof propertyRenderers]

export type PropertyDefinition<T> = {
  label: string

  /**
   * Optional tooltip text. When provided, displays an info icon next to the header content
   * that shows this text in a tooltip when hovered.
   */
  info?: string

  /**
   * Function that extracts and formats the value from an item.
   * Should return an object matching the expected args for the specified renderer type.
   *
   * Example usage:
   * {
   *   render: (item) => ({
   *     type: "avatar",
   *     value: {
   *       type: "person",
   *       firstName: item.firstName,
   *       lastName: item.lastName,
   *     }
   *   })
   * }
   */
  render: (item: T) => RendererDefinition | string | number | undefined
}

/**
 * Renders a value for a given item and property definition.
 * Used by both table and card visualizations to ensure consistent rendering.
 */
const renderIsRendererDefinition = (
  renderDef: RendererDefinition | string | number | undefined
): renderDef is RendererDefinition => {
  return renderDef !== undefined && typeof renderDef === "object"
}
export const renderProperty = <RecordType>(
  item: RecordType,
  property: PropertyDefinition<RecordType>,
  visualization: VisualizationType
): ReactNode => {
  const renderDefinition = property.render(item)

  const { type, value } = renderIsRendererDefinition(renderDefinition)
    ? renderDefinition
    : ({
        type: "text" as const,
        value: renderDefinition ?? "-",
      } satisfies RendererDefinition)

  // Type assertion to ensure the renderer function is typed correctly as typescript can't infer the type correctly
  const renderer = propertyRenderers[type] as (
    arg: Parameters<(typeof propertyRenderers)[typeof type]>[0],
    meta: PropertyRendererMetadata<RecordType>
  ) => ReactNode

  if (!renderer) {
    return `[Invalid ${type} renderer]`
  }

  if (value === undefined) {
    return "-"
  }

  return renderer(value, {
    visualization,
    property,
  })
}
