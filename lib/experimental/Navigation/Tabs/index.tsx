import { Link, useNavigation } from "@/lib/linkHandler"
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

export function Tabs({ tabs, secondary = false }: TabsProps) {
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
