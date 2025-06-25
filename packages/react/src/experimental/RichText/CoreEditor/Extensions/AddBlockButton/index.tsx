import { Icon } from "@/components/Utilities/Icon"
import { Plus } from "@/icons/app"
import { Extension } from "@tiptap/core"
import { Plugin, PluginKey, TextSelection } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import React from "react"
import { createRoot, Root } from "react-dom/client"

export interface AddBlockButtonLabels {
  addBlock: string
  addBlockHint: string
}

export interface AddBlockButtonConfig {
  enabled?: boolean
  labels?: AddBlockButtonLabels
}

interface AddBlockButtonProps {
  position: { top: number; left: number }
  onAddBlock: () => void
  config?: AddBlockButtonConfig
}

const AddBlockButton: React.FC<AddBlockButtonProps> = ({
  position,
  onAddBlock,
  config,
}) => {
  const labels = config?.labels || {
    addBlock: "Add block",
    addBlockHint: "Click to add a block below",
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onAddBlock()
  }

  return (
    <div
      className="pointer-events-auto fixed z-50"
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-100%, -50%)",
      }}
      title={labels.addBlockHint}
    >
      <button
        onClick={handleClick}
        className="shadow-sm flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-f1-border-secondary bg-f1-background-tertiary transition-colors hover:bg-f1-background-secondary"
        type="button"
        aria-label={labels.addBlock}
      >
        <Icon icon={Plus} size="sm" />
      </button>
    </div>
  )
}

const addBlockButtonPluginKey = new PluginKey("addBlockButton")

