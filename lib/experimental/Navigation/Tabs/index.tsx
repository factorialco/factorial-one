import { Icon } from "@/components/Utilities/Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown } from "@/icons/app"
import { Link, useNavigation } from "@/lib/linkHandler"
import { withSkeleton } from "@/lib/skeleton"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleTabs, setVisibleTabs] = useState<TabItem[]>(tabs)
  const [overflowTabs, setOverflowTabs] = useState<TabItem[]>([])

  const isMdScreen = useMediaQuery("(min-width: 768px)")
  const [open, setOpen] = useState(false)

  // Index tabs are usually `/` while other tabs are `/some-other-path`.
  // We need to find the right active tab by checking if the current path
  // is active without the index first, and then with the index. Otherwise,
  // we would incorrectly match the index tab as active, resulting in two tabs
  // being active at the same time.
  const sortedTabs = [...tabs].sort((a, b) => (a.index ? 1 : b.index ? -1 : 0))
  const activeTab = sortedTabs.find((tab) => isActive(tab.href))

  const updateVisibleTabs = () => {
    // Early return for mobile or no container
    if (!containerRef.current || !isMdScreen) {
      setVisibleTabs(tabs)
      setOverflowTabs([])
      return
    }

    const container = containerRef.current
    const moreButtonWidth = 120
    const padding = 32
    const containerPadding = 48
    const availableWidth =
      container.offsetWidth - moreButtonWidth - padding - containerPadding

    // Get or calculate tab widths once
    const tabWidths = container.dataset.tabWidths
      ? JSON.parse(container.dataset.tabWidths)
      : Array.from(container.querySelectorAll('[role="link"]')).map(
          (tab) => tab.getBoundingClientRect().width
        )

    // Store widths if first time
    if (!container.dataset.tabWidths) {
      container.dataset.tabWidths = JSON.stringify(tabWidths)
    }

    // Find how many tabs fit
    let remainingWidth = availableWidth
    const visibleCount = tabWidths.findIndex((width: number) => {
      remainingWidth -= width
      return remainingWidth < 0
    })

    setVisibleTabs(
      tabs.slice(0, visibleCount === -1 ? tabs.length : visibleCount)
    )
    setOverflowTabs(
      tabs.slice(visibleCount === -1 ? tabs.length : visibleCount)
    )
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateVisibleTabs()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
      updateVisibleTabs()
    }

    return () => resizeObserver.disconnect()
  }, [tabs, isMdScreen])

  return (
    <div ref={containerRef}>
      <TabNavigation
        secondary={secondary}
        asChild
        aria-label={secondary ? "primary-navigation" : "secondary-navigation"}
      >
        {tabs.length === 1 ? (
          <li className="flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground">
            {tabs[0].label}
          </li>
        ) : (
          <>
            {visibleTabs.map(({ label, ...props }, index) => (
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
            ))}

            {isMdScreen && overflowTabs.length > 0 && (
              <TabNavigationLink
                active={false}
                href="#"
                secondary={secondary}
                asChild
              >
                <Dropdown
                  items={overflowTabs.map((tab) => ({
                    label: tab.label,
                    href: tab.href,
                  }))}
                  open={open}
                  onOpenChange={setOpen}
                >
                  <button className="flex items-center gap-1 text-f1-foreground-secondary">
                    +{overflowTabs.length} more
                    <div className="flex w-5 shrink-0 items-center justify-center">
                      <div className="flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all">
                        <motion.div
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex h-3 w-3 items-center justify-center"
                        >
                          <Icon icon={ChevronDown} size="xs" />
                        </motion.div>
                      </div>
                    </div>
                  </button>
                </Dropdown>
              </TabNavigationLink>
            )}
          </>
        )}
      </TabNavigation>
    </div>
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
