import { ButtonInternal } from "@/components/Actions/Button/internal"
import {
  DropdownInternal,
  DropdownInternalProps,
} from "@/experimental/Navigation/Dropdown/internal"
import { PageHeader } from "@/experimental/Navigation/Header"
import { BreadcrumbItem } from "@/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem"
import CrossIcon from "@/icons/app/Cross"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@/ui/dialog"
import { DrawerTitle } from "@/ui/drawer"
import { ComponentProps } from "react"
import { useOneModal } from "../OneModalProvider"

export type OneModalHeaderProps = {
  title: string
  /**
   * Module configuration for the header. Only works when modal position is set to "right".
   * Displays module icon and name in the header.
   */
  module?: ComponentProps<typeof PageHeader>["module"]
  otherActions?: DropdownInternalProps["items"]
}

export const OneModalHeader = ({
  title,
  module,
  otherActions,
}: OneModalHeaderProps) => {
  const { onClose, shownBottomSheet, position: modalPosition } = useOneModal()

  const dialogClassName = cn(
    "font-semibold text-f1-foreground",
    modalPosition === "center" ? "text-lg" : "text-xl"
  )

  const Divider = () => {
    return <div className="h-4 w-px self-center bg-f1-background-secondary" />
  }

  const otherActionItems =
    otherActions?.filter((action) => action.type !== "separator") ?? []

  const Actions = () => {
    if (!otherActionItems.length || !otherActions) return null

    if (otherActionItems.length <= 2) {
      return (
        <div className="flex flex-row gap-2">
          {otherActionItems.map((action) => (
            <ButtonInternal
              key={action.label}
              variant="outline"
              icon={action.icon}
              onClick={action.onClick}
              label={action.label}
              hideLabel
            />
          ))}
        </div>
      )
    }

    return <DropdownInternal items={otherActions} />
  }

  const Module = () => {
    if (!module) return null

    return (
      <BreadcrumbItem
        item={{
          id: module.href,
          label: module.name,
          href: module.href,
          icon: module.icon,
        }}
        isLast={false}
        isFirst={true}
      />
    )
  }

  if (modalPosition === "right" && !shownBottomSheet) {
    return (
      <div className="flex flex-col gap-3 bg-f1-background p-4">
        <div className="flex flex-row justify-between">
          {module ? <Module /> : <Actions />}
          <div className="flex flex-row gap-2">
            {module && (
              <>
                <Actions />
                {otherActions && <Divider />}
              </>
            )}
            <ButtonInternal
              variant="outline"
              icon={CrossIcon}
              onClick={onClose}
              label="Close modal"
              hideLabel
            />
          </div>
        </div>
        <DialogTitle className={cn(dialogClassName, "text-2xl")}>
          {title}
        </DialogTitle>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 bg-f1-background p-4">
      <div className="flex flex-row items-center justify-between">
        {!shownBottomSheet ? (
          <DialogTitle className={dialogClassName}>{title}</DialogTitle>
        ) : (
          <>
            {module ? (
              <Module />
            ) : (
              <DrawerTitle className={dialogClassName}>{title}</DrawerTitle>
            )}
          </>
        )}
        <div className="flex flex-row gap-2">
          <Actions />
          {otherActions && <Divider />}
          <ButtonInternal
            variant="outline"
            icon={CrossIcon}
            onClick={onClose}
            label="Close modal"
            hideLabel
          />
        </div>
      </div>
      {module && <DrawerTitle className={dialogClassName}>{title}</DrawerTitle>}
    </div>
  )
}
