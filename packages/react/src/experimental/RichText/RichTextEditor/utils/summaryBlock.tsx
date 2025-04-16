import { Node, mergeAttributes } from "@tiptap/core"
import { ReactNodeViewRenderer } from "@tiptap/react"
import { SummaryBlockView } from "../SummaryBlock"

// Define the Summary Block node
export const SummaryBlock = Node.create({
  name: "summaryBlock",
  group: "block",
  content: "block*",
  draggable: false,
  selectable: true,

  addAttributes() {
    return {
      summary: {
        default: "",
      },
      highlights: {
        default: [],
      },
      nextSteps: {
        default: [],
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="summary-block"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        "data-type": "summary-block",
        "data-selectable": "true",
        class: "user-select-text",
        style: "user-select: text; -webkit-user-select: text;",
      }),
      0,
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(SummaryBlockView, {
      stopEvent: ({ event }) => {
        if (
          event.type === "mousedown" ||
          event.type === "mouseup" ||
          event.type === "click" ||
          event.type === "dblclick" ||
          event.type === "mousemove" ||
          event.type === "selectstart"
        ) {
          const target = event.target as HTMLElement
          if (
            target.classList.contains("user-select-text") ||
            target.closest(".user-select-text") ||
            target.getAttribute("data-selectable") === "true" ||
            target.closest('[data-selectable="true"]')
          ) {
            return false
          }
        }
        return false
      },
    })
  },
})
