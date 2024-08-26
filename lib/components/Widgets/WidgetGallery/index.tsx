import { Blend, withSkeleton } from "@/lib/skeleton"
import React from "react"
import { WidgetContainer } from "../WidgetContainer"

type GalleryProps = {
  items?: GalleryItemProps[]
  children?: React.ReactNode
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

const GalleryComponent: React.FC<GalleryProps> = ({ children }) => {
  const items = React.Children.map(children, (child) => {
    const isFullWidth =
      React.isValidElement(child) &&
      child.props["data-full-width"] !== undefined
    return { component: child, fullWidth: isFullWidth }
  })

  return (
    <div className="mx-auto w-full p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items?.map((item: GalleryItemProps, index: number) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export const Gallery = withSkeleton(GalleryComponent, () => (
  <Blend>
    <GalleryComponent>
      {Array.from({ length: 6 }, (_, index) => (
        <WidgetContainer.Skeleton key={index} />
      ))}
    </GalleryComponent>
  </Blend>
))
