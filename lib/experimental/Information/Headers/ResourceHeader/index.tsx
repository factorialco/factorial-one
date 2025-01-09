import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {} & Pick<
  BaseHeaderProps,
  | "title"
  | "description"
  | "primaryAction"
  | "secondaryActions"
  | "metadata"
  | "status"
>

export const ResourceHeader = ({
  title,
  description,
  primaryAction,
  secondaryActions,
  status,
  metadata,
}: Props) => {
  return (
    <BaseHeader
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
      status={status}
      metadata={metadata}
    />
  )
}
