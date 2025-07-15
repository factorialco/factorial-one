import { AvatarListMetadata } from "./types/avatarList.tsx"
import { CompanyMetadata } from "./types/company.tsx"
import { StatusMetadata } from "./types/status.tsx"
import { TagMetadata } from "./types/tag.tsx"
import { TeamMetadata } from "./types/team.tsx"
import { TextMetadata } from "./types/text.tsx"
import { UserMetadata } from "./types/user.tsx"

/**
 * Registry of all available metadata renderers for Card components.
 * Each renderer handles the display logic for a specific metadata type.
 */
export const metadataRenderers = {
  text: TextMetadata,
  avatarList: AvatarListMetadata,
  status: StatusMetadata,
  user: UserMetadata,
  company: CompanyMetadata,
  team: TeamMetadata,
  tag: TagMetadata,
} as const

export type MetadataRendererType = keyof typeof metadataRenderers
