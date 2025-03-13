import { ReactNode } from "react"

export type VirtualItem = {
  height: number
  value?: string
  item: ReactNode
}
