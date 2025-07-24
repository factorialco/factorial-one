import { CopilotKit } from "@copilotkit/react-core"
import { CopilotPopup } from "@copilotkit/react-ui"
// import "@copilotkit/react-ui/styles.css"

import type { ComponentProps } from "react"
import {
  AssistantMessage,
  ChatButton,
  ChatHeader,
  ChatTextarea,
  ChatWindow,
  MessagesContainer,
  UserMessage,
} from "./ChatWindow"

export type AiChatProps = ComponentProps<typeof CopilotPopup>

export type AiChatProviderProps = Omit<
  ComponentProps<typeof CopilotKit>,
  "window"
>

export const AiChatProvider = (props: AiChatProviderProps) => {
  return <CopilotKit {...props} />
}

export const AiChat = (props: AiChatProps) => {
  return (
    <CopilotPopup
      Window={ChatWindow}
      Header={ChatHeader}
      Messages={MessagesContainer}
      Button={ChatButton}
      Input={ChatTextarea}
      UserMessage={UserMessage}
      AssistantMessage={AssistantMessage}
      {...props}
    />
  )
}
