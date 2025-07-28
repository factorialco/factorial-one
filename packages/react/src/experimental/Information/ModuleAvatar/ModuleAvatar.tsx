import { Icon, IconProps, IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import { ModuleId, modules } from "./modules"

const moduleAvatarVariants = cva({
  base: "relative flex shrink-0 items-center justify-center",
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
      xs: "h-3 w-3",
      xxs: "h-2.5 w-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type ModuleAvatarProps = VariantProps<typeof moduleAvatarVariants> & {
  withWhiteBorder?: boolean
} & (
    | {
        module: ModuleId
      }
    | {
        /**
         * @deprecated This component should only render module related icons, not arbitrary icons. The `icon` property will be removed soon. Use the `module` prop instead.
         */
        icon: IconType
      }
  )

const ICON_SIZES: Record<
  NonNullable<ModuleAvatarProps["size"]>,
  IconProps["size"]
> = {
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "lg",
  xs: "xxs",
  xxs: "xxs",
}

const squirclePath =
  "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0"

/**
 * Module avatar
 * @description A component that displays a module avatar
 * @experimental
 * @returns
 */
export function ModuleAvatar({
  size = "md",
  withWhiteBorder = false,
  ...props
}: ModuleAvatarProps) {
  if ("icon" in props) {
    console.warn(
      "ModuleAvatar:The `icon` prop is deprecated. Use the `module` prop instead."
    )
  }
  const IconComponent = "icon" in props ? props.icon : modules[props.module]

  const code = Math.random().toString(36).substring(2, 15)

  const gradientId = `gradient-${code}`

  return (
    <div
      className={cn(
        moduleAvatarVariants({ size }),
        "flex items-center justify-center"
      )}
      aria-hidden="true"
    >
      {withWhiteBorder && (
        <svg
          viewBox="0 0 96 96"
          className="absolute -left-[1px] -top-[1px]"
          preserveAspectRatio="none"
        >
          <path d={squirclePath} fill="white" />
        </svg>
      )}
      <svg
        viewBox="0 0 100 100"
        className="absolute"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF355E" />
            <stop offset="44%" stopColor="#FF355E" />
            <stop offset="100%" stopColor="#D62D4F" />
          </linearGradient>
        </defs>
        <path d={squirclePath} fill={`url(#${gradientId})`} />
      </svg>
      <Icon
        icon={IconComponent}
        size={ICON_SIZES[size]}
        color="inverse"
        className="drop-shadow"
      />
    </div>
  )
}
