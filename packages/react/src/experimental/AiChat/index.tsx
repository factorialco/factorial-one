import { CopilotKit } from "@copilotkit/react-core"
import { CopilotPopup } from "@copilotkit/react-ui"
import type { ComponentProps } from "react"

export type AiChatProps = ComponentProps<typeof CopilotPopup>

export type AiChatProviderProps = ComponentProps<typeof CopilotKit>

export const AiChatProvider = (props: AiChatProviderProps) => {
  return <CopilotKit {...props} />
}

export const AiChat = (props: AiChatProps) => {
  return <CopilotPopup {...props} />
}