const createAddBlockButtonPlugin = (config?: AddBlockButtonConfig) => {
  if (config?.enabled === false) {
    return new Plugin({
      key: addBlockButtonPluginKey,
    })
  }

  let view: EditorView | null = null
  let currentButton: { element: HTMLElement; root: Root } | null = null
  let hideTimeout: NodeJS.Timeout | null = null
  let hoveredElement: HTMLElement | null = null
  let isMouseOverButton = false

  const showButton = (targetElement: HTMLElement) => {
    if (!view) return

    // Clear existing timeout
    if (hideTimeout) {
      clearTimeout(hideTimeout)
      hideTimeout = null
    }

    // Remove existing button if it's for a different element
    if (currentButton && hoveredElement !== targetElement) {
      currentButton.root.unmount()
      document.body.removeChild(currentButton.element)
      currentButton = null
    }

    // Don't create button if one already exists for this element
    if (currentButton && hoveredElement === targetElement) {
      return
    }

    hoveredElement = targetElement

    // Calculate position
    const rect = targetElement.getBoundingClientRect()
    const editorRect = view.dom.getBoundingClientRect()

    const position = {
      top: rect.top + rect.height / 2,
      left: editorRect.left - 5,
    }

    // Create button element
    const buttonElement = document.createElement("div")
    document.body.appendChild(buttonElement)

    // Add mouse event listeners to button
    buttonElement.addEventListener("mouseenter", () => {
      isMouseOverButton = true
      if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = null
      }
    })

    buttonElement.addEventListener("mouseleave", () => {
      isMouseOverButton = false
      scheduleHide()
    })

    const root = createRoot(buttonElement)
    currentButton = { element: buttonElement, root }

    const handleAddBlock = () => {
      if (!view) return

      try {
        let insertPos = -1
        let foundNode = null

        // Find the node position by traversing the document
        view.state.doc.descendants((node, pos) => {
          if (insertPos !== -1) return false // Already found

          const domNode = view!.nodeDOM(pos)

          // Check if this DOM node matches our target element or contains it
          if (
            domNode === targetElement ||
            (domNode && domNode.contains && domNode.contains(targetElement)) ||
            (targetElement &&
              targetElement.contains &&
              targetElement.contains(domNode as Node))
          ) {
            foundNode = node

            // For all nodes, insert after the entire node
            insertPos = pos + node.nodeSize
            return false // Stop traversing
          }

          return true // Continue traversing
        })

        // If we still couldn't find a position, try the original method as fallback
        if (insertPos === -1) {
          const pos = view.posAtDOM(targetElement, 0)

          if (pos >= 0) {
            const resolvedPos = view.state.doc.resolve(pos)
            insertPos = resolvedPos.after()
          }
        }

        if (insertPos === -1 || insertPos < 0) {
          return
        }

        // Make sure we have a valid insert position
        if (insertPos > view.state.doc.content.size) {
          insertPos = view.state.doc.content.size
        }

        const paragraph = view.state.schema.nodes.paragraph.create(null, [
          view.state.schema.text("/"),
        ])

        const tr = view.state.tr.insert(insertPos, paragraph)
        const newSelection = TextSelection.create(tr.doc, insertPos + 2)
        tr.setSelection(newSelection)

        view.dispatch(tr)

        hideButton()
        setTimeout(() => view?.focus(), 10)
      } catch (error) {
        console.error("Error adding block:", error)
      }
    }

    root.render(
      <AddBlockButton
        position={position}
        onAddBlock={handleAddBlock}
        config={config}
      />
    )
  }

  const hideButton = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
      hideTimeout = null
    }

    if (currentButton) {
      currentButton.root.unmount()
      document.body.removeChild(currentButton.element)
      currentButton = null
    }

    hoveredElement = null
    isMouseOverButton = false
  }

  const scheduleHide = () => {
    if (hideTimeout) clearTimeout(hideTimeout)
    hideTimeout = setTimeout(() => {
      // Check if mouse is still over the button or the hovered element
      if (!isMouseOverButton && !hoveredElement) {
        hideButton()
      }
    }, 300)
  }

  const handleMouseEnter = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target || !view) return

    // Find the block element
    let blockElement = target
    const proseMirrorElement = view.dom

    while (blockElement && blockElement !== proseMirrorElement) {
      const tagName = blockElement.tagName?.toLowerCase()
      if (
        tagName &&
        [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "ul",
          "ol",
          "li",
          "pre",
          "div",
        ].includes(tagName)
      ) {
        const rect = blockElement.getBoundingClientRect()
        if (rect.height > 10) {
          hoveredElement = blockElement
          showButton(blockElement)
          break
        }
      }
      blockElement = blockElement.parentElement as HTMLElement
    }
  }

  const handleMouseLeave = (event: MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement

    // Don't hide if moving to the button
    if (
      relatedTarget &&
      currentButton &&
      currentButton.element.contains(relatedTarget)
    ) {
      return
    }

    // Don't hide if still within the same hovered element
    if (
      relatedTarget &&
      hoveredElement &&
      hoveredElement.contains(relatedTarget)
    ) {
      return
    }

    hoveredElement = null
    scheduleHide()
  }

  const handleUserInteraction = () => hideButton()

  return new Plugin({
    key: addBlockButtonPluginKey,
    view: (editorView) => {
      view = editorView

      const proseMirrorElement = view.dom
      proseMirrorElement.addEventListener("mouseenter", handleMouseEnter, true)
      proseMirrorElement.addEventListener("mouseleave", handleMouseLeave, true)
      proseMirrorElement.addEventListener("keydown", handleUserInteraction)
      proseMirrorElement.addEventListener("click", handleUserInteraction)
      proseMirrorElement.addEventListener("input", handleUserInteraction)

      return {
        destroy: () => {
          if (hideTimeout) {
            clearTimeout(hideTimeout)
          }

          proseMirrorElement.removeEventListener(
            "mouseenter",
            handleMouseEnter,
            true
          )
          proseMirrorElement.removeEventListener(
            "mouseleave",
            handleMouseLeave,
            true
          )
          proseMirrorElement.removeEventListener(
            "keydown",
            handleUserInteraction
          )
          proseMirrorElement.removeEventListener("click", handleUserInteraction)
          proseMirrorElement.removeEventListener("input", handleUserInteraction)

          if (currentButton) {
            currentButton.root.unmount()
            document.body.removeChild(currentButton.element)
          }
        },
      }
    },
  })
}

export const createAddBlockButtonExtension = (
  config?: AddBlockButtonConfig
) => {
  return Extension.create({
    name: "addBlockButton",

    addOptions() {
      return {
        config: config || { enabled: true },
      }
    },

    addProseMirrorPlugins() {
      return [createAddBlockButtonPlugin(this.options.config)]
    },
  })
}

export const AddBlockButtonExtension = createAddBlockButtonExtension()
export { AddBlockButton }
