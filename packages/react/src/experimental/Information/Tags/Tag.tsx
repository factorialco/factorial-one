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

export type TagVariant =
  | ({ type: "dot" } & DotTagProps & WithTooltipDescription)
  | ({ type: "person" } & PersonTagProps & WithTooltipDescription)
  | ({ type: "team" } & TeamTagProps & WithTooltipDescription)
  | ({ type: "company" } & CompanyTagProps & WithTooltipDescription)
  | ({
      type: "alert"
      level: "info" | "warning" | "critical"
      text: string
      onClick?: () => void
    } & AlertTagProps &
      WithTooltipDescription)
  | ({ type: "status" } & StatusTagProps & WithTooltipDescription)
  | ({
      type: "balance"
      status: "positive" | "neutral" | "negative"
      text: string
      onClick?: () => void
    } & BalanceTagProps &
      WithTooltipDescription)

export const Tag = ({ tag }: { tag: TagVariant }): ReactNode => {
  switch (tag.type) {
    case "dot":
      return "color" in tag ? (
        <DotTag text={tag.text} color={tag.color} />
      ) : (
        <DotTag text={tag.text} customColor={tag.customColor} />
      )
    case "person":
      return (
        <PersonTag
          name={tag.name}
          avatarUrl={tag.avatarUrl}
          onClick={tag.onClick}
        />
      )
    case "team":
      return (
        <TeamTag
          teamName={tag.teamName}
          teamImageUrl={tag.teamImageUrl}
          onClick={tag.onClick}
        />
      )
    case "company":
      return (
        <CompanyTag
          companyName={tag.companyName}
          companyImageUrl={tag.companyImageUrl}
          onClick={tag.onClick}
        />
      )
    case "alert":
      return <AlertTag level={tag.level} text={tag.text} />
    case "status":
      return (
        <StatusTag
          variant={tag.variant}
          text={tag.text}
          additionalAccesibleText={tag.additionalAccesibleText}
        />
      )
    case "balance":
      return <BalanceTag status={tag.status} text={tag.text} />
  }
}
