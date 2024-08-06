import type { ImageProps, SrcProps } from "@/components/Utilities/Image"
import { createContext, ReactNode, useContext } from "react"

export type ImageContextValue = {
  src?: (props: ImageProps) => SrcProps
}

const ImageContext = createContext<ImageContextValue | undefined>(undefined)

export const ImageProvider: React.FC<
  {
    children: ReactNode
  } & ImageContextValue
> = ({ children, ...value }) => {
  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}

export const useImageContext = () => {
  const context = useContext(ImageContext)

  return {
    ...context,
  }
}
