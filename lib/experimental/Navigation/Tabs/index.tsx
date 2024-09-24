import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

interface TabItem {
  label: string
  link: string
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onTabChange: (label: TabItem) => void
  type?: "primary" | "secondary"
}

export function Tabs({
  tabs,
  activeTab,
  onTabChange,
  type = "primary",
}: TabsProps) {
  return (
    <TabNavigation type={type}>
      {tabs.map((tab) => (
        <TabNavigationLink
          key={tab.label}
          active={activeTab === tab.label}
          onClick={() => onTabChange(tab)}
          href={tab.link}
          type={type}
        >
          {tab.label}
        </TabNavigationLink>
      ))}
    </TabNavigation>
  )
}
