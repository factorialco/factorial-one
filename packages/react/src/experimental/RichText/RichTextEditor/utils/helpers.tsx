import { Editor } from "@tiptap/react"

const getHeadingLabel = (editor: Editor) => {
  if (editor.isActive("heading")) {
    const headingLevel = editor.getAttributes("heading").level
    if (headingLevel === 1) return "H1"
    if (headingLevel === 2) return "H2"
    if (headingLevel === 3) return "H3"
  }
  return "Normal"
}

const getTextAlignLabel = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return "Left"
  if (editor.isActive({ textAlign: "center" })) return "Center"
  if (editor.isActive({ textAlign: "right" })) return "Right"
  if (editor.isActive({ textAlign: "justify" })) return "Justify"
  return "Left"
}

export { getHeadingLabel, getTextAlignLabel }
