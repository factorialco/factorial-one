import { useImageContext } from "@/lib/imageHandler"
import { forwardRef, ImgHTMLAttributes } from "react"

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export type SrcProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes"
>

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { src } = useImageContext()

  if (!src) return <img ref={ref} {...props} />
  const extraProps = src(props)

  return <img ref={ref} {...props} {...extraProps} />
})
