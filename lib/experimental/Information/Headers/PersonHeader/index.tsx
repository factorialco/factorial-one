import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {
  firstName: string
  lastName: string
  description: string
  src?: string
} & Pick<BaseHeaderProps, "primaryAction" | "secondaryActions">

export const PersonHeader = ({
  firstName,
  lastName,
  description,
  src,
  primaryAction,
  secondaryActions,
}: Props) => {
  return (
    <BaseHeader
      title={`${firstName} ${lastName}`}
      description={description}
      avatar={{
        type: "person",
        firstName,
        lastName,
        src,
      }}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
    />
  )
}
