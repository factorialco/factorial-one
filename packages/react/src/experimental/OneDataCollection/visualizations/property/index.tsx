import { Icon, IconType } from "@/components/Utilities/Icon"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/exports"
import { DotTag, NewColor } from "@/experimental/Information/Tags/DotTag"
import {
  StatusTag,
  StatusVariant,
  TagList,
  TagType,
} from "@/experimental/Information/Tags/exports"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { TagVariant } from "@/experimental/Information/Tags/Tag"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { PropertyDefinition } from "../../property-render"
import { VisualizationType } from "../../visualizations"
import {
  formatDateValue,
  isShowingPlaceholder,
  resolveValue,
} from "./property-utils.ts"
import { PersonCell } from "./types/person.tsx"

export interface WithPlaceholder {
  placeholder?: string
}

export interface TextValue extends WithPlaceholder {
  text: string | number | undefined
}

export interface NumberValue extends WithPlaceholder {
  number: number | undefined
}

export interface DateValue extends WithPlaceholder {
  date: Date | undefined
}

export interface AmountValue extends WithPlaceholder {
  amount: number | undefined
}

export type TextCellValue = string | number | undefined | TextValue
export type NumberCellValue = number | undefined | NumberValue
export type DateCellValue = Date | undefined | DateValue
export type AmountCellValue = number | undefined | AmountValue

export interface AvatarListValue {
  avatarList: AvatarVariant[]
  max?: number
}
export type AvatarListCellValue = AvatarListValue

export interface StatusValue {
  status: StatusVariant
  label: string
}
export type StatusCellValue = StatusValue

export interface CompanyValue {
  name: string
  src?: string
}
export type CompanyCellValue = CompanyValue

export interface TeamValue {
  name: string
  src?: string
}
export type TeamCellValue = TeamValue

export interface TagValue {
  label: string
  icon?: IconType
}
export type TagCellValue = TagValue

export interface DotTagValue {
  label: string
  color: NewColor
}
export type DotTagCellValue = DotTagValue

export interface TagListValue {
  tags: Array<Omit<TagVariant, "type">>
  max?: number
  type: TagType
}
export type TagListCellValue = TagListValue

export interface IconValue {
  icon: IconType
  label: string
}
export type IconCellValue = IconValue

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

/**
 * Renders a property value based on the renderer type.
 * @param renderer - The renderer type to use
 * @param args - The arguments to pass to the renderer
 * @returns The rendered property value
 */
export const propertyRenderers = {
  text: (args: TextCellValue) => {
    const value = resolveValue<string | number>(args, "text")
    const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "text")

    return (
      <span
        className={cn(
          "text-f1-foreground",
          shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
        )}
      >
        {value}
      </span>
    )
  },

  number: (args: NumberCellValue, meta: PropertyRendererMetadata<never>) => {
    const value = resolveValue<number>(args, "number")
    const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "number")

    return (
      <div
        className={cn(
          "text-f1-foreground",
          meta.visualization === "table" && "text-right",
          shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
        )}
      >
        {value}
      </div>
    )
  },
  date: (args: DateCellValue) => {
    const formattedDate = formatDateValue(args)

    const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "date")

    return (
      <div
        className={cn(
          "text-f1-foreground",
          shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
        )}
      >
        {formattedDate}
      </div>
    )
  },
  amount: (args: AmountCellValue, meta: PropertyRendererMetadata<never>) => {
    const value = resolveValue<number>(args, "amount")
    const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "amount")

    return (
      <div
        className={cn(
          "text-f1-foreground",
          meta.visualization === "table" && "text-right",
          shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
        )}
      >
        {value}
      </div>
    )
  },
  avatarList: (args: AvatarListCellValue) => (
    <AvatarList avatars={args.avatarList} size="xsmall" max={args.max} />
  ),
  status: (args: StatusCellValue) => (
    <StatusTag variant={args.status} text={args.label} />
  ),
  person: PersonCell,
  company: (args: CompanyCellValue) => (
    <div className="flex items-center gap-2">
      <Avatar
        avatar={{
          type: "company",
          name: args.name,
          src: args.src,
        }}
        size="xsmall"
      />
      <span className="text-f1-foreground">{args.name}</span>
    </div>
  ),
  team: (args: TeamCellValue) => (
    <div className="flex items-center gap-2">
      <Avatar
        avatar={{
          type: "team",
          name: args.name,
          src: args.src,
        }}
        size="xsmall"
      />
      <span className="text-f1-foreground">{args.name}</span>
    </div>
  ),
  tag: (args: TagCellValue) => <RawTag text={args.label} icon={args.icon} />,
  dotTag: (args: DotTagCellValue) => (
    <DotTag text={args.label} color={args.color} />
  ),
  tagList: (args: TagListCellValue) => (
    <TagList type={args.type} tags={args.tags as TagVariant[]} max={args.max} />
  ),
  icon: (args: IconCellValue) => (
    <div className="flex items-center gap-2">
      <Icon icon={args.icon} />
      <span className="text-f1-foreground">{args.label}</span>
    </div>
  ),
} as const satisfies Record<string, PropertyRenderer<never>>

/**
 * The type of renderer to use for a property.
 */
export type PropertyRendererType = keyof typeof propertyRenderers
