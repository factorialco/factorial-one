import { sizes } from "@/ui/avatar"
import { AvatarVariant } from "../F0Avatar/types"

type AvatarType = AvatarVariant["type"]

export type AvatarListSize = Extract<
  (typeof sizes)[number],
  "xsmall" | "small" | "medium"
>

export type F0AvatarListProps = {
  avatars: AvatarVariant[]
  size?: AvatarListSize
  type?: AvatarType

  /**
   * Whether to hide tooltips in each avatar.
   * @default false
   */
  noTooltip?: boolean

  /**
   * The maximum number of avatars to display.
   * @default 3
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * The layout of the avatar list.
   * - "fill" - Avatars will expand to fill the available width, with overflow items shown in a counter
   * - "compact" - Avatars will be stacked tightly together up to the max limit, with remaining shown in counter
   * @default "compact"
   */
  layout?: "fill" | "compact"
}
