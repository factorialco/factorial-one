import { Blend, withSkeleton } from "@/lib/skeleton"
import {
  ComponentProps,
  forwardRef,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react"
import Layout from "react-masonry-list"
import { useResizeObserver } from "usehooks-ts"
import { WidgetContainer } from "../WidgetContainer"

type DashboardProps = {
  children?: ReactNode[]
}

type Size = {
  width?: number
  height?: number
}

const DashboardComponent = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    const [columns, setColumns] = useState<number | undefined>()

    const onResize = useCallback(
      ({ width }: Size) => {
        if (width) {
          setColumns(Math.floor(width / 340) || 1)
        }
      },
      [setColumns]
    )

    const containerRef = useRef<HTMLDivElement>(null)
    useResizeObserver({ ref: containerRef, onResize })

    return (
      <div ref={ref}>
        <div ref={containerRef}>
          {columns === 1 ? (
            <div className="flex flex-col gap-4">{children}</div>
          ) : (
            columns &&
            columns > 1 && (
              <Layout
                key={columns}
                colCount={columns}
                items={children}
                gap={16}
              />
            )
          )}
        </div>
      </div>
    )
  }
)

const skeletonHeights: Array<
  ComponentProps<typeof WidgetContainer.Skeleton>["height"]
> = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"]

export const Dashboard = withSkeleton(DashboardComponent, () => (
  <Blend>
    <DashboardComponent>
      {skeletonHeights.map((height, i) => (
        <WidgetContainer.Skeleton height={height} key={i} />
      ))}
    </DashboardComponent>
  </Blend>
))
