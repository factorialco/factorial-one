import { Button, ButtonProps } from "@/components/Actions/Button"
import { Cross } from "@/icons/app"
import { Card } from "@/ui/card"
import { forwardRef, ReactNode } from "react"

type Action = Pick<ButtonProps, "label" | "onClick" | "disabled">

type ToolBarProps = {
  actions: {
    primary: Action
    secondary: Action
  }
  children: ReactNode
  onClose?: () => void
}

const OneToolBar = forwardRef<HTMLDivElement, ToolBarProps>(
  ({ children, actions, onClose }, ref) => {
    return (
      <div
        className="fixed inset-x-0 z-10 mx-auto"
        style={{
          bottom: `calc(120px + env(safe-area-inset-bottom))`,
          maxWidth: "600px",
        }}
        ref={ref}
      >
        <Card className="flex flex-row items-center justify-between gap-4 border border-solid border-f1-border shadow-lg">
          <div className="rounded-sm bg-f1-background-secondary px-3 py-2">
            {children}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" {...actions.secondary} />
            <Button variant="default" {...actions.primary} />
            <Button
              variant="ghost"
              size="md"
              hideLabel
              label="close"
              onClick={onClose}
              icon={Cross}
            />
          </div>
        </Card>
      </div>
    )
  }
)

OneToolBar.displayName = "Toolbar"

export { OneToolBar as ToolBar }
