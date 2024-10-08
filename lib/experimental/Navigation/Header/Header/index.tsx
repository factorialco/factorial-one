import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import Breadcrumbs, { type BreadcrumbItemType } from "../Breadcrumbs"

type ActionButtonProps = {
  label: string
  icon: IconType
  onClick: () => void
}

type HeaderProps = {
  module: {
    name: string
    href: string
  }
  tree?: BreadcrumbItemType[]
  actions?: ActionButtonProps[]
}

export default function Header({
  module,
  tree = [],
  actions = [],
}: HeaderProps) {
  const breadcrumbsTree: BreadcrumbItemType[] = module.name
    ? [{ label: module.name, href: module.href }, ...tree]
    : tree

  const isFirstLevel = tree.length === 0

  return (
    <div
      className={cn(
        "flex h-16 items-center justify-between rounded-t-lg bg-f1-background/80 p-4 backdrop-blur-xl",
        !isFirstLevel &&
          "border-b border-dashed border-transparent border-b-f1-border/80"
      )}
    >
      <div className="flex items-center">
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
