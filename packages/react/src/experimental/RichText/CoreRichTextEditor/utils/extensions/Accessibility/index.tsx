import { Extension } from "@tiptap/react"

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

export { Accessibility }
