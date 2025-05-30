// Static extensions (no configuration needed)
export { ColorExtension } from "./Color"
export { HighlightExtension } from "./Highlight"
export { TextStyleExtension } from "./TextStyle"
export { TypographyExtension } from "./Typography"
export { UnderlineExtension } from "./Underline"

// Pre-configured extensions
export { CustomTaskExtension } from "./CustomTask"
export { LinkExtension } from "./Link"
export { StarterKitExtension } from "./StarterKit"
export { TaskListExtension } from "./TaskList"
export { TextAlignExtension } from "./TextAlign"

// Dynamic extensions (require configuration)
export { createAccessibilityExtension } from "./Accessibility"
export { createCharacterCountExtension } from "./CharacterCount"
export { createMentionExtensions } from "./Mention"
export { createPlaceholderExtension } from "./Placeholder"

// Custom extensions
export { CustomTask } from "./CustomTask"
export { PersistSelection } from "./PersistSelection"
