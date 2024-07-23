import { large } from "./sprites/large"
import { medium } from "./sprites/medium"
import { small } from "./sprites/small"
import { tiny } from "./sprites/tiny"

import { cva, VariantProps } from "class-variance-authority"

const icons = {
  large,
  medium,
  small,
  tiny,
}

export type IconTypes = keyof typeof icons
export type Icons = typeof icons

const iconVariants = cva("inline-block fill-current", {
  variants: {
    size: {
      large: "h-8 w-8",
      medium: "h-6 w-6",
      small: "h-4 w-4",
      tiny: "h-3 w-3",
    } satisfies Record<IconTypes, string>,
  },
})

export interface IconProps<Size extends IconTypes = IconTypes>
  extends VariantProps<typeof iconVariants> {
  size: Size
  name: keyof Icons[Size]
}

export function Icon<Size extends IconTypes>({ size, name }: IconProps<Size>) {
  const Component = icons[size][name] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >

  return <Component className={iconVariants({ size })} />
}
