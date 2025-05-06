import { IconType } from "@/components/Utilities/Icon"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/exports"
import { DotTag, NewColor } from "@/experimental/Information/Tags/DotTag"
import {
  DotTagItem,
  DotTagList,
} from "@/experimental/Information/Tags/DotTagList"
import {
  StatusTag,
  StatusVariant,
} from "@/experimental/Information/Tags/exports"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { cn } from "@/lib/utils"
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

/**
 * Renders a property value based on the renderer type.
 * @param renderer - The renderer type to use
 * @param args - The arguments to pass to the renderer
 * @returns The rendered property value
 */
export const propertyRenderers = {
  text: (text: string | number | undefined) => (
    <span className="text-f1-foreground">{text}</span>
  ),
  number: (
    number: number | undefined,
    meta: PropertyRendererMetadata<never>
  ) => (
    <div
      className={cn(
        "text-f1-foreground",
        meta.visualization === "table" && "text-right"
      )}
    >
      {number}
    </div>
  ),
  date: (date: Date | undefined) => (
    <div className="text-f1-foreground">{date?.toLocaleDateString()}</div>
  ),
  amount: (
    amount: number | undefined,
    meta: PropertyRendererMetadata<never>
  ) => (
    <div
      className={cn(
        "text-f1-foreground",
        meta.visualization === "table" && "text-right"
      )}
    >
      {amount}
    </div>
  ),
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
  dotTagList: (args: {
    tags: DotTagItem[]
    max?: number
    layout?: "fill" | "compact"
    remainingCount?: number
  }) => (
    <DotTagList
      tags={args.tags}
      max={args.max}
      layout={args.layout}
      remainingCount={args.remainingCount}
    />
  ),
} as const satisfies Record<string, PropertyRenderer<never>>

/**
 * The type of renderer to use for a property.
 */
export type PropertyRendererType = keyof typeof propertyRenderers
