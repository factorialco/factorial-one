import { CopilotKit } from "@copilotkit/react-core"
import { CopilotPopup } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"

import type { ComponentProps } from "react"
import { ChatHeader, ChatWindow } from "./ChatWindow"

export type AiChatProps = ComponentProps<typeof CopilotPopup>

export type AiChatProviderProps = Omit<
  ComponentProps<typeof CopilotKit>,
  "window"
>

export const AiChatProvider = (props: AiChatProviderProps) => {
  return <CopilotKit {...props} />
}

export const AiChat = (props: AiChatProps) => {
  return <CopilotPopup Window={ChatWindow} Header={ChatHeader} {...props} />
}
