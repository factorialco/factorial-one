import { IconType } from "@/components/F0Icon"
import { NewColor } from "@/components/tags/F0TagDot"
import { StatusVariant } from "@/components/tags/F0TagStatus"
import { Message, User } from "../CoreEditor/Extensions/Transcript"

type NotesTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
  insertAIBlock: () => void
  insertTranscript: (title: string, users: User[], messages: Message[]) => void
}

type actionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  icon?: IconType
  hideLabel?: boolean
  variant?: "default" | "outline" | "neutral"
}

type MetadataItemValue =
  | { type: "text"; content: string; label: string }
  | { type: "status"; label: string; variant: StatusVariant }
  | { type: "dot-tag"; label: string; color: NewColor }
  | { type: "tag"; label: string; icon?: IconType }

export type { actionType, MetadataItemValue, NotesTextEditorHandle }
