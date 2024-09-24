import { WidgetContainer } from "@/experimental/exports"
import AreaGraph from "@/icons/AreaGraph"
import Cash from "@/icons/Cash"
import { ExoticComponent, forwardRef } from "react"

type Icon = "area-graph" | "cash"

export interface EmptyStateType {
  title: string
  content: string
  icon: Icon
  buttonLabel?: string
  promote?: boolean
}

const Icons: Record<Icon, ExoticComponent<{ className: string }>> = {
  "area-graph": AreaGraph,
  cash: Cash,
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateType>(
  ({ title, content, icon, buttonLabel, promote = false }, ref) => {
    const Icon = Icons[icon]

    return (
      <WidgetContainer
        header={{
          title,
        }}
        action={
          buttonLabel
            ? {
                label: buttonLabel,
                variant: promote ? "promote" : "default",
              }
            : undefined
        }
        ref={ref}
      >
        <div className="relative flex flex-1">
          <Icon className="absolute -top-8 right-0 z-10" />
          <p className="flex w-3/4 text-xl font-semibold">{content}</p>
        </div>
      </WidgetContainer>
    )
  }
)
