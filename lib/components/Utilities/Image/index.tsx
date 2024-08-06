import { useImageContext } from "@/lib/imageHandler"
import { forwardRef, ImgHTMLAttributes } from "react"

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { src } = useImageContext()

  if (!src) return <img ref={ref} {...props} />
  const extraProps = src(props)

  return <img ref={ref} {...props} {...extraProps} />
})
