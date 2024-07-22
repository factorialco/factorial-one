import { Large, Medium, Small, Tiny } from "./types"

import { cva, VariantProps } from "class-variance-authority"
import large from "./sprites/large-symbols.svg"
import medium from "./sprites/medium-symbols.svg"
import small from "./sprites/small-symbols.svg"
import tiny from "./sprites/tiny-symbols.svg"

export type Icons = {
  small: Small
  medium: Medium
  tiny: Tiny
  large: Large
}

export type IconTypes = keyof Icons

const sprites: Record<IconTypes, string> = {
  small,
  medium,
  tiny,
  large,
}

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

interface IconProps<Size extends IconTypes = IconTypes>
  extends VariantProps<typeof iconVariants> {
  size: Size
  name: Icons[Size]
}

export function Icon<Size extends IconTypes>({ size, name }: IconProps<Size>) {
  return (
    <svg aria-hidden="true" className={iconVariants({ size })}>
      <use xlinkHref={`${sprites[size]}#${name}`} />
    </svg>
  )
}
