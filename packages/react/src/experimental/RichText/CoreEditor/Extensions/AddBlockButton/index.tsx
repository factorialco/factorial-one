import { Extension } from "@tiptap/core"
import { createAddBlockButtonPlugin } from "./plugin"
import { AddBlockButtonConfig } from "./types"

export const createAddBlockButtonExtension = (
  config?: AddBlockButtonConfig
) => {
  try {
    return Extension.create({
      name: "addBlockButton",

      addOptions() {
        return {
          config: config || { enabled: true },
        }
      },

      addProseMirrorPlugins() {
        try {
          return [createAddBlockButtonPlugin(this.options.config)]
        } catch (error) {
          console.error("Error creating AddBlockButton plugin:", error)
          return []
        }
      },
    })
  } catch (error) {
    console.error("Error creating AddBlockButton extension:", error)
    // Return a minimal extension that doesn't break
    return Extension.create({
      name: "addBlockButton",
      addOptions() {
        return {}
      },
    })
  }
}

export const AddBlockButtonExtension = createAddBlockButtonExtension()

export { AddBlockButton } from "./AddBlockButton"
export * from "./types"
