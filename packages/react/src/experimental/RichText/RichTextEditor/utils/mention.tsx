import * as Popover from "@radix-ui/react-popover"
import Mention from "@tiptap/extension-mention"
import { ReactRenderer } from "@tiptap/react"
import { createRoot, Root } from "react-dom/client"
import screenfull from "screenfull"
import { MentionList } from "../MentionList"
import { MentionedUser } from "./types"

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

function configureMention(
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  onMentionQueryStringChanged?: (
    query: string
  ) => Promise<MentionedUser[]> | undefined,
  users?: MentionedUser[]
) {
  if (!users?.length) {
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

interface MentionNodeAttrs {
  id: string
  label: string
  image_url?: string
  href?: string
}

function Suggestion(
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
          filtered = users.slice(0, 5)
        } else {
          filtered = users
            .filter((user) =>
              user.label.toLowerCase().includes(normalizedQuery)
            )
            .slice(0, 5)
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

      const PopoverComponent = ({
        content,
        anchorRect,
        editor,
      }: {
        content: HTMLElement
        anchorRect: DOMRect
        editor: any
      }) => {
        const anchorStyle: React.CSSProperties = {
          position: "absolute",
          top: anchorRect.bottom + window.scrollY,
          left: anchorRect.left + window.scrollX,
          width: anchorRect.width,
          height: anchorRect.height,
        }
        return (
          <Popover.Root
            open
            modal={false}
            onOpenChange={(open) => {
              if (open) {
                editor?.commands.focus()
              }
            }}
          >
            <div style={anchorStyle} />
            <Popover.Anchor asChild>
              <div style={anchorStyle} />
            </Popover.Anchor>
            <Popover.Content
              side="bottom"
              align="start"
              sideOffset={0}
              collisionPadding={10}
              style={{ zIndex: 1000 }}
              onMouseDownCapture={() => {
                editor?.commands.focus()
              }}
              onOpenAutoFocus={(event) => {
                event.preventDefault()
              }}
              onCloseAutoFocus={(event) => {
                event.preventDefault()
              }}
            >
              <div
                ref={(el) => {
                  if (el && content.parentNode !== el) {
                    el.appendChild(content)
                  }
                }}
              />
            </Popover.Content>
          </Popover.Root>
        )
      }

      return {
        onStart: (props: {
          items: MentionedUser[]
          command: (attrs: MentionNodeAttrs) => void
          clientRect?: (() => DOMRect | null) | null
          editor: any
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
          const parentElement =
            screenfull.isFullscreen && screenfull.element
              ? screenfull.element
              : document.body
          parentElement.appendChild(container)

          popoverRoot = createRoot(container)
          popoverRoot.render(
            <PopoverComponent
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
          editor: any
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
            <PopoverComponent
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
            return (component.ref as any)?.onKeyDown(props) || false
          }
          if (props.event.key === "Escape") {
            if (popoverRoot && container) {
              popoverRoot.unmount()
              container.remove()
            }
            return true
          }
          return (component.ref as any)?.onKeyDown(props) || false
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

export { configureMention }
