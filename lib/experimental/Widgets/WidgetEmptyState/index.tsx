import { IconType } from "@/components/Utilities/Icon"
import { Widget } from "@/experimental/exports"
import { forwardRef } from "react"

export interface Props {
  title: string
  content: string
  icon: IconType
  buttonLabel?: string
  buttonAction?: () => void
  promote?: boolean
}

export const WidgetEmptyState = forwardRef<HTMLDivElement, Props>(
  function WidgetEmptyState(
    { title, content, icon, buttonLabel, buttonAction, promote = false },
    ref
  ) {
    const Icon = icon

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
          <Icon className="absolute right-0 top-0 z-10 max-h-full max-w-full text-f1-background-promote" />
          <p className="flex w-3/4 text-xl font-semibold">{content}</p>
        </div>
      </Widget>
    )
  }
)
