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

type toolbarConfig = {
  format?: {
    bold?: boolean
    italic?: boolean
    underline?: boolean
    highlight?: boolean
  }
  textSize?: {
    normal?: boolean
    heading1?: boolean
    heading2?: boolean
    heading3?: boolean
  }
  textAlign?: {
    left?: boolean
    center?: boolean
    right?: boolean
    justify?: boolean
  }
  list?: {
    bullet?: boolean
    ordered?: boolean
    task?: boolean
  }
  moreOptions?: {
    code?: boolean
    horizontalRule?: boolean
    quote?: boolean
  }
  fullScreen?: boolean
}

// Types related to enhancements

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
  onEnhanceText?: ({
    text,
    type,
    intent,
    context,
  }: enhanceTextParams) => Promise<enhancedTextResponse>
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

type filesConfig = {
  onFiles: (files: File[]) => void
  multipleFiles: boolean
  maxFileSize?: number
}

export type {
  EnhancementOption,
  MentionChangeResult,
  MentionedUser,
  RichTextEditorHeight,
  enhanceConfig,
  enhanceLabelsType,
  enhanceTextParams,
  enhancedTextResponse,
  filesConfig,
  mentionsConfig,
  toolbarConfig,
}
