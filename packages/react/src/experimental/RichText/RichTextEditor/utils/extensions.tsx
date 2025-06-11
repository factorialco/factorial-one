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
  allowTaskList?: boolean
}

const ExtensionsConfiguration = ({
  mentionsConfig,
  mentionSuggestions,
  setMentionSuggestions,
  placeholder,
  maxCharacters,
  allowTaskList = true,
}: ExtensionsConfigurationProps) => {
  return [
    StarterKitExtension,
    UnderlineExtension,
    TextStyleExtension,
    ColorExtension,
    TypographyExtension,
    HighlightExtension,
    TextAlignExtension,
    LinkExtension,
    PersistSelection,
    ...(allowTaskList ? [TaskListExtension, CustomTaskExtension] : []),
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
