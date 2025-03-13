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
  embedded?: boolean
}

export const BaseTabs: React.FC<TabsProps> = ({
  tabs,
  secondary = false,
  embedded = false,
}) => {
  const { isActive } = useNavigation()

  // If embedded, only show first tab
  const visibleTabs = embedded ? [tabs[0]] : tabs

  const sortedTabs = [...visibleTabs].sort((a, b) =>
    a.index ? 1 : b.index ? -1 : 0
  )
  const activeTab = sortedTabs.find((tab) => isActive(tab.href))

  return (
    <TabNavigation
      secondary={secondary}
      asChild
      aria-label={secondary ? "secondary-navigation" : "primary-navigation"}
    >
      {visibleTabs.length === 1 ? (
        <li className="flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground">
          {visibleTabs[0].label}
        </li>
      ) : (
        visibleTabs.map(({ label, ...props }, index) => (
          <TabNavigationLink
            key={index}
            active={activeTab?.href === props.href}
            href={props.href}
            secondary={secondary}
            asChild
          >
            <Link role="link" {...props}>
              {label}
            </Link>
          </TabNavigationLink>
        ))
      )}
    </TabNavigation>
  )
}

export const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">> = ({
  secondary,
}) => {
  return (
    <TabNavigation
      aria-label={secondary ? "Secondary empty nav" : "Main empty nav"}
      secondary={secondary}
      aria-busy="true"
      aria-live="polite"
    >
      <TabNavigationLink.Skeleton className="w-24" />
      <TabNavigationLink.Skeleton className="w-20" />
      <TabNavigationLink.Skeleton className="w-28" />
      <TabNavigationLink.Skeleton className="w-20" />
    </TabNavigation>
  )
}

export const Tabs = withSkeleton(BaseTabs, TabsSkeleton)
