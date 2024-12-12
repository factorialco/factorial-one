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
  const isSingleTab = tabs.length === 1

  // Index tabs are usually `/` while other tabs are `/some-other-path`.
  // We need to find the right active tab by checking if the current path
  // is active without the index first, and then with the index. Otherwise,
  // we would incorrectly match the index tab as active, resulting in two tabs
  // being active at the same time.
  const sortedTabs = [...tabs].sort((a, b) => (a.index ? 1 : b.index ? -1 : 0))
  const activeTab = sortedTabs.find((tab) => isActive(tab.href))

  return (
    <TabNavigation
      secondary={secondary}
      asChild
      aria-label={secondary ? "primary-navigation" : "secondary-navigation"}
    >
      {isSingleTab ? (
        <TabNavigationLink disabled secondary={secondary} className="p-0">
          <span className="flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground">
            {tabs[0].label}
          </span>
        </TabNavigationLink>
      ) : (
        tabs.map(({ label, ...props }, index) => (
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
