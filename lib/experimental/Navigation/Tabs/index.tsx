import { Link, useNavigation } from "@/lib/linkHandler"
import { withSkeleton } from "@/lib/skeleton"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

export type TabItem = {
  label: string
  href: string
  index?: boolean
}

interface TabsProps {
  tabs: TabItem[]
  secondary?: boolean
}

export const BaseTabs: React.FC<TabsProps> = ({ tabs, secondary = false }) => {
  const { isActive } = useNavigation()

  const sortedTabs = tabs.sort((a, b) => (a.index ? 1 : b.index ? -1 : 0))
  const activeTabIndex = sortedTabs.findIndex((tab) => isActive(tab.href))

  return (
    <TabNavigation secondary={secondary}>
      {tabs.map(({ label, ...props }, index) => (
        <TabNavigationLink
          key={index}
          active={activeTabIndex === index}
          href={props.href}
          secondary={secondary}
          asChild
        >
          <Link {...props}>{label}</Link>
        </TabNavigationLink>
      ))}
    </TabNavigation>
  )
}

export const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">> = ({
  secondary,
}) => {
  return (
    <TabNavigation secondary={secondary} aria-busy="true" aria-live="polite">
      <TabNavigationLink.Skeleton className="w-24" />
      <TabNavigationLink.Skeleton className="w-20" />
      <TabNavigationLink.Skeleton className="w-28" />
      <TabNavigationLink.Skeleton className="w-20" />
    </TabNavigation>
  )
}

export const Tabs = withSkeleton(BaseTabs, TabsSkeleton)
