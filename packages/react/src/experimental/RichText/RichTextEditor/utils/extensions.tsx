import CharacterCount from "@tiptap/extension-character-count"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import { Extension } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { configureMention } from "./mention"
import { PersistSelection } from "./persistSelection"
import { MentionedUser, mentionsConfig } from "./types"

interface ExtensionsConfigurationProps {
  mentionsConfig?: mentionsConfig
  mentionSuggestions: MentionedUser[]
  setMentionSuggestions: (suggestions: MentionedUser[]) => void
  placeholder: string
  maxCharacters?: number
}

const Accessibility = Extension.create({
  name: "accessibility",
  addOptions() {
    return {
      label: "Rich text editor",
    }
  },
  onTransaction() {
    this.editor.view.dom.setAttribute("aria-label", this.options.label)
  },

  onCreate() {
    this.editor.view.dom.setAttribute("aria-label", this.options.label)
  },
})

const ExtensionsConfiguration = ({
  mentionsConfig,
  mentionSuggestions,
  setMentionSuggestions,
  placeholder,
  maxCharacters,
}: ExtensionsConfigurationProps) => {
  return [
    StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
    Underline,
    TextStyle,
    Color,
    Image,
    Typography,
    Highlight,
    TaskList,
    TaskItem.configure({ nested: true }),
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
