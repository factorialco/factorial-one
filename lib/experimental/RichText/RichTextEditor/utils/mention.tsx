import Mention from "@tiptap/extension-mention"

import { MentionedUser } from "@/experimental/RichText/RichTextEditor"
import { Suggestion } from "@/experimental/RichText/RichTextEditor/utils/suggestion"

const CustomMention = Mention.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
      },
      label: {
        default: null,
      },
      href: {
        default: "#",
      },
    }
  },
})

function configureMention(
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  onMentionQueryStringChanged?: (
    query: string
  ) => Promise<MentionedUser[]> | undefined,
  users?: MentionedUser[]
) {
  if (!onMentionQueryStringChanged && !users?.length) {
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
          `@${node.attrs.label}`,
        ]
      },
      suggestion: Suggestion(
        mentionSuggestions,
        setMentionSuggestions,
        onMentionQueryStringChanged,
        users
      ),
    }),
  ]
}

export { configureMention }
