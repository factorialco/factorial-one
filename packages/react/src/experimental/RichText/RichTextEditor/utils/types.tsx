import { IconType } from "@/factorial-one"
import { JSONContent } from "@tiptap/react"
import { FileType } from "./constants"

type MentionedUser = {
  id: number
  label: string
  image_url?: string
  href?: string
}

type resultType = {
  value: string | null
  mentionIds?: number[]
  json?: JSONContent | null
}

type enhanceTextParams = {
  text: string
  selectedIntent?: string
  customIntent?: string
  context?: string
}

type enhancedTextResponse = {
  success: boolean
  text: string
  error?: string
}

type errorConfig = {
  onClose?: () => void
  closeErrorButtonLabel?: string
}

type enhanceLabelsType = {
  defaultError: string
  enhanceButtonLabel: string
  acceptChangesButtonLabel: string
  rejectChangesButtonLabel: string
  repeatButtonLabel: string
  customPromptPlaceholder: string
  loadingEnhanceLabel: string
}

type EnhancementOption = {
  id: string
  label: string
  subOptions?: EnhancementOption[]
}

type enhanceConfig = {
  onEnhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  enhancementOptions?: EnhancementOption[]
  enhanceLabels: enhanceLabelsType
}

type mentionsConfig = {
  onMentionQueryStringChanged?: (
    queryString: string
  ) => Promise<MentionedUser[]> | undefined
  users: MentionedUser[]
}

type filesConfig = {
  onFiles: (files: File[]) => void
  multipleFiles: boolean
  maxFileSize?: number
  acceptedFileType?: FileType[]
}

type actionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  variant: "default" | "outline" | "neutral" | undefined
  icon?: IconType
}

type toggleActionType = {
  label: string
  checked: boolean
  onClick: (checked?: boolean) => void
  disabled?: boolean
  hideLabel?: boolean
}

type secondaryActionType = (actionType | toggleActionType) & {
  type?: "button" | "switch"
}

type subActionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  icon?: IconType
}

type primaryActionType = {
  action: actionType
  subActions?: subActionType[]
}

type toolbarLabels = {
  bold: string
  italic: string
  underline: string
  strike: string
  highlight: string
  heading1: string
  heading2: string
  heading3: string
  left: string
  center: string
  right: string
  justify: string
  bulletList: string
  orderedList: string
  taskList: string
  codeBlock: string
  horizontalRule: string
  quote: string
  moreOptions: string
  code: string
  divider: string
  bullet: string
  ordered: string
  task: string
  linkPlaceholder: string
  linkLabel: string
  linkPaste: string
  close: string
  slashCommand: string
  noResults: string
}

type heightType =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | "auto"

type lastIntentType = {
  selectedIntent?: string
  customIntent?: string
} | null

type editorStateType = {
  html: string
  json: JSONContent | null
}

export type {
  actionType,
  editorStateType,
  enhanceConfig,
  enhancedTextResponse,
  enhanceLabelsType,
  EnhancementOption,
  enhanceTextParams,
  errorConfig,
  filesConfig,
  heightType,
  lastIntentType,
  MentionedUser,
  mentionsConfig,
  primaryActionType,
  resultType,
  secondaryActionType,
  subActionType,
  toolbarLabels,
}
