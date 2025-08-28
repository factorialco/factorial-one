import { ReactNode } from "react"
import { MetadataVisualizationType } from "./types.ts"
import { AlertTagCell } from "./types/alertTag.tsx"
import { AmountCell } from "./types/amount.tsx"
import { AvatarListCell } from "./types/avatarList.tsx"
import { CompanyCell } from "./types/company.tsx"
import { DateCell } from "./types/date.tsx"
import { DotTagCell } from "./types/dotTag.tsx"
import { FileCell } from "./types/file.tsx"
import { FolderCell } from "./types/folder.tsx"
import { IconCell } from "./types/icon.tsx"
import { NumberCell } from "./types/number.tsx"
import { PersonCell } from "./types/person.tsx"
import { StatusCell } from "./types/status.tsx"
import { TagCell } from "./types/tag.tsx"
import { TagListCell } from "./types/tagList.tsx"
import { TeamCell } from "./types/team.tsx"
import { TextCell } from "./types/text.tsx"

export const metadataRenderers = {
  text: TextCell,
  number: NumberCell,
  date: DateCell,
  amount: AmountCell,
  avatarList: AvatarListCell,
  status: StatusCell,
  alertTag: AlertTagCell,
  person: PersonCell,
  company: CompanyCell,
  team: TeamCell,
  tag: TagCell,
  dotTag: DotTagCell,
  tagList: TagListCell,
  icon: IconCell,
  file: FileCell,
  folder: FolderCell,
} as const satisfies Record<string, MetadataRenderer<never>>

/**
 * The type of renderer to use for a property.
 */
export type MetadataRendererType = keyof typeof metadataRenderers

/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
export type MetadataRendererDefinition = {
  [K in keyof typeof metadataRenderers]: {
    type: K
    value: Parameters<(typeof metadataRenderers)[K]>[0]
  }
}[keyof typeof metadataRenderers]

export type MetadataDefinition = {
  render: MetadataRendererDefinition | string | number | undefined
}

export type PropertyRendererContext = {
  visualization: MetadataVisualizationType
}

/**
 * The renderer function to use for a property.
 */
export type MetadataRenderer<T> = (
  def: MetadataRendererDefinition<T>,
  context: PropertyRendererContext,
  undefinedValue?: string
) => ReactNode

/**
 * Renders a value for a given item and property definition.
 * Used by both table and card visualizations to ensure consistent rendering.
 */
const renderIsRendererDefinition = (
  renderDef: MetadataRendererDefinition | string | number | undefined
): renderDef is MetadataRendererDefinition => {
  return renderDef !== undefined && typeof renderDef === "object"
}

/**
 * Renders the value of a metadata property
 * @param args
 * @param context
 * @returns
 */

export const metadataRenderer: MetadataRenderer<never> = (
  def,
  context,
  undefinedValue = ""
): ReactNode => {
  const { type, value } = renderIsRendererDefinition(def)
    ? def
    : ({
        type: "text" as const,
        value: def ?? "-",
      } satisfies MetadataRendererDefinition)

  // Type assertion to ensure the renderer function is typed correctly as typescript can't infer the type correctly
  const renderer = metadataRenderers[type] as (
    arg: Parameters<(typeof metadataRenderers)[typeof type]>[0],
    context: PropertyRendererContext
  ) => ReactNode

  if (!renderer) {
    return `[Invalid ${type} renderer]`
  }

  if (value === undefined) {
    return undefinedValue
  }

  return renderer(value, {
    visualization: context.visualization,
  })
}
