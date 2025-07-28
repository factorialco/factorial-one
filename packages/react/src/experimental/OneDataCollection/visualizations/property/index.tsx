import { PropertyRenderer } from "./types.ts"
import { AlertTagCell } from "./types/alertTag.tsx"
import { AmountCell } from "./types/amount.tsx"
import { AvatarListCell } from "./types/avatarList.tsx"
import { CompanyCell } from "./types/company.tsx"
import { DateCell } from "./types/date.tsx"
import { DotTagCell } from "./types/dotTag.tsx"
import { FileCell } from "./types/file.tsx"
import { FolderCell } from "./types/folder.tsx"
import { IconCell } from "./types/icon.tsx"
import { NumberCell } from "./types/number.tsx"
import { PersonCell } from "./types/person.tsx"
import { StatusCell } from "./types/status.tsx"
import { TagCell } from "./types/tag.tsx"
import { TagListCell } from "./types/tagList.tsx"
import { TeamCell } from "./types/team.tsx"
import { TextCell } from "./types/text.tsx"

/**
 * Renders a property value based on the renderer type.
 * @param renderer - The renderer type to use
 * @param args - The arguments to pass to the renderer
 * @returns The rendered property value
 */
export const propertyRenderers = {
  text: TextCell,
  number: NumberCell,
  date: DateCell,
  amount: AmountCell,
  avatarList: AvatarListCell,
  status: StatusCell,
  alertTag: AlertTagCell,
  person: PersonCell,
  company: CompanyCell,
  team: TeamCell,
  tag: TagCell,
  dotTag: DotTagCell,
  tagList: TagListCell,
  icon: IconCell,
  file: FileCell,
  folder: FolderCell,
} as const satisfies Record<string, PropertyRenderer<never>>

/**
 * The type of renderer to use for a property.
 */
export type PropertyRendererType = keyof typeof propertyRenderers
