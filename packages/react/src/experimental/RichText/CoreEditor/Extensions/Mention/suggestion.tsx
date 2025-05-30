import { Editor, ReactRenderer } from "@tiptap/react"
import { createRoot, Root } from "react-dom/client"
import { MentionList } from "./MentionList"
import { MentionPopover } from "./MentionPopover"
import { MentionedUser, MentionListRef, MentionNodeAttrs } from "./types"

export function createSuggestionConfig(
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  onMentionQueryStringChanged?: (
    query: string
  ) => Promise<MentionedUser[]> | undefined,
  users?: MentionedUser[]
) {
  return {
    char: "@",
    minLength: 0,
    items: async ({ query }: { query: string }) => {
      if (onMentionQueryStringChanged) {
        try {
          const suggestions = await onMentionQueryStringChanged(query)
          setMentionSuggestions(suggestions || [])
          return suggestions || []
        } catch {
          return []
        }
      } else if (users) {
        const normalizedQuery = query.toLowerCase().trim()
        let filtered: MentionedUser[]
        if (!normalizedQuery) {
          filtered = users
        } else {
          filtered = users.filter((user) =>
            user.label.toLowerCase().includes(normalizedQuery)
          )
        }
        setMentionSuggestions(filtered)
        return filtered
      }
      return mentionSuggestions
    },
    render: () => {
      let component: ReactRenderer | null = null
      let popoverRoot: Root | null = null
      let container: HTMLDivElement | null = null

      const getAtSymbolRect = (): DOMRect => {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const { startContainer, startOffset } = range
          if (startContainer.nodeType === Node.TEXT_NODE) {
            const textContent = startContainer.textContent || ""
            const index = textContent.lastIndexOf("@", startOffset)
            if (index !== -1) {
              const atRange = document.createRange()
              atRange.setStart(startContainer, index)
              atRange.setEnd(startContainer, index + 1)
              return atRange.getBoundingClientRect()
            }
          }
          return range.getBoundingClientRect()
        }
        return document.body.getBoundingClientRect()
      }

      return {
        onStart: (props: {
          items: MentionedUser[]
          command: (attrs: MentionNodeAttrs) => void
          clientRect?: (() => DOMRect | null) | null
          editor: Editor
          range: { from: number; to: number }
        }) => {
          const commandFn = (item: MentionedUser) => {
            props.command({
              id: String(item.id),
              label: item.label,
              image_url: item.image_url,
              href: item.href,
            })
          }
          component = new ReactRenderer(MentionList, {
            props: { items: props.items, command: commandFn },
            editor: props.editor,
          })
          const safeGetRect = () => {
            if (props.clientRect) {
              const rect = props.clientRect()
              if (rect && rect.width && rect.height) return rect
            }
            return getAtSymbolRect()
          }
          const anchorRect = safeGetRect()

          container = document.createElement("div")
          document.body.appendChild(container)

          popoverRoot = createRoot(container)
          popoverRoot.render(
            <MentionPopover
              content={component.element as HTMLElement}
              anchorRect={anchorRect}
              editor={props.editor}
            />
          )
          props.editor?.commands.focus()
        },
        onUpdate: (props: {
          items: MentionedUser[]
          clientRect?: (() => DOMRect | null) | null
          editor: Editor
        }) => {
          if (!component || !container || !popoverRoot) return
          component.updateProps({ items: props.items })
          const safeGetRect = () => {
            if (props.clientRect) {
              const rect = props.clientRect()
              if (rect && rect.width && rect.height) return rect
            }
            return getAtSymbolRect()
          }
          const anchorRect = safeGetRect()
          popoverRoot.render(
            <MentionPopover
              content={component.element as HTMLElement}
              anchorRect={anchorRect}
              editor={props.editor}
            />
          )
        },
        onKeyDown: (props: { event: KeyboardEvent }) => {
          if (!component) return false
          if (
            props.event.key === "ArrowUp" ||
            props.event.key === "ArrowDown"
          ) {
            return (component.ref as MentionListRef)?.onKeyDown(props) || false
          }
          if (props.event.key === "Escape") {
            if (popoverRoot && container) {
              popoverRoot.unmount()
              container.remove()
            }
            return true
          }
          return (component.ref as MentionListRef)?.onKeyDown(props) || false
        },
        onExit() {
          if (popoverRoot && container) {
            popoverRoot.unmount()
            container.remove()
          }
          component?.destroy()
        },
      }
    },
  }
}
