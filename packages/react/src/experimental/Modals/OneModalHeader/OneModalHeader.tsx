import { ButtonInternal } from "@/components/Actions/Button/internal"
import {
  DropdownInternal,
  DropdownInternalProps,
} from "@/experimental/Navigation/Dropdown/internal"
import CrossIcon from "@/icons/app/Cross"

export type OneModalHeaderProps = {
  title: string
  dropdownItems?: DropdownInternalProps["items"]
  onClose: () => void
}

export const OneModalHeader = ({
  title,
  dropdownItems,
  onClose,
}: OneModalHeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-3">
      <h2 className="text-lg font-semibold text-f1-foreground">{title}</h2>
      <div className="flex flex-row gap-2">
        {dropdownItems?.length && <DropdownInternal items={dropdownItems} />}
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
