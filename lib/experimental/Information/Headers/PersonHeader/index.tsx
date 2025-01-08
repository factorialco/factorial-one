import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {
  firstName: string
  lastName: string
  description: string
  src?: string
} & Pick<
  BaseHeaderProps,
  "primaryAction" | "secondaryActions" | "metadata" | "status"
>

export const PersonHeader = ({
  firstName,
  lastName,
  description,
  src,
  primaryAction,
  secondaryActions,
  metadata,
  status,
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
      metadata={metadata}
      status={status}
    />
  )
}
