import { forwardRef, ReactNode } from "react"
import { DetailsItemType } from "../Utils/DetailsItem"
import { DetailsItemsList } from "../Utils/DetailsItemsList"
import { InfoPaneLayout } from "../Utils/InfoPaneLayout"

export interface OverviewLayoutProps {
  children: ReactNode
  sidepanel: {
    title: string
    items: DetailsItemType[]
  }
}

export const OverviewLayout = forwardRef<HTMLDivElement, OverviewLayoutProps>(
  function OverviewLayout({ children, sidepanel }, ref) {
    return (
      <InfoPaneLayout
        ref={ref}
        sideContent={
          <DetailsItemsList title={sidepanel.title} details={sidepanel.items} />
        }
      >
        {children}
      </InfoPaneLayout>
    )
  }
)