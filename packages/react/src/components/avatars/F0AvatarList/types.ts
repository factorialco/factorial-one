import { AvatarVariant } from "../F0Avatar/types"

export const avatarListSizes = ["xs", "sm", "md"] as const

export type AvatarListSize = (typeof avatarListSizes)[number]

// Extract specific avatar types from the discriminated union
type PersonAvatar = Omit<Extract<AvatarVariant, { type: "person" }>, "type">
type TeamAvatar = Omit<Extract<AvatarVariant, { type: "team" }>, "type">
type CompanyAvatar = Omit<Extract<AvatarVariant, { type: "company" }>, "type">

// Discriminated union that enforces type consistency
export type F0AvatarListProps = {
  /**
   * The size of the avatars in the list.
   * @default "md"
   */
  size?: AvatarListSize

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
} & (
  | {
      type: "person"
      avatars: PersonAvatar[]
    }
  | {
      type: "team"
      avatars: TeamAvatar[]
    }
  | {
      type: "company"
      avatars: CompanyAvatar[]
    }
)
