import {
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
import { AIBlockExtension } from "@/experimental/RichText/CoreEditor/Extensions/AIBlock"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"

interface AIBlockConfig {
  buttons: { type: string; emoji: string; label: string }[]
  onClick: (type: string) => Promise<any>
  title: string
}

export const createBasicTextEditorExtensions = (
  placeholder: string,
  toolbarLabels: ToolbarLabels,
  groupLabels?: SlashCommandGroupLabels,
  aiBlockConfig?: AIBlockConfig
) => [
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
  MoodTrackerExtension,
  AIBlockExtension,
  PersistSelection,
  createPlaceholderExtension(placeholder),
  createAccessibilityExtension(placeholder),
  createSlashCommandExtension(toolbarLabels, groupLabels, aiBlockConfig),
]
