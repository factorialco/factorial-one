import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { cva, type VariantProps } from "cva"

export const chipVariants = cva({
  base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 font-medium",
  variants: {
    variant: {
      default: "",
      selected: "bg-f1-background-selected-secondary border-f1-border-selected",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface ChipProps extends VariantProps<typeof chipVariants> {
  /**
   * The label of the chip
   */
  label: string

  /**
   * If defined, the close icon will be displayed and the chip will be clickable
   */
  onClose?: () => void

  /**
   * If defined, an avatar will be displayed in the chip
   */
  avatar?: AvatarVariant

  /**
   * If defined, an icon will be displayed in the chip
   */
  icon?: IconType
}

export const Chip = ({ label, variant, onClose, avatar, icon }: ChipProps) => {
  return (
    <div
      className={cn(
        chipVariants({ variant }),
        onClose && "pr-1.5",
        avatar && "pl-0.5",
        avatar && avatar?.type !== "person" && "rounded-sm",
        icon && !avatar && "pl-1.5"
      )}
    >
      {avatar && <Avatar avatar={avatar} size="xsmall" />}
      <div className="flex items-center gap-0.5">
        {icon && <Icon icon={icon} size="sm" className="text-f1-icon" />}
        {label}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className={cn(
            "-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon",
            variant === "selected" &&
              "[&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover [&_svg]:text-f1-icon-selected",
            focusRing()
          )}
          tabIndex={0}
          aria-label="Close"
        >
          <Icon icon={CrossedCircle} size="sm" />
        </button>
      )}
    </div>
  )
}
