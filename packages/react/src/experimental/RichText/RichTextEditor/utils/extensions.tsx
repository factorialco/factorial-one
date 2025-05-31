import {
  ColorExtension,
  CustomTaskExtension,
  HighlightExtension,
  LinkExtension,
  MentionedUser,
  MentionsConfig,
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
} from "@/experimental/RichText/CoreEditor"

interface ExtensionsConfigurationProps {
  mentionsConfig?: MentionsConfig
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
