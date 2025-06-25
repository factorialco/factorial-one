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
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"

export const createBasicTextEditorExtensions = (
  placeholder: string,
  toolbarLabels: ToolbarLabels,
  groupLabels?: SlashCommandGroupLabels
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
  PersistSelection,
  createPlaceholderExtension(placeholder),
  createAccessibilityExtension(placeholder),
  createSlashCommandExtension(toolbarLabels, groupLabels),
]
