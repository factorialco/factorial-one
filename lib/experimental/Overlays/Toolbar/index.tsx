import { forwardRef, ReactNode } from "react"

type ToolBarProps = {
  children: ReactNode
}

const OneToolBar = forwardRef<HTMLDivElement, ToolBarProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref}>
        <div>Hey</div>
        {children}
      </div>
    )
  }
)

OneToolBar.displayName = "Toolbar"

export { OneToolBar as ToolBar }
