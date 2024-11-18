import {
  StatusTag,
  StatusVariant,
} from "@/experimental/Information/Tags/StatusTag"
import { ComponentProps } from "react"
import { BaseHeader } from "../BaseHeader"

type BaseHeaderProps = ComponentProps<typeof BaseHeader>

type Props = {
  status?: {
    label: string
    variant: StatusVariant
  }
} & Pick<
  BaseHeaderProps,
  "title" | "description" | "primaryAction" | "secondaryActions"
>

export const ResourceHeader = ({
  title,
  description,
  primaryAction,
  secondaryActions,
  status,
}: Props) => {
  return (
    <BaseHeader
      title={title}
      description={description}
      primaryAction={primaryAction}
      secondaryActions={secondaryActions}
      eyebrow={
        status && <StatusTag text={status.label} variant={status.variant} />
      }
    />
  )
}
