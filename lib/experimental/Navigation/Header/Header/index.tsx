import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { useSidebar } from "@/experimental/Navigation/ApplicationFrame/FrameProvider"
import AlignTextJustify from "@/icons/AlignTextJustify"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Breadcrumbs, { type BreadcrumbItemType } from "../Breadcrumbs"

import {
  ModuleAvatar,
  type IconType as ModuleAvatarIconType,
} from "@/experimental/Information/ModuleAvatar"

type HeaderProps = {
  module: {
    name: string
    href: string
    icon: ModuleAvatarIconType
  }
  breadcrumbs?: BreadcrumbItemType[]
  actions?: {
    label: string
    icon: IconType
    onClick: () => void
  }[]
}

export default function Header({
  module,
  breadcrumbs = [],
  actions = [],
}: HeaderProps) {
  const { sidebarState, toggleSidebar } = useSidebar()

  const breadcrumbsTree: BreadcrumbItemType[] = [
    { label: module.name, href: module.href, icon: module.icon },
    ...breadcrumbs,
  ]

  const hasNavigation = breadcrumbs.length > 0

  return (
    <div
      className={cn(
        "flex h-16 items-center justify-between bg-f1-background/80 px-5 py-4 backdrop-blur-xl xs:px-6",
        hasNavigation &&
          "border-b border-dashed border-transparent border-b-f1-border/80"
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
                  icon={AlignTextJustify}
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
      {actions && (
        <div className="flex items-center gap-2">
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
  )
}
