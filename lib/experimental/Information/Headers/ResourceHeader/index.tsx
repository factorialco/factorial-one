import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {} & Pick<
  BaseHeaderProps,
  | "title"
  | "description"
  | "primaryAction"
  | "secondaryActions"
  | "otherActions"
  | "metadata"
  | "status"
>

export const ResourceHeader = ({
  title,
  description,
  primaryAction,
  secondaryActions,
  otherActions,
  status,
  metadata,
}: Props) => {
  return (
    <BaseHeader
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
      otherActions={otherActions}
      status={status}
      metadata={metadata}
    />
  )
}
