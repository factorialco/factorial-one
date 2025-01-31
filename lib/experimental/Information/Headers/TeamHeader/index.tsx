import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {
  name: string
  description: string
  src?: string
} & Pick<
  BaseHeaderProps,
  "primaryAction" | "secondaryActions" | "otherActions" | "metadata" | "status"
>

export const TeamHeader = ({
  name,
  description,
  src,
  primaryAction,
  secondaryActions,
  otherActions,
  metadata,
  status,
}: Props) => {
  return (
    <BaseHeader
      title={name}
      description={description}
      avatar={{
        type: "team",
        name,
        src,
      }}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
      otherActions={otherActions}
      metadata={metadata}
      status={status}
    />
  )
}
