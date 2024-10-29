import { Counter } from "@/experimental/Information/Counter"
import { Link, useNavigation } from "@/lib/linkHandler"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"
import { NavigationItem } from "../utils"

export type TabItem = NavigationItem & {
  badge?: number
}

interface TabsProps {
  tabs: TabItem[]
  secondary?: boolean
}

export function Tabs({ tabs, secondary = false }: TabsProps) {
  const { isActive } = useNavigation()

  return (
    <TabNavigation secondary={secondary}>
      {tabs.map(({ label, badge, ...props }, index) => (
        <TabNavigationLink
          key={index}
          active={isActive(props.href, { exact: props.exactMatch })}
          href={props.href}
          secondary={secondary}
          asChild
        >
          <Link {...props}>
            <span>{label}</span>
            {badge && <Counter value={badge} size="sm" type="bold" />}
          </Link>
        </TabNavigationLink>
      ))}
    </TabNavigation>
  )
}
