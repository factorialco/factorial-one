import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import AlignTextJustify from "@/icons/AlignTextJustify"
import { cn } from "@/lib/utils"
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
  tree?: BreadcrumbItemType[]
  actions?: {
    label: string
    icon: IconType
    onClick: () => void
  }[]
  menu: {
    show: boolean
    onClick: () => void
  }
}

export default function Header({
  module,
  tree = [],
  actions = [],
  menu,
}: HeaderProps) {
  const breadcrumbsTree: BreadcrumbItemType[] = [
    { label: module.name, href: module.href, icon: module.icon },
    ...tree,
  ]

  const hasNavigation = tree.length > 0

  return (
    <div
      className={cn(
        "flex h-16 items-center justify-between rounded-t-lg bg-f1-background/80 p-4 backdrop-blur-xl",
        !hasNavigation &&
          "border-b border-dashed border-transparent border-b-f1-border/80"
      )}
    >
      <div className="flex items-center gap-3">
        {menu.show && (
          <Button
            variant="ghost"
            hideLabel
            round
            onClick={menu.onClick}
            label="Menu"
            icon={AlignTextJustify}
          />
        )}
        {!hasNavigation && <ModuleAvatar icon={module.icon} size="lg" />}
        {breadcrumbsTree.length > 1 ? (
          <Breadcrumbs tree={breadcrumbsTree} />
        ) : (
          <div className="text-xl font-semibold">{module.name}</div>
        )}
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
