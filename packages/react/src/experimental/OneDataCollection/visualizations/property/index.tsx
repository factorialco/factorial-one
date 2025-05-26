import { IconType } from "@/components/Utilities/Icon"
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
import { extractValue, hasPlaceholder } from "./property-utils.ts"

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
  text: (
    args:
      | { text: string | number | undefined; placeholder?: string }
      | string
      | number
      | undefined
  ) => {
    const value = extractValue<string | number>(args)
    const isPlaceholder = hasPlaceholder(args)

    return (
      <span
        className={cn(
          "text-f1-foreground",
          isPlaceholder && "text-f1-foreground-secondary"
        )}
      >
        {value}
      </span>
    )
  },
  number: (
    args:
      | { number: number | undefined; placeholder?: string }
      | number
      | undefined,
    meta: PropertyRendererMetadata<never>
  ) => {
    const value = extractValue<number>(args)
    const isPlaceholder = hasPlaceholder(args)

    return (
      <div
        className={cn(
          "text-f1-foreground",
          meta.visualization === "table" && "text-right",
          isPlaceholder && "text-f1-foreground-secondary"
        )}
      >
        {value}
      </div>
    )
  },
  date: (
    args: { date: Date | undefined; placeholder?: string } | Date | undefined
  ) => {
    const value = extractValue<Date>(args)
    const isPlaceholder = hasPlaceholder(args)

    return (
      <div
        className={cn(
          "text-f1-foreground",
          isPlaceholder && "text-f1-foreground-secondary"
        )}
      >
        {value?.toLocaleDateString()}
      </div>
    )
  },
  amount: (
    args:
      | { amount: number | undefined; placeholder?: string }
      | number
      | undefined,
    meta: PropertyRendererMetadata<never>
  ) => {
    const value = extractValue<number>(args)
    const isPlaceholder = hasPlaceholder(args)

    return (
      <div
        className={cn(
          "text-f1-foreground",
          meta.visualization === "table" && "text-right",
          isPlaceholder && "text-f1-foreground-secondary"
        )}
      >
        {value}
      </div>
    )
  },
  avatarList: (args: { avatarList: AvatarVariant[]; max?: number }) => (
    <AvatarList avatars={args.avatarList} size="xsmall" max={args.max} />
  ),
  status: (args: { status: StatusVariant; label: string }) => (
    <StatusTag variant={args.status} text={args.label} />
  ),
  person: (args: { firstName: string; lastName: string; src?: string }) => (
    <div className="flex items-center gap-2">
      <Avatar
        avatar={{
          type: "person",
          firstName: args.firstName,
          lastName: args.lastName,
          src: args.src,
        }}
        size="xsmall"
      />
      <span className="text-f1-foreground">
        {args.firstName} {args.lastName}
      </span>
    </div>
  ),
  company: (args: { name: string; src?: string }) => (
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
  team: (args: { name: string; src?: string }) => (
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
  tag: (args: { label: string; icon?: IconType }) => (
    <RawTag text={args.label} icon={args.icon} />
  ),
  dotTag: (args: { label: string; color: NewColor }) => (
    <DotTag text={args.label} color={args.color} />
  ),
  tagList: (args: {
    tags: Array<Omit<TagVariant, "type">>
    max?: number
    type: TagType
  }) => (
    <TagList type={args.type} tags={args.tags as TagVariant[]} max={args.max} />
  ),
} as const satisfies Record<string, PropertyRenderer<never>>

/**
 * The type of renderer to use for a property.
 */
export type PropertyRendererType = keyof typeof propertyRenderers
