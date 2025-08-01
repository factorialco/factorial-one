import { CopilotKit } from "@copilotkit/react-core"
import { CopilotPopup } from "@copilotkit/react-ui"

import { experimentalComponent } from "@/lib/experimental"
import { type ComponentProps } from "react"

import {
  AssistantMessage,
  ChatButton,
  ChatHeader,
  ChatTextarea,
  ChatWindow,
  MessagesContainer,
  UserMessage,
} from "./components"

type AiChatProviderProps = ComponentProps<typeof CopilotKit>

const AiChatProviderCmp = (props: AiChatProviderProps) => {
  return <CopilotKit {...props} />
}

type AiChatProps = ComponentProps<typeof CopilotPopup>

const AiChatCmp = (props: AiChatProps) => {
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

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AiChat = experimentalComponent("AiChat", AiChatCmp)

const AiChatProvider = experimentalComponent(
  "AiChatProvider",
  AiChatProviderCmp
)

export { AiChat, AiChatProvider, type AiChatProps, type AiChatProviderProps }
