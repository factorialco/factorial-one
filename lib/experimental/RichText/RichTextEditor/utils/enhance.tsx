import { Editor } from "@tiptap/react"
import { enhancedTextResponse, enhanceTextType } from ".."

function isValidSelectionForEnhancement(text: string): boolean {
  return text.trim().length > 0
}

export interface EnhanceWithAIParams {
  selectedText: string
  editor: Editor
  enhanceText: (params: enhanceTextType) => Promise<enhancedTextResponse>
  setIsLoadingAi: (loading: boolean) => void
  isValidSelectionForEnhancement: (text: string) => boolean
  enhanceType?: string
  customIntent?: string
  context?: string
  onSuccess: () => void
  onError: (error?: string) => void
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
  onSuccess,
  onError,
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
    const {
      text: enhancedText,
      error,
      success,
    } = await enhanceText({
      text: selectedText,
      type: enhanceType || "improve-writing",
      intent: customIntent || "improve text in editor",
      context: context,
    })
    if (success) {
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
      onSuccess()
    } else {
      onError(error)
    }
  } catch (error) {
    onError()
  } finally {
    setIsLoadingAi(false)
  }
}

export { handleEnhanceWithAIFunction, isValidSelectionForEnhancement }
