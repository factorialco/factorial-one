import { Icon } from "@/core/components/utility/Icon"
import { ChevronDown } from "@/icons/app"

export const AvatarNameSelectorTrigger = ({
  placeholder,
}: {
  placeholder: string
}) => {
  return (
    <div className="flex justify-between rounded border border-solid border-f1-border p-2">
      <span className="my-auto pl-2 text-f1-foreground-secondary">
        {placeholder}
      </span>
      <div className="p-0.5">
        <div className="h-[16px] w-[16px]">
          <Icon
            icon={ChevronDown}
            size="sm"
            className="rounded-2xs bg-f1-background-secondary p-0.5"
          />
        </div>
      </div>
    </div>
  )
}
