import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import type { StatusVariant } from "@/experimental/Information/Tags/StatusTag"
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import { useSidebar } from "@/experimental/Navigation/ApplicationFrame/FrameProvider"
import { Menu } from "@/icons/app"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Breadcrumbs, { type BreadcrumbItemType } from "../Breadcrumbs"

import { ModuleAvatar } from "@/experimental/Information/ModuleAvatar"

type HeaderProps = {
  module: {
    name: string
    href: string
    icon: IconType
  }
  statusTag?: {
    text: string
    variant: StatusVariant
  }
  breadcrumbs?: BreadcrumbItemType[]
  actions?: {
    label: string
    icon: IconType
    onClick: () => void
  }[]
}

export function PageHeader({
  module,
  statusTag = undefined,
  breadcrumbs = [],
  actions = [],
}: HeaderProps) {
  const { sidebarState, toggleSidebar } = useSidebar()

  const breadcrumbsTree: BreadcrumbItemType[] = [
    { label: module.name, href: module.href, icon: module.icon },
    ...breadcrumbs,
  ]

  const hasStatus = statusTag && Object.keys(statusTag).length !== 0
  const hasNavigation = breadcrumbs.length > 0
  const hasActions = actions.length > 0

  return (
    <div
      className={cn(
        "flex h-16 items-center justify-between px-5 py-4 backdrop-blur-xl xs:px-6",
        hasNavigation &&
          "border-b border-dashed border-transparent border-b-f1-border"
      )}
    >
      <div className="flex flex-grow items-center">
        <AnimatePresence>
          {sidebarState !== "locked" && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
            >
              <div className="mr-3">
                <Button
                  variant="ghost"
                  hideLabel
                  round
                  onClick={toggleSidebar}
                  label="Menu"
                  icon={Menu}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-grow items-center gap-3">
          {!hasNavigation && <ModuleAvatar icon={module.icon} size="lg" />}
          {breadcrumbsTree.length > 1 ? (
            <Breadcrumbs breadcrumbs={breadcrumbsTree} />
          ) : (
            <div className="text-xl font-semibold">{module.name}</div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        {!hasNavigation && hasStatus && (
          <div className="pe-3">
            <StatusTag text={statusTag.text} variant={statusTag.variant} />
          </div>
        )}
        {hasStatus && hasActions && (
          <div className="right-0 h-4 w-px bg-f1-border-secondary"></div>
        )}
        {hasActions && (
          <div className="items-right flex gap-2 ps-3">
            {actions.map((action, index) => (
              <Button
                hideLabel
                round
                key={index}
                variant="outline"
                onClick={action.onClick}
                label={action.label}
                icon={action.icon}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
