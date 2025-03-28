import { Editor } from "@tiptap/react"
import { enhancedTextResponse, enhanceTextParams } from ".."

export interface EnhanceWithAIParams {
  editor: Editor
  enhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  setIsLoadingEnhance: (loading: boolean) => void
  selectedIntent?: string
  customIntent?: string
  onSuccess: () => void
  onError: (error?: string) => void
}

async function handleEnhanceWithAIFunction({
  editor,
  enhanceText,
  setIsLoadingEnhance,
  selectedIntent,
  customIntent,
  onSuccess,
  onError,
}: EnhanceWithAIParams): Promise<void> {
  const selectedRange =
    editor.state.selection.to !== editor.state.selection.from
      ? editor.state.selection
      : null

  const fullContent = editor.getHTML()

  const from = selectedRange?.from ?? 0
  const to = selectedRange?.to ?? editor.state.doc.content.size
  let textToEnhance = selectedRange
    ? editor.state.doc.textBetween(from, to, " ")
    : fullContent

  let context = ""

  if (fullContent.length < 10000) {
    context = fullContent
  } else {
    const beforeChars = 2500
    const afterChars = 2500
    const contextStart = Math.max(0, from - beforeChars)
    const beforeText = editor.state.doc.textBetween(contextStart, from, " ")
    const contextEnd = Math.min(editor.state.doc.content.size, to + afterChars)
    const afterText = editor.state.doc.textBetween(to, contextEnd, " ")
    context = beforeText + " " + afterText
  }

  if (textToEnhance.length > 5000) {
    textToEnhance = textToEnhance.substring(0, 5000)
  }

  if (!(textToEnhance.trim().length > 0)) return

  try {
    setIsLoadingEnhance(true)
    const { from, to } = editor.state.selection

    const { success, text, error } = await enhanceText({
      text: textToEnhance,
      selectedIntent: selectedIntent,
      customIntent: customIntent,
      context: context,
    })

    if (success) {
      if (textToEnhance.toString() === editor.getHTML().toString()) {
        editor.chain().focus().setContent(text).run()
      } else {
        editor
          .chain()
          .focus()
          .deleteRange({ from, to })
          .insertContent(text)
          .run()
      }
      onSuccess()
    } else {
      onError(error)
    }
  } catch (error) {
    onError()
  } finally {
    setIsLoadingEnhance(false)
  }
}

export { handleEnhanceWithAIFunction }
