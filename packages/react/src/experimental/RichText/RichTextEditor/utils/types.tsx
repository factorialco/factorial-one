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

type linkPopupConfig = {
  linkPlaceholder: string
  linkLabel: string
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
  linkPopupConfig,
  MentionChangeResult,
  MentionedUser,
  mentionsConfig,
  primaryActionType,
  subActionType,
}
