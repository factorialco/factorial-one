import { EmptyState } from "../../OneEmptyState/OneEmptyState"
import { IconType } from "../../../components/Utilities/Icon"

type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: "default" | "outline"
}

export type WidgetEmptyStateProps = {
  title: string
  description: string
  emoji?: string
  actions?: Action[]
}

export function WidgetEmptyState({
  title,
  description,
  emoji,
  actions,
}: WidgetEmptyStateProps) {
  if ((actions?.length ?? 0) > 2) {
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    )
  }

  return (
    <EmptyState
      title={title}
      description={description}
      icon={emoji ?? { type: "warning" }}
      actions={actions}
    />
  )
}
