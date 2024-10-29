import { Widget } from "@/experimental/exports"
import { MoneyBag } from "@/icons/app"
import AreaGraph from "@/icons/app/AreaGraph"
import { ExoticComponent, forwardRef } from "react"

type Icon = "area-graph" | "cash"

export interface Props {
  title: string
  content: string
  icon: Icon
  buttonLabel?: string
  buttonAction?: () => void
  promote?: boolean
}

const Icons: Record<Icon, ExoticComponent<{ className: string }>> = {
  "area-graph": AreaGraph,
  cash: MoneyBag,
}

export const WidgetEmptyState = forwardRef<HTMLDivElement, Props>(
  function WidgetEmptyState(
    { title, content, icon, buttonLabel, buttonAction, promote = false },
    ref
  ) {
    const Icon = Icons[icon]

    return (
      <Widget
        header={{
          title,
        }}
        action={
          buttonLabel
            ? {
                label: buttonLabel,
                variant: promote ? "promote" : "default",
                onClick: buttonAction,
              }
            : undefined
        }
        ref={ref}
      >
        <div className="relative flex min-h-28 flex-1">
          <Icon className="absolute -top-8 right-0 z-10" />
          <p className="flex w-3/4 text-xl font-semibold">{content}</p>
        </div>
      </Widget>
    )
  }
)
