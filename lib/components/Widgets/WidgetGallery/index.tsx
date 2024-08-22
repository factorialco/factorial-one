import { Blend, withSkeleton } from "@/lib/skeleton"
import { WidgetContainer } from "../WidgetContainer"

type GalleryProps = {
  items?: GalleryItemProps[]
}

type GalleryItemProps = {
  component: React.ReactNode
  fullWidth?: boolean
}

const GalleryItem: React.FC<GalleryItemProps> = ({ component, fullWidth }) => (
  <div
    className={`${fullWidth ? "col-span-full" : "col-span-full sm:col-span-1"}`}
  >
    {component}
  </div>
)

function GalleryComponent({ items = [] }: GalleryProps) {
  return (
    <div className="mx-auto w-full p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item: GalleryItemProps, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export const Gallery = withSkeleton(GalleryComponent, () => (
  <Blend>
    <GalleryComponent
      items={[
        ...Array(6)
          .fill(null)
          .map(() => ({
            component: <WidgetContainer.Skeleton />,
          })),
      ]}
    />
  </Blend>
))
