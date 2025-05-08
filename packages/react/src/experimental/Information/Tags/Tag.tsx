import { ComponentProps, ReactNode } from "react"
import { AlertTag } from "./AlertTag"
import { BalanceTag } from "./BalanceTag"
import { CompanyTag } from "./CompanyTag"
import { DotTag } from "./DotTag"
import { PersonTag } from "./PersonTag"
import { StatusTag, StatusTagProps } from "./StatusTag"
import { TeamTag } from "./TeamTag"

type DotTagProps = ComponentProps<typeof DotTag>
type PersonTagProps = ComponentProps<typeof PersonTag>
type TeamTagProps = ComponentProps<typeof TeamTag>
type CompanyTagProps = ComponentProps<typeof CompanyTag>
type AlertTagProps = ComponentProps<typeof AlertTag>
type BalanceTagProps = ComponentProps<typeof BalanceTag>

// Base interface for optional tooltip description
interface WithTooltipDescription {
  /**
   * Optional description to show in the tooltip
   */
  description?: string
}

// Base type for all tag variants
type BaseTag<T extends { type: string }> = T & WithTooltipDescription

type DotTagVariant = BaseTag<{ type: "dot" } & DotTagProps>
type PersonTagVariant = BaseTag<{ type: "person" } & PersonTagProps>
type TeamTagVariant = BaseTag<{ type: "team" } & TeamTagProps>
type CompanyTagVariant = BaseTag<{ type: "company" } & CompanyTagProps>
type AlertTagVariant = BaseTag<{ type: "alert" } & AlertTagProps>
type StatusTagVariant = BaseTag<{ type: "status" } & StatusTagProps>
type BalanceTagVariant = BaseTag<{ type: "balance" } & BalanceTagProps>

export type TagVariant =
  | DotTagVariant
  | PersonTagVariant
  | TeamTagVariant
  | CompanyTagVariant
  | AlertTagVariant
  | StatusTagVariant
  | BalanceTagVariant

const tagComponents = {
  dot: (tag: Extract<TagVariant, { type: "dot" }>) => <DotTag {...tag} />,
  person: (tag: Extract<TagVariant, { type: "person" }>) => (
    <PersonTag {...tag} />
  ),
  team: (tag: Extract<TagVariant, { type: "team" }>) => <TeamTag {...tag} />,
  company: (tag: Extract<TagVariant, { type: "company" }>) => (
    <CompanyTag {...tag} />
  ),
  alert: (tag: Extract<TagVariant, { type: "alert" }>) => <AlertTag {...tag} />,
  status: (tag: Extract<TagVariant, { type: "status" }>) => (
    <StatusTag {...tag} />
  ),
  balance: (tag: Extract<TagVariant, { type: "balance" }>) => (
    <BalanceTag {...tag} />
  ),
} as const

export const Tag = ({ tag }: { tag: TagVariant }): ReactNode => {
  const renderTag = tagComponents[tag.type]

  if (!renderTag) return "Invalid tag type"

  return renderTag(tag as any)
}
