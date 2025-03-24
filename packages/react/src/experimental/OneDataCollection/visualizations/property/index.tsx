import { IconType } from "@/components/Utilities/Icon"
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/exports"
import {
  StatusTag,
  StatusVariant,
} from "@/experimental/Information/Tags/exports"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
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
  text: (text: string | number) => text,
  number: (number: number) => <div className="justify-end">{number}</div>,
  date: (date: Date) => (
    <div className="justify-end">{date.toLocaleDateString()}</div>
  ),
  amount: (amount: number) => <div className="justify-end">{amount}</div>,
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
      <span className="text-sm font-medium">
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
      <span className="text-sm font-medium">{args.name}</span>
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
      <span className="text-sm font-medium">{args.name}</span>
    </div>
  ),
  tag: (args: { label: string; icon?: IconType }) => (
    <RawTag text={args.label} icon={args.icon} />
  ),
} as const satisfies Record<string, PropertyRenderer<never>>

/**
 * The type of renderer to use for a property.
 */
export type PropertyRendererType = keyof typeof propertyRenderers
