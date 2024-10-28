import { useTextFormatEnforcer } from "@/lib/text"
import { forwardRef, PropsWithChildren } from "react"

type Props = PropsWithChildren & {
  title?: string
}

export const WidgetSection = forwardRef<HTMLDivElement, Props>(
  ({ title, children }, ref) => {
    useTextFormatEnforcer(title, { disallowEmpty: true })

    return (
      <div ref={ref} className="flex flex-col gap-2">
        <h4 className="text-base font-medium text-f1-foreground-secondary">
          {title}
        </h4>
        {children}
      </div>
    )
  }
)

WidgetSection.displayName = "WidgetSection"
