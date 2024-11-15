import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {
  name: string
  description: string
  src?: string
} & Pick<BaseHeaderProps, "primaryAction" | "secondaryActions">

export const CompanyHeader = ({
  name,
  description,
  src,
  primaryAction,
  secondaryActions,
}: Props) => {
  return (
    <BaseHeader
      title={name}
      description={description}
      avatar={{
        type: "company",
        name,
        src,
      }}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
    />
  )
}
