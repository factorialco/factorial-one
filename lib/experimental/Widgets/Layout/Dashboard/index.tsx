import { Blend, withSkeleton } from "@/lib/skeleton"
import {
  Children,
  ComponentProps,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import { Masonry } from "react-masonry"
import { Widget } from "../../Widget"

type DashboardProps = {
  children?: ReactNode[]
}

const DashboardComponent = forwardRef<HTMLDivElement, DashboardProps>(
  ({ children }, ref) => {
    const [columns, setColumns] = useState<number | undefined>()

    const arrayChildren = Children.toArray(children)

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleResize = () => {
        const width = containerRef.current?.offsetWidth
        if (width) setColumns(Math.floor(width / 340) || 1)
      }

      handleResize()

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [setColumns])

    return (
      <div ref={ref} className="overflow-hidden">
        {columns === 1 ? (
          <div className="flex flex-col gap-4">{arrayChildren}</div>
        ) : (
          columns &&
          columns > 1 && (
            <div className="relative -mr-4" ref={containerRef}>
              <Masonry key={columns}>
                {arrayChildren.map((child) => (
                  <div
                    style={{
                      width: `${Math.floor((1 / columns) * 10000) / 100}%`,
                    }}
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
