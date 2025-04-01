import {
  AlignTextCenter,
  AlignTextJustify,
  AlignTextLeft,
  AlignTextRight,
} from "@/icons/app"
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

const getTextAlignIcon = (editor: Editor) => {
  if (editor.isActive({ textAlign: "left" })) return AlignTextLeft
  if (editor.isActive({ textAlign: "center" })) return AlignTextCenter
  if (editor.isActive({ textAlign: "right" })) return AlignTextRight
  if (editor.isActive({ textAlign: "justify" })) return AlignTextJustify
  return AlignTextLeft
}

export { getHeadingLabel, getTextAlignIcon, getTextAlignLabel }
