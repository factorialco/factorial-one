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
  moodTrackerLabels?: MoodTrackerLabels
) => {
  // Create enhanced config with labels if both are provided
  const enhancedAIBlockConfig =
    aiBlockConfig && aiBlockLabels
      ? { ...aiBlockConfig, labels: aiBlockLabels }
      : aiBlockConfig

  // Create enhanced MoodTracker config with labels
  const enhancedMoodTrackerConfig: MoodTrackerConfig | undefined =
    moodTrackerLabels ? { labels: moodTrackerLabels } : undefined

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
    AIBlockExtension.configure({
      currentConfig: enhancedAIBlockConfig,
    }),
    AddBlockButtonExtension,
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
