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
  const activeTabIndex = findActiveTabIndex(tabs, isActive)

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
    <TabNavigation secondary={secondary}>
      <TabNavigationLink.Skeleton className="w-24" />
      <TabNavigationLink.Skeleton className="w-20" />
      <TabNavigationLink.Skeleton className="w-28" />
      <TabNavigationLink.Skeleton className="w-20" />
    </TabNavigation>
  )
}

export const Tabs = withSkeleton(BaseTabs, TabsSkeleton)

// The following piece of code is used to find the right active tab when
// one of the tabs is an index one. Since index tabs are usually `/` while
// other tabs are `/some-other-path`, we need to find the right tab by
// checking if the current path is active without the index first, and then
// checking if it's active with the index.
//
// Otherwise, we would incorrectly match the index tab as active, resulting
// in two tabs being active at the same time.
const findActiveTabIndex = (
  tabs: TabItem[],
  isActive: (href: string) => boolean
) => {
  const tabsWithIndex = tabs.map((tab, index) => ({
    index,
    tab,
  }))

  const nonIndexActiveTab = tabsWithIndex
    .filter((indexedTab) => !indexedTab.tab.index)
    .find((indexedTab) => isActive(indexedTab.tab.href))

  const activeTab = nonIndexActiveTab
    ? nonIndexActiveTab
    : tabsWithIndex.find((indexedTab) => isActive(indexedTab.tab.href))

  return activeTab?.index
}
