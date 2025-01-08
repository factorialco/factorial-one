import { Icon } from "@/components/Utilities/Icon"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { ChevronDown } from "@/icons/app"
import { Link, useNavigation } from "@/lib/linkHandler"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { TabNavigation, TabNavigationLink } from "@/ui/tab-navigation"
import { motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { useMediaQuery, useResizeObserver } from "usehooks-ts"

const LAYOUT_CONSTANTS = {
  moreButtonWidth: 128,
  containerPadding: 48,
  itemPadding: 32,
} as const

export type TabItem = {
  label: string
  href: string
  index?: boolean
}

interface TabsProps {
  tabs: TabItem[]
  secondary?: boolean
  moreText?: string
}

export const BaseTabs: React.FC<TabsProps> = ({
  tabs,
  secondary = false,
  moreText = "more",
}) => {
  const { isActive } = useNavigation()
  const [visibleTabs, setVisibleTabs] = useState<TabItem[]>(tabs)
  const [overflowTabs, setOverflowTabs] = useState<TabItem[]>([])
  const [tabWidths, setTabWidths] = useState<number[]>([])
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const resizeTimeoutRef = useRef<number>()
  const isMdScreen = useMediaQuery("(min-width: 768px)")

  const calculateVisibleTabs = useCallback(
    (containerWidth: number, widths: number[]) => {
      const { moreButtonWidth, containerPadding, itemPadding } =
        LAYOUT_CONSTANTS
      const availableWidth =
        containerWidth - moreButtonWidth - containerPadding - itemPadding

      let totalWidth = 0
      let visibleCount = widths.length

      for (let i = 0; i < widths.length; i++) {
        totalWidth += widths[i]
        if (totalWidth > availableWidth) {
          visibleCount = i
          break
        }
      }

      return {
        visible: tabs.slice(0, visibleCount),
        overflow: tabs.slice(visibleCount),
      }
    },
    [tabs]
  )

  const measureTabWidths = useCallback(() => {
    if (!containerRef.current) return

    return new Promise<number[]>((resolve) => {
      requestAnimationFrame(() => {
        const tabElements = Array.from(
          containerRef.current?.querySelectorAll('[role="link"]') ?? []
        )
        const widths = tabElements.map(
          (tab) => tab.getBoundingClientRect().width
        )
        resolve(widths)
      })
    })
  }, [])

  const updateLayout = useCallback(async () => {
    if (!containerRef.current || !isMdScreen) {
      setVisibleTabs(tabs)
      setOverflowTabs([])
      return
    }

    const currentWidths = tabWidths.length
      ? tabWidths
      : await measureTabWidths()
    if (!currentWidths?.length) return

    if (!tabWidths.length) {
      setTabWidths(currentWidths)
    }

    const { visible, overflow } = calculateVisibleTabs(
      containerRef.current.offsetWidth,
      currentWidths
    )

    setVisibleTabs(visible)
    setOverflowTabs(overflow)
  }, [tabs, isMdScreen, tabWidths, measureTabWidths, calculateVisibleTabs])

  const debouncedUpdateLayout = useCallback(() => {
    if (resizeTimeoutRef.current) {
      window.cancelAnimationFrame(resizeTimeoutRef.current)
    }
    resizeTimeoutRef.current = window.requestAnimationFrame(() => {
      void updateLayout()
    })
  }, [updateLayout])

  useEffect(() => {
    void updateLayout()
    return () => {
      if (resizeTimeoutRef.current) {
        window.cancelAnimationFrame(resizeTimeoutRef.current)
      }
    }
  }, [updateLayout])

  useResizeObserver({
    ref: containerRef,
    box: "border-box",
    onResize: debouncedUpdateLayout,
  })

  // Index tabs are usually `/` while other tabs are `/some-other-path`.
  // We need to find the right active tab by checking if the current path
  // is active without the index first, and then with the index. Otherwise,
  // we would incorrectly match the index tab as active, resulting in two tabs
  // being active at the same time.
  const sortedTabs = [...tabs].sort((a, b) => (a.index ? 1 : b.index ? -1 : 0))
  const activeTab = sortedTabs.find((tab) => isActive(tab.href))

  const isTabActive = (href: string) => activeTab?.href === href
  const hasActiveOverflowTab = () =>
    overflowTabs.some((tab) => isTabActive(tab.href))

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
                active={isTabActive(props.href)}
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
                active={hasActiveOverflowTab()}
                href="#"
                secondary={secondary}
                asChild
                className="p-0"
              >
                <div data-active={hasActiveOverflowTab() || open}>
                  <Dropdown
                    items={overflowTabs.map((tab) => ({
                      label: tab.label,
                      href: tab.href,
                    }))}
                    open={open}
                    onOpenChange={setOpen}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 py-1.5 pl-3 pr-2 text-f1-foreground-secondary",
                        hasActiveOverflowTab() && "text-f1-foreground"
                      )}
                    >
                      +{overflowTabs.length} {moreText}
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
                </div>
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
