import { ButtonInternal } from "@/components/Actions/Button/internal"
import {
  DropdownInternal,
  DropdownInternalProps,
} from "@/experimental/Navigation/Dropdown/internal"
import CrossIcon from "@/icons/app/Cross"
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
  const { onClose, shownBottomSheet } = useOneModal()

  const dialogClassName = "text-lg font-semibold text-f1-foreground"

  return (
    <div className="flex flex-row items-center justify-between px-4 py-3">
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
