import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

interface TabItem {
  label: string
  link: string
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onTabChange: (tab: TabItem) => void
  secondary?: boolean
}

export function Tabs({
  tabs,
  activeTab,
  onTabChange,
  secondary = false,
}: TabsProps) {
  return (
    <TabNavigation secondary={secondary}>
      {tabs.map((tab) => (
        <TabNavigationLink
          key={tab.label}
          active={activeTab === tab.label}
          onClick={() => onTabChange(tab)}
          href={tab.link}
          secondary={secondary}
        >
          {tab.label}
        </TabNavigationLink>
      ))}
    </TabNavigation>
  )
}
