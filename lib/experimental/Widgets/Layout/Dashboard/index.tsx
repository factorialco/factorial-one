import { Blend, withSkeleton } from "@/lib/skeleton"
import {
  Children,
  ComponentProps,
  forwardRef,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react"
import { Masonry } from "react-masonry"
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

    const arrayChildren = Children.toArray(children)

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
        <div ref={containerRef} className="overflow-hidden">
          {columns === 1 ? (
            <div className="flex flex-col gap-4">{arrayChildren}</div>
          ) : (
            columns &&
            columns > 1 && (
              <div className="-mr-4">
                <Masonry key={columns}>
                  {arrayChildren.map((child) => (
                    <div
                      style={{ width: `${(1 / columns) * 100}%` }}
                      className="pb-4 pr-4"
                    >
                      {child}
                    </div>
                  ))}
                </Masonry>
              </div>
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
