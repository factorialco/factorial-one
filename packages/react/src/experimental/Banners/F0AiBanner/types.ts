import { IconType } from "@/components/F0Icon"
import { ReactNode } from "react"

export type AiBannerAction = {
  label: string
  onClick: () => void
  icon?: IconType
}

export interface AiBannerInternalProps {
  title: string
  onClose?: () => void
  children: ReactNode
  primaryAction?: AiBannerAction
  secondaryAction?: AiBannerAction
}
export interface AiBannerSkeletonProps {
  compact?: boolean
}
