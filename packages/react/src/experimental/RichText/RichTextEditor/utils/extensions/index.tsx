import {
  ColorExtension,
  CustomTaskExtension,
  HighlightExtension,
  LinkExtension,
  PersistSelection,
  StarterKitExtension,
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  TypographyExtension,
  UnderlineExtension,
  createAccessibilityExtension,
  createCharacterCountExtension,
  createMentionExtensions,
  createPlaceholderExtension,
} from "@/experimental/RichText/CoreEditor/Extensions"
import { MentionedUser, mentionsConfig } from "../types"

interface ExtensionsConfigurationProps {
  mentionsConfig?: mentionsConfig
  mentionSuggestions: MentionedUser[]
  setMentionSuggestions: (suggestions: MentionedUser[]) => void
  placeholder: string
  maxCharacters?: number
}

const ExtensionsConfiguration = ({
  mentionsConfig,
  mentionSuggestions,
  setMentionSuggestions,
  placeholder,
  maxCharacters,
}: ExtensionsConfigurationProps) => {
  return [
    StarterKitExtension,
    UnderlineExtension,
    TextStyleExtension,
    ColorExtension,
    TypographyExtension,
    HighlightExtension,
    TaskListExtension,
    CustomTaskExtension,
    TextAlignExtension,
    LinkExtension,
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createCharacterCountExtension(maxCharacters),
    ...createMentionExtensions(
      mentionSuggestions,
      setMentionSuggestions,
      mentionsConfig
    ),
    createAccessibilityExtension(placeholder),
  ]
}

export { ExtensionsConfiguration }
