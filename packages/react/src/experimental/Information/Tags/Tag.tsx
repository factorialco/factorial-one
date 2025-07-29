import { ComponentProps, ReactNode } from "react"
import { AlertTag } from "./AlertTag"
import { BalanceTag } from "./BalanceTag"
import { CompanyTag } from "./CompanyTag"
import { DotTag, DotTagProps } from "./DotTag"
import { PersonTag } from "./PersonTag"
import { RawTag, RawTagProps } from "./RawTag"
import { StatusTag, StatusTagProps } from "./StatusTag"
import { TeamTag } from "./TeamTag"

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

export type TagVariant =
  | BaseTag<{ type: "dot" } & DotTagProps>
  | BaseTag<{ type: "person" } & PersonTagProps>
  | BaseTag<{ type: "team" } & TeamTagProps>
  | BaseTag<{ type: "company" } & CompanyTagProps>
  | BaseTag<{ type: "alert" } & AlertTagProps>
  | BaseTag<{ type: "status" } & StatusTagProps>
  | BaseTag<{ type: "balance" } & BalanceTagProps>
  | BaseTag<{ type: "raw" } & RawTagProps>

const tagComponent = (tag: TagVariant): ReactNode | undefined => {
  const { type } = tag

  if (type === "dot") return <DotTag {...tag} />
  if (type === "person") return <PersonTag {...tag} />
  if (type === "team") return <TeamTag {...tag} />
  if (type === "company") return <CompanyTag {...tag} />
  if (type === "alert") return <AlertTag {...tag} />
  if (type === "status") return <StatusTag {...tag} />
  if (type === "balance") return <BalanceTag {...tag} />
  if (type === "raw") return <RawTag {...tag} />

  return undefined
}

export const Tag = ({ tag }: { tag: TagVariant }): ReactNode => {
  const renderTag = tagComponent(tag)

  if (!renderTag) return "Invalid tag type"

  return renderTag
}
