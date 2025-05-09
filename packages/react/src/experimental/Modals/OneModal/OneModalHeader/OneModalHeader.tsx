import { ButtonInternal } from "@/components/Actions/Button/internal"
import {
  DropdownInternal,
  DropdownInternalProps,
} from "@/experimental/Navigation/Dropdown/internal"
import CrossIcon from "@/icons/app/Cross"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@/ui/dialog"
import { DrawerTitle } from "@/ui/drawer"
import { useOneModal } from "../OneModalProvider"

export type OneModalHeaderProps = {
  title: string
  otherActions?: DropdownInternalProps["items"]
}

export const OneModalHeader = ({
  title,
  otherActions,
}: OneModalHeaderProps) => {
  const { onClose, shownBottomSheet, position: modalPosition } = useOneModal()

  const dialogClassName = cn(
    "font-semibold text-f1-foreground",
    modalPosition === "center" ? "text-lg" : "text-xl"
  )

  if (modalPosition === "right" && !shownBottomSheet) {
    return (
      <div className="flex flex-col gap-3 px-4 py-4">
        <div className="flex flex-row justify-between">
          <ButtonInternal
            variant="outline"
            icon={CrossIcon}
            onClick={onClose}
            label="Close modal"
            hideLabel
          />
          {!!otherActions?.length && <DropdownInternal items={otherActions} />}
        </div>
        <DialogTitle className={cn(dialogClassName, "text-2xl")}>
          {title}
        </DialogTitle>
      </div>
    )
  }

  return (
    <div className="flex flex-row items-center justify-between px-4 py-4">
      {!shownBottomSheet ? (
        <DialogTitle className={dialogClassName}>{title}</DialogTitle>
      ) : (
        <DrawerTitle className={dialogClassName}>{title}</DrawerTitle>
      )}
      <div className="flex flex-row gap-2">
        {!!otherActions?.length && <DropdownInternal items={otherActions} />}
        <ButtonInternal
          variant="outline"
          icon={CrossIcon}
          onClick={onClose}
          label="Close modal"
          hideLabel
        />
      </div>
    </div>
  )
}
