import React from "react"
import { FullWidthLayout } from "./FullWidthLayout"
import { StandardLayout } from "./StandardLayout"
import { LayoutType } from "./types"

export { FullWidthLayout, StandardLayout }

interface LayoutProps {
  layout: LayoutType
  children: React.ReactNode
}

export function Layout({ layout, children }: LayoutProps) {
  switch (layout) {
    case "fullWidth":
      return <FullWidthLayout>{children}</FullWidthLayout>
    case "standard":
    default:
      return <StandardLayout>{children}</StandardLayout>
  }
}
