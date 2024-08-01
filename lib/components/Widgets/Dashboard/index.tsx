import { forwardRef, ReactNode, useCallback, useRef, useState } from "react"
import Layout from "react-masonry-list"
import { useResizeObserver } from "usehooks-ts"

type DashboardProps = {
  children?: ReactNode[]
}

type Size = {
  width?: number
  height?: number
}

export const Dashboard = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    const [columns, setColumns] = useState<number | undefined>()

    const onResize = useCallback(
      ({ width }: Size) => {
        if (width) {
          setColumns(Math.floor(width / 300))
        }
      },
      [setColumns]
    )

    const containerRef = useRef<HTMLDivElement>(null)
    useResizeObserver({ ref: containerRef, onResize })

    return (
      <div ref={ref}>
        <div ref={containerRef}>
          {columns && (
            <Layout
              key={columns}
              colCount={columns}
              items={children}
              gap={16}
            />
          )}
        </div>
      </div>
    )
  }
)
