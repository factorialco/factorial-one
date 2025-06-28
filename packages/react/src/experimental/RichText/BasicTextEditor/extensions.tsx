import {
  AddBlockButtonExtension,
  ColorExtension,
  createAccessibilityExtension,
  createPlaceholderExtension,
  createSlashCommandExtension,
  CustomTaskExtension,
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
  AIChatConfig,
  AIChatExtension,
  AIChatLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/AIChat"
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

export const createBasicTextEditorExtensions = (
  placeholder: string,
  toolbarLabels: ToolbarLabels,
  groupLabels?: SlashCommandGroupLabels,
  aiBlockConfig?: AIBlockConfig,
  aiBlockLabels?: AIBlockLabels,
  moodTrackerLabels?: MoodTrackerLabels,
  liveCompanionLabels?: LiveCompanionLabels,
  aiChatConfig?: AIChatConfig,
  aiChatLabels?: AIChatLabels
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

  // Create enhanced AIChat config with labels
  const enhancedAIChatConfig: AIChatConfig | undefined =
    aiChatConfig || aiChatLabels
      ? {
          ...aiChatConfig,
          labels: aiChatLabels,
        }
      : {}

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
    MoodTrackerExtension.configure({
      currentConfig: enhancedMoodTrackerConfig,
    }),
    LiveCompanionExtension.configure({
      currentConfig: enhancedLiveCompanionConfig,
    }),
    AIBlockExtension.configure({
      currentConfig: enhancedAIBlockConfig,
    }),
    AIChatExtension.configure({
      currentConfig: enhancedAIChatConfig,
    }),
    AddBlockButtonExtension,
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createAccessibilityExtension(placeholder),
    createSlashCommandExtension(
      toolbarLabels,
      groupLabels,
      enhancedAIBlockConfig,
      enhancedAIChatConfig
    ),
  ]
}
