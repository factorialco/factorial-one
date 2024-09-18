import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

interface TabItem {
  label: string
  link: string
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onTabChange: (label: string) => void
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <TabNavigation>
      {tabs.map((tab) => (
        <TabNavigationLink
          key={tab.label}
          active={activeTab === tab.label}
          onClick={() => onTabChange(tab.label)}
          href={tab.link}
        >
          {tab.label}
        </TabNavigationLink>
      ))}
    </TabNavigation>
  )
}
