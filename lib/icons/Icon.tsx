import { Large, Medium, Small, Tiny } from "./types"

import large from "./sprites/large.svg"
import medium from "./sprites/medium.svg"
import small from "./sprites/small.svg"
import tiny from "./sprites/tiny.svg"

type Icons = {
  small: Small
  medium: Medium
  tiny: Tiny
  large: Large
}

type IconTypes = keyof Icons

const sprites: Record<IconTypes, string> = {
  small,
  medium,
  tiny,
  large,
}

export function Icon<Size extends IconTypes>({
  size,
  name,
}: {
  size: Size
  name: Icons[Size]
}) {
  return (
    <svg aria-hidden="true">
      <use xlinkHref={`${sprites[size]}#${name}`} />
    </svg>
  )
}
