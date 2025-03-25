import { IconType } from "@/factorial-one"
import { variants } from "@/ui/button"

type RichTextEditorHeight =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"

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

type ToolbarFormatConfig = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strike?: boolean
  highlight?: boolean
}

type ToolbarTextSizeConfig = {
  normal?: boolean
  heading1?: boolean
  heading2?: boolean
  heading3?: boolean
}

type ToolbarTextAlignConfig = {
  left?: boolean
  center?: boolean
  right?: boolean
  justify?: boolean
}

type ToolbarListConfig = {
  bullet?: boolean
  ordered?: boolean
  task?: boolean
}

type ToolbarMoreOptionsConfig = {
  code?: boolean
  horizontalRule?: boolean
  quote?: boolean
}

type toolbarConfig =
  | "all"
  | "none"
  | {
      format?: ToolbarFormatConfig
      textSize?: ToolbarTextSizeConfig
      textAlign?: ToolbarTextAlignConfig
      list?: ToolbarListConfig
      moreOptions?: ToolbarMoreOptionsConfig
      fullScreen?: boolean
    }

type enhanceTextParams = {
  text: string
  type: string
  intent?: string
  context?: string
}

type enhancedTextResponse = {
  success: boolean
  text: string
  error?: string
}

type enhanceLabelsType = {
  defaultError: string
  enhanceButtonLabel: string
  acceptChangesButtonLabel: string
  rejectChangesButtonLabel: string
  customPromptPlaceholder: string
}

type EnhancementOption = {
  id: string
  label: string
  prompt: string
  subOptions?: EnhancementOption[]
}

type enhanceConfig = {
  onEnhanceText?: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  enhancementOptions?: EnhancementOption[]
  canUseCustomPrompt?: boolean
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

type actionConfig = {
  label: string
  onClick: () => void
  disabled?: boolean
  variant: (typeof variants)[number]
  icon?: IconType
}

type linkPopupConfig = {
  linkPlaceholder: string
}

export { FileType }

export type {
  actionConfig,
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
  RichTextEditorHeight,
  toolbarConfig,
}
