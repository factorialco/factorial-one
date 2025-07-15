import { ReactNode } from "react"
import { Metadata } from "../types"

export type MetadataRenderer<T extends Metadata = Metadata> = (props: {
  metadata: T
}) => ReactNode
