import { Link, useLink } from "@/lib/linkHandler"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"

interface TabItem {
  label: string
  link: string
}

interface TabsProps {
  tabs: TabItem[]
  secondary?: boolean
}

export function Tabs({ tabs, secondary = false }: TabsProps) {
  const { isActive } = useLink()

  return (
    <TabNavigation secondary={secondary}>
      {tabs.map((tab) => (
        <TabNavigationLink
          key={tab.label}
          active={isActive(tab.link, { exact: true })}
          href={tab.link}
          secondary={secondary}
          asChild
        >
          <Link href={tab.link}>{tab.label}</Link>
        </TabNavigationLink>
      ))}
    </TabNavigation>
  )
}
