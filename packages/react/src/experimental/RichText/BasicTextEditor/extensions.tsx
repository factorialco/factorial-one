import {
  ColorExtension,
  createAccessibilityExtension,
  createPlaceholderExtension,
  createSlashCommandExtension,
  CustomTaskExtension,
  DetailsContentExtension,
  DetailsExtension,
  DetailsSummaryExtension,
  HighlightExtension,
  LinkExtension,
  MoodTrackerExtension,
  PersistSelection,
  StarterKitExtension,
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  ToolbarLabels,
  TypographyExtension,
  UnderlineExtension,
} from "@/experimental/RichText/CoreEditor"
import {
  AIBlockConfig,
  AIBlockExtension,
  AIBlockLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/AIBlock"
import {
  ChatConfig,
  ChatExtension,
} from "@/experimental/RichText/CoreEditor/Extensions/Chat"
import {
  LiveCompanionConfig,
  LiveCompanionExtension,
  LiveCompanionLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/LiveCompanion"
import {
  MoodTrackerConfig,
  MoodTrackerLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/MoodTracker"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import {
  TranscriptConfig,
  TranscriptExtension,
  TranscriptLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/Transcript"

type LocalChatLabels = {
  deleteBlock: string
  expand: string
  collapse: string
  messagesCount: string
  messagesCountSingular: string
}

export const createBasicTextEditorExtensions = (
  placeholder: string,
  toolbarLabels: ToolbarLabels,
  groupLabels?: SlashCommandGroupLabels,
  aiBlockConfig?: AIBlockConfig,
  aiBlockLabels?: AIBlockLabels,
  moodTrackerLabels?: MoodTrackerLabels,
  liveCompanionLabels?: LiveCompanionLabels,
  transcriptLabels?: TranscriptLabels,
  chatLabels?: LocalChatLabels
) => {
  // Create enhanced config with labels if both are provided
  const enhancedAIBlockConfig =
    aiBlockConfig && aiBlockLabels
      ? { ...aiBlockConfig, labels: aiBlockLabels }
      : aiBlockConfig

  // Create enhanced MoodTracker config with labels
  const enhancedMoodTrackerConfig: MoodTrackerConfig | undefined =
    moodTrackerLabels ? { labels: moodTrackerLabels } : undefined

  // Create enhanced LiveCompanion config with labels
  const enhancedLiveCompanionConfig: LiveCompanionConfig | undefined =
    liveCompanionLabels ? { labels: liveCompanionLabels } : undefined

  // Create enhanced Transcript config with labels
  const enhancedTranscriptConfig: TranscriptConfig | undefined =
    transcriptLabels ? { labels: transcriptLabels } : undefined

  // Create enhanced Chat config with labels
  const enhancedChatConfig: ChatConfig | undefined = chatLabels
    ? { labels: chatLabels as any }
    : undefined

  return [
    StarterKitExtension,
    UnderlineExtension,
    TextStyleExtension,
    ColorExtension,
    TypographyExtension,
    TaskListExtension,
    CustomTaskExtension,
    HighlightExtension,
    TextAlignExtension,
    LinkExtension,
    DetailsExtension,
    DetailsSummaryExtension,
    DetailsContentExtension,
    MoodTrackerExtension.configure({
      currentConfig: enhancedMoodTrackerConfig,
    }),
    LiveCompanionExtension.configure({
      currentConfig: enhancedLiveCompanionConfig,
    }),
    TranscriptExtension.configure({
      currentConfig: enhancedTranscriptConfig,
    }),
    ChatExtension.configure({
      currentConfig: enhancedChatConfig,
    }),
    AIBlockExtension.configure({
      currentConfig: enhancedAIBlockConfig,
    }),
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createAccessibilityExtension(placeholder),
    createSlashCommandExtension(
      toolbarLabels,
      groupLabels,
      enhancedAIBlockConfig
    ),
  ]
}
