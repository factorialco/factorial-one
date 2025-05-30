import { MentionedUser } from "../../../RichTextEditor/utils/types"

export type { MentionedUser }

export interface MentionNodeAttrs {
  id: string
  label: string
  image_url?: string
  href?: string
}

export interface MentionListRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean
}

export interface MentionItemComponentProps {
  item: MentionedUser
  index: number
  selected: boolean
}
