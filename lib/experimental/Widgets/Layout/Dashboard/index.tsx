import { Blend, withSkeleton } from "@/lib/skeleton"
import {
  ComponentProps,
  forwardRef,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react"
import Masonry from "react-responsive-masonry"
import { useResizeObserver } from "usehooks-ts"
import { Widget } from "../../Widget"

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

    const childrenArray = children?.length ? children : [children]

    return (
      <div ref={ref}>
        <div ref={containerRef}>
          {columns === 1 ? (
            <div className="flex flex-col gap-4">{childrenArray}</div>
          ) : (
            columns &&
            columns > 1 && (
              <Masonry gutter="16px" columnsCount={columns}>
                {childrenArray}
              </Masonry>
            )
          )}
        </div>
      </div>
    )
  }
)

const skeletonHeights: Array<ComponentProps<typeof Widget.Skeleton>["height"]> =
  ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"]

export const Dashboard = withSkeleton(DashboardComponent, () => (
  <Blend>
    <DashboardComponent>
      {skeletonHeights.map((height, i) => (
        <Widget.Skeleton height={height} key={i} />
      ))}
    </DashboardComponent>
  </Blend>
))
