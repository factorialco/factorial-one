import CharacterCount from "@tiptap/extension-character-count"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import TaskList from "@tiptap/extension-task-list"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import StarterKit from "@tiptap/starter-kit"
import { configureMention } from "../mention"
import { MentionedUser, mentionsConfig } from "../types"
import { Accessibility } from "./Accessibility"
import { CustomTask } from "./CustomTask"
import { PersistSelection } from "./PersistSelection"

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
    StarterKit.configure({
      heading: { levels: [1, 2, 3] },
      bulletList: {
        HTMLAttributes: {
          class: "f1-bullet-list",
        },
      },
      orderedList: {
        HTMLAttributes: {
          class: "f1-ordered-list",
        },
      },
    }),
    Underline,
    TextStyle,
    Color,
    Typography,
    Highlight,
    TaskList.configure({
      HTMLAttributes: {
        class: "f1-task-list",
      },
    }),
    CustomTask.configure({
      nested: true,
      HTMLAttributes: {
        class: "f1-task-item",
      },
    }),
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        rel: "noopener noreferrer",
        target: "_blank",
      },
    }),
    Placeholder.configure({ placeholder }),
    CharacterCount.configure({ limit: maxCharacters }),
    ...(mentionsConfig
      ? configureMention(
          mentionSuggestions,
          setMentionSuggestions,
          mentionsConfig.onMentionQueryStringChanged,
          mentionsConfig.users
        )
      : []),
    PersistSelection,
    Accessibility.configure({ label: placeholder || "Rich text editor" }),
  ]
}

export { ExtensionsConfiguration }
