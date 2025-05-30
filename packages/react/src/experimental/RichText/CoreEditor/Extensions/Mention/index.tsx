import Mention from "@tiptap/extension-mention"
import {
  MentionedUser,
  mentionsConfig,
} from "../../../RichTextEditor/utils/types"
import { createSuggestionConfig } from "./suggestion"

const CustomMention = Mention.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: { default: null },
      label: { default: null },
      href: { default: "#" },
    }
  },
})

export const createMentionExtensions = (
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  mentionsConfig?: mentionsConfig
) => {
  if (!mentionsConfig?.users?.length) {
    return []
  }

  return [
    CustomMention.configure({
      HTMLAttributes: {
        class: "mention",
      },
      renderHTML({ options, node }) {
        return [
          "a",
          {
            onclick:
              "if(this.closest('.ProseMirror')?.getAttribute('contenteditable') === 'true') { event.preventDefault(); }",
            href: node.attrs.href || "#",
            class: options.HTMLAttributes.class,
            "data-id": node.attrs.id,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          `${node.attrs.label}`,
        ]
      },
      suggestion: createSuggestionConfig(
        mentionSuggestions,
        setMentionSuggestions,
        mentionsConfig.onMentionQueryStringChanged,
        mentionsConfig.users
      ),
    }),
  ]
}

// Export components for external use if needed
export { MentionItem } from "./MentionItem"
export { MentionList } from "./MentionList"
export { MentionPopover } from "./MentionPopover"
export type { MentionedUser, MentionNodeAttrs } from "./types"
