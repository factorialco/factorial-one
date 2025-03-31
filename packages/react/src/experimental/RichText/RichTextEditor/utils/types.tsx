import { IconType } from "@/factorial-one"

type MentionedUser = {
  id: number
  label: string
  image_url?: string
  href?: string
}

type MentionChangeResult = {
  value: string
  ids: number[]
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

type enhanceLabelsType = {
  defaultError: string
  closeErrorButtonLabel: string
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

enum FileType {
  PDF = "pdf",
  IMAGE = "image",
  DOC = "doc",
  EXCEL = "excel",
  PPT = "ppt",
  TXT = "txt",
  VIDEO = "video",
  AUDIO = "audio",
  ARCHIVE = "archive",
  CSV = "csv",
  HTML = "html",
  MARKDOWN = "markdown",
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
  close: string
}

export { FileType }

export type {
  actionType,
  enhanceConfig,
  enhancedTextResponse,
  enhanceLabelsType,
  EnhancementOption,
  enhanceTextParams,
  filesConfig,
  MentionChangeResult,
  MentionedUser,
  mentionsConfig,
  primaryActionType,
  subActionType,
  toolbarLabels,
}
