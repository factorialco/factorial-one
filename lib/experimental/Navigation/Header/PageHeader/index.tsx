import { Button } from "@/components/Actions/Button"
import { Icon, IconType } from "@/components/Utilities/Icon"
import { ModuleAvatar } from "@/experimental/Information/ModuleAvatar"
import type { StatusVariant } from "@/experimental/Information/Tags/StatusTag"
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import { useSidebar } from "@/experimental/Navigation/ApplicationFrame/FrameProvider"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ChevronDown, ChevronLeft, ChevronUp, Menu } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { cva } from "class-variance-authority"
import { AnimatePresence, motion } from "framer-motion"
import { ReactElement } from "react"
import { Dropdown } from "../../Dropdown"
import Breadcrumbs, { type BreadcrumbItemType } from "../Breadcrumbs"

export type PageAction = {
  label: string
  icon: IconType
} & (
  | {
      href: string
    }
  | {
      actions: Array<{ label: string; href: string }>
    }
)

type NavigationProps = {
  previous?: {
    url: string
    title: string
  }
  next?: {
    url: string
    title: string
  }
  counter?: {
    current: number
    total: number
  }
}

type HeaderProps = {
  module: {
    name: string
    href: string
    icon: IconType
  }
  statusTag?: {
    text: string
    variant: StatusVariant
    tooltip?: string
  }
  breadcrumbs?: BreadcrumbItemType[]
  actions?: PageAction[]
  embedded?: boolean
  navigation?: NavigationProps
}

function PageNavigationLink({
  icon,
  href,
  label,
  disabled,
}: {
  icon: IconType
  href: string
  label: string
  disabled?: boolean
}) {
  return (
    <Link
      href={disabled ? "" : href}
      title={label}
      aria-label={label}
      className={cn(
        "inline-flex aspect-square h-6 items-center justify-center rounded-sm border border-solid border-f1-border bg-f1-background px-0 text-f1-foreground hover:border-f1-border-hover",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <Icon icon={icon} size="md" />
    </Link>
  )
}

export function PageHeader({
  module,
  statusTag = undefined,
  breadcrumbs = [],
  actions = [],
  embedded = false,
  navigation,
}: HeaderProps) {
  const { sidebarState, toggleSidebar } = useSidebar()

  const breadcrumbsTree: BreadcrumbItemType[] = [
    { label: module.name, href: module.href, icon: module.icon },
    ...breadcrumbs,
  ]
  const hasStatus = statusTag && Object.keys(statusTag).length !== 0
  const hasNavigation = breadcrumbs.length > 0
  const hasActions = !embedded && actions.length > 0
  const showBackButton = embedded && hasNavigation
  const lastBreadcrumb = breadcrumbsTree[breadcrumbsTree.length - 1]
  const parentBreadcrumb = hasNavigation
    ? breadcrumbsTree[breadcrumbsTree.length - 2]
    : null

  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        embedded ? "h-12" : "h-16",
        hasNavigation &&
          !embedded &&
          "border-b border-dashed border-transparent border-b-f1-border"
      )}
    >
      <div className="flex flex-grow items-center">
        <AnimatePresence>
          {!embedded && sidebarState !== "locked" && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
            >
              <div className="mr-3">
                <Button
                  ref={(buttonEl) => {
                    buttonEl?.focus()
                  }}
                  variant="ghost"
                  hideLabel
                  round
                  onClick={toggleSidebar}
                  label="Open main menu"
                  icon={Menu}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={cn(
            "flex flex-grow items-center gap-2",
            embedded && hasNavigation && "justify-center"
          )}
        >
          {showBackButton &&
            parentBreadcrumb &&
            !("loading" in parentBreadcrumb) && (
              <div className="absolute left-4">
                <Link href={parentBreadcrumb.href}>
                  <Button
                    variant="ghost"
                    hideLabel
                    round
                    label="Back"
                    icon={ChevronLeft}
                  />
                </Link>
              </div>
            )}
          {!hasNavigation && <ModuleAvatar icon={module.icon} size="lg" />}
          {embedded && hasNavigation ? (
            <div className="text-lg font-semibold text-f1-foreground">
              {"loading" in lastBreadcrumb ? (
                <Skeleton className="h-4 w-24" />
              ) : (
                lastBreadcrumb.label
              )}
            </div>
          ) : breadcrumbsTree.length > 1 ? (
            <Breadcrumbs breadcrumbs={breadcrumbsTree} />
          ) : (
            <div className="text-xl font-semibold text-f1-foreground">
              {module.name}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {!embedded && hasStatus && (
          <div>
            {statusTag.tooltip ? (
              <Tooltip label={statusTag.tooltip}>
                <div>
                  <StatusTag
                    text={statusTag.text}
                    variant={statusTag.variant}
                    additionalAccesibleText={statusTag.tooltip}
                  />
                </div>
              </Tooltip>
            ) : (
              <StatusTag text={statusTag.text} variant={statusTag.variant} />
            )}
          </div>
        )}
        {!embedded && hasStatus && (navigation || hasActions) && (
          <div className="h-4 w-px bg-f1-border-secondary" />
        )}
        {navigation && (
          <div className="flex items-center gap-3">
            {navigation.counter && (
              <span className="text-sm text-f1-foreground-secondary">
                {navigation.counter.current}/{navigation.counter.total}
              </span>
            )}
            <div className="flex items-center gap-2">
              <PageNavigationLink
                icon={ChevronUp}
                label={navigation.previous?.title || "Previous"}
                href={navigation.previous?.url || ""}
                disabled={!navigation.previous}
              />
              <PageNavigationLink
                icon={ChevronDown}
                label={navigation.next?.title || "Next"}
                href={navigation.next?.url || ""}
                disabled={!navigation.next}
              />
            </div>
          </div>
        )}
        {navigation && hasActions && (
          <div className="h-4 w-px bg-f1-border-secondary" />
        )}
        {hasActions && (
          <div className="items-right flex gap-2">
            {actions.map((action, index) => (
              <PageAction key={index} action={action} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const pageActionButtonVariants = cva(
  "inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover"
)

function PageAction({ action }: { action: PageAction }): ReactElement {
  if ("actions" in action) {
    return (
      <Dropdown items={action.actions}>
        <button title={action.label} className={pageActionButtonVariants()}>
          <Icon icon={action.icon} size="md" />
        </button>
      </Dropdown>
    )
  }

  return (
    <Link
      href={action.href}
      title={action.label}
      className={pageActionButtonVariants()}
    >
      <Icon icon={action.icon} size="md" />
    </Link>
  )
}
