import { Plugin, PluginKey, TextSelection } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
import React from "react"
import { createRoot, Root } from "react-dom/client"
import { AddBlockButton } from "./AddBlockButton"
import { AddBlockButtonConfig } from "./types"

export const addBlockButtonPluginKey = new PluginKey("addBlockButton")

export interface AddBlockButtonState {
  currentButton: {
    id: string
    position: { top: number; left: number }
    nodePos: number
    element: HTMLElement
    root: Root
  } | null
}

export const createAddBlockButtonPlugin = (config?: AddBlockButtonConfig) => {
  // If disabled, return empty plugin
  if (config?.enabled === false) {
    return new Plugin({
      key: addBlockButtonPluginKey,
      state: {
        init(): AddBlockButtonState {
          return { currentButton: null }
        },
        apply(_, state: AddBlockButtonState): AddBlockButtonState {
          return state
        },
      },
    })
  }

  let view: EditorView | null = null
  let hoveredElement: HTMLElement | null = null
  let mouseListenersAttached = false
  let hideTimeout: NodeJS.Timeout | null = null
  let isMouseOverButton = false

  const createButton = (
    nodePos: number,
    position: { top: number; left: number }
  ) => {
    const id = `add-block-${nodePos}-${Date.now()}`
    const element = document.createElement("div")
    element.className = "add-block-button-container"
    element.style.position = "fixed"
    element.style.zIndex = "50"
    element.style.pointerEvents = "auto"
    document.body.appendChild(element)

    // Add hover listeners to the button container
    element.addEventListener("mouseenter", () => {
      isMouseOverButton = true
      if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = null
      }
    })

    element.addEventListener("mouseleave", () => {
      isMouseOverButton = false
      // Delay hiding when leaving the button
      hideTimeout = setTimeout(() => {
        if (!isMouseOverButton && !hoveredElement) {
          hideButton()
        }
      }, 800) // Longer delay when leaving the button
    })

    const root = createRoot(element)

    const handleAddBlock = (position: number) => {
      if (!view) return

      try {
        // Find the node at this position
        const resolvedPos = view.state.doc.resolve(position)
        let insertPos = position

        // If we're inside a node, find the end of it
        if (resolvedPos.nodeAfter) {
          insertPos = position + resolvedPos.nodeAfter.nodeSize
        } else if (resolvedPos.parent && resolvedPos.parent.isBlock) {
          // If we're at the end of a block, insert after it
          insertPos = resolvedPos.after()
        }

        // Create a new paragraph with a slash
        const paragraph = view.state.schema.nodes.paragraph.create(null, [
          view.state.schema.text("/"),
        ])

        // Insert the new paragraph
        const tr = view.state.tr.insert(insertPos, paragraph)

        // Set selection to after the slash
        const newSelection = TextSelection.create(tr.doc, insertPos + 2)
        tr.setSelection(newSelection)

        view.dispatch(tr)

        // Hide button after adding block
        hideButton()

        // Focus the editor
        setTimeout(() => {
          view?.focus()
        }, 10)
      } catch (error) {
        console.error("Error adding block:", error)
      }
    }

    try {
      root.render(
        React.createElement(AddBlockButton, {
          position,
          nodePos,
          config: config || { enabled: true },
          onAddBlock: handleAddBlock,
        })
      )
    } catch (error) {
      console.error("Error rendering AddBlockButton:", error)
    }

    return { id, position, nodePos, element, root }
  }

  const getNodePositionFromElement = (
    element: HTMLElement,
    view: EditorView
  ) => {
    try {
      const editorElement = view.dom.closest(".ProseMirror")
      if (!editorElement) return null

      // Find the position of this DOM element in the ProseMirror document
      let nodePos = -1

      // Try to find the position by checking if this element corresponds to a node
      view.state.doc.descendants((node, pos) => {
        if (node.isBlock && node.type.name !== "doc") {
          const domNode = view.nodeDOM(pos)
          if (
            domNode === element ||
            (domNode && domNode.contains && domNode.contains(element))
          ) {
            nodePos = pos
            return false // Stop searching
          }
        }
        return true
      })

      if (nodePos === -1) return null

      const rect = element.getBoundingClientRect()
      const editorRect = editorElement.getBoundingClientRect()

      if (rect.height > 0 && rect.width > 0) {
        return {
          nodePos: nodePos,
          position: {
            top: rect.top + rect.height / 2,
            left: editorRect.left - 5,
          },
        }
      }
    } catch (error) {
      console.warn("Error getting node position from element:", error)
    }

    return null
  }

  const cleanupButton = (button: AddBlockButtonState["currentButton"]) => {
    if (button) {
      try {
        // Remove event listeners before unmounting
        button.element.removeEventListener("mouseenter", () => {})
        button.element.removeEventListener("mouseleave", () => {})

        button.root.unmount()
        if (document.body.contains(button.element)) {
          document.body.removeChild(button.element)
        }
      } catch (error) {
        console.warn("Error cleaning up button:", error)
      }
    }
  }

  const showButtonForElement = (element: HTMLElement) => {
    if (!view) return

    // Clear any pending hide timeout
    if (hideTimeout) {
      clearTimeout(hideTimeout)
      hideTimeout = null
    }

    try {
      const nodeData = getNodePositionFromElement(element, view)
      if (!nodeData) return

      // Clear existing button
      const state = addBlockButtonPluginKey.getState(
        view.state
      ) as AddBlockButtonState
      if (state && state.currentButton) {
        cleanupButton(state.currentButton)
      }

      // Create new button
      const newButton = createButton(nodeData.nodePos, nodeData.position)

      // Update plugin state
      view.dispatch(
        view.state.tr.setMeta(addBlockButtonPluginKey, {
          type: "update",
          currentButton: newButton,
        })
      )
    } catch (error) {
      console.error("Error showing button:", error)
    }
  }

  const hideButton = () => {
    if (!view) return

    try {
      const state = addBlockButtonPluginKey.getState(
        view.state
      ) as AddBlockButtonState
      if (state && state.currentButton) {
        cleanupButton(state.currentButton)

        view.dispatch(
          view.state.tr.setMeta(addBlockButtonPluginKey, {
            type: "update",
            currentButton: null,
          })
        )
      }
    } catch (error) {
      console.error("Error hiding button:", error)
    }
  }

  const scheduleHide = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
    }

    hideTimeout = setTimeout(() => {
      if (!isMouseOverButton && !hoveredElement) {
        hideButton()
      }
    }, 500) // Increased delay to allow more time to move to button
  }

  const handleMouseEnter = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target) return

    // Clear any pending hide
    if (hideTimeout) {
      clearTimeout(hideTimeout)
      hideTimeout = null
    }

    // Find the closest block element
    let blockElement = target
    const proseMirrorElement = view?.dom

    if (!proseMirrorElement) return

    // Walk up the DOM tree to find a block element
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
        // Check if this element has a meaningful height (not empty)
        const rect = blockElement.getBoundingClientRect()
        if (rect.height > 10) {
          // Minimum height to show button
          hoveredElement = blockElement
          showButtonForElement(blockElement)
          break
        }
      }
      blockElement = blockElement.parentElement as HTMLElement
    }
  }

  const handleMouseLeave = (event: MouseEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement

    // Don't hide if moving to the button itself
    if (relatedTarget && relatedTarget.closest(".add-block-button-container")) {
      return
    }

    // Clear hovered element
    hoveredElement = null

    // Schedule hide with delay
    scheduleHide()
  }

  const attachMouseListeners = () => {
    if (!view || mouseListenersAttached) return

    const proseMirrorElement = view.dom
    if (proseMirrorElement) {
      proseMirrorElement.addEventListener("mouseenter", handleMouseEnter, true)
      proseMirrorElement.addEventListener("mouseleave", handleMouseLeave, true)
      mouseListenersAttached = true
    }
  }

  const detachMouseListeners = () => {
    if (!view || !mouseListenersAttached) return

    const proseMirrorElement = view.dom
    if (proseMirrorElement) {
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
      mouseListenersAttached = false
    }
  }

  return new Plugin({
    key: addBlockButtonPluginKey,
    state: {
      init(): AddBlockButtonState {
        return { currentButton: null }
      },
      apply(tr, state: AddBlockButtonState): AddBlockButtonState {
        const meta = tr.getMeta(addBlockButtonPluginKey)
        if (meta && meta.type === "update") {
          return { currentButton: meta.currentButton }
        }
        return state
      },
    },
    view: (editorView) => {
      view = editorView

      // Attach mouse listeners after a short delay
      setTimeout(() => {
        attachMouseListeners()
      }, 100)

      return {
        update: () => {
          // Re-attach listeners if needed
          if (!mouseListenersAttached) {
            setTimeout(() => {
              attachMouseListeners()
            }, 100)
          }
        },
        destroy: () => {
          try {
            // Clear any pending timeouts
            if (hideTimeout) {
              clearTimeout(hideTimeout)
              hideTimeout = null
            }

            detachMouseListeners()

            if (view && view.state) {
              const state = addBlockButtonPluginKey.getState(
                view.state
              ) as AddBlockButtonState
              if (state && state.currentButton) {
                cleanupButton(state.currentButton)
              }
            }
          } catch (error) {
            console.error("Error in plugin destroy:", error)
          }
        },
      }
    },
  })
}
