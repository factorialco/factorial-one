import { Editor } from "@tiptap/react"
import { enhanceTextType } from ".."

function isValidSelectionForEnhancement(text: string): boolean {
  return text.trim().length > 0
}

export interface EnhanceWithAIParams {
  selectedText: string
  editor: Editor
  enhanceText: (params: enhanceTextType) => Promise<string>
  setIsLoadingAi: (loading: boolean) => void
  isValidSelectionForEnhancement: (text: string) => boolean
  enhanceType?: string
  customIntent?: string
  context?: string
}

async function handleEnhanceWithAIFunction({
  selectedText,
  editor,
  enhanceText,
  setIsLoadingAi,
  isValidSelectionForEnhancement,
  enhanceType,
  customIntent,
  context,
}: EnhanceWithAIParams): Promise<void> {
  if (
    !editor ||
    !selectedText ||
    !isValidSelectionForEnhancement(selectedText) ||
    !enhanceText
  )
    return
  try {
    setIsLoadingAi(true)
    const { from, to } = editor.state.selection
    const enhancedText = await enhanceText({
      text: selectedText,
      type: enhanceType || "improve-writing",
      intent: customIntent || "improve text in editor",
      context: context,
    })
    if (from === 0 && to === editor.state.doc.content.size) {
      editor.chain().focus().setContent(enhancedText).run()
    } else {
      editor
        .chain()
        .focus()
        .deleteRange({ from, to })
        .insertContent(enhancedText)
        .run()
    }
  } catch (error) {
  } finally {
    setIsLoadingAi(false)
  }
}

export { handleEnhanceWithAIFunction, isValidSelectionForEnhancement }
