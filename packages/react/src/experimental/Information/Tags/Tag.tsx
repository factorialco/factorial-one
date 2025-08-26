import { ComponentProps, ReactNode } from "react"
import { TagAlert } from "./TagAlert"
import { TagBalance } from "./TagBalance"
import { TagCompany } from "./TagCompany"
import { TagDot, TagDotProps } from "./TagDot"
import { TagPerson } from "./TagPerson"
import { TagRaw, TagRawProps } from "./TagRaw"
import { TagStatus, TagStatusProps } from "./TagStatus"
import { TagTeam } from "./TagTeam"

type PersonTagProps = ComponentProps<typeof TagPerson>
type TeamTagProps = ComponentProps<typeof TagTeam>
type CompanyTagProps = ComponentProps<typeof TagCompany>
type AlertTagProps = ComponentProps<typeof TagAlert>
type BalanceTagProps = ComponentProps<typeof TagBalance>

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
  | BaseTag<{ type: "dot" } & TagDotProps>
  | BaseTag<{ type: "person" } & PersonTagProps>
  | BaseTag<{ type: "team" } & TeamTagProps>
  | BaseTag<{ type: "company" } & CompanyTagProps>
  | BaseTag<{ type: "alert" } & AlertTagProps>
  | BaseTag<{ type: "status" } & TagStatusProps>
  | BaseTag<{ type: "balance" } & BalanceTagProps>
  | BaseTag<{ type: "raw" } & TagRawProps>

const tagComponent = (tag: TagVariant): ReactNode | undefined => {
  const { type } = tag

  if (type === "dot") return <TagDot {...tag} />
  if (type === "person") return <TagPerson {...tag} />
  if (type === "team") return <TagTeam {...tag} />
  if (type === "company") return <TagCompany {...tag} />
  if (type === "alert") return <TagAlert {...tag} />
  if (type === "status") return <TagStatus {...tag} />
  if (type === "balance") return <TagBalance {...tag} />
  if (type === "raw") return <TagRaw {...tag} />

  return undefined
}

export const Tag = ({ tag }: { tag: TagVariant }): ReactNode => {
  const renderTag = tagComponent(tag)

  if (!renderTag) return "Invalid tag type"

  return renderTag
}
