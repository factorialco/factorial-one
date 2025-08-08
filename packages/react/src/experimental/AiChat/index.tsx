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
import {
  AiChatLabelsProvider,
  type AiChatLabels,
} from "./providers/AiChatLabelsProvider"

type AiChatProviderProps = ComponentProps<typeof CopilotKit>

const AiChatProviderCmp = (props: AiChatProviderProps) => {
  return <CopilotKit {...props} />
}
type CopilotPopupProps = ComponentProps<typeof CopilotPopup>

type AiChatProps = Omit<CopilotPopupProps, "labels"> & {
  labels?: ComponentProps<typeof CopilotPopup>["labels"] & AiChatLabels
}

const AiChatCmp = ({ labels, ...props }: AiChatProps) => {
  const { greeting, ...copilotLabels } = labels || {}

  return (
    <AiChatLabelsProvider greeting={greeting}>
      <CopilotPopup
        Window={ChatWindow}
        Header={ChatHeader}
        Messages={MessagesContainer}
        Button={ChatButton}
        Input={ChatTextarea}
        UserMessage={UserMessage}
        AssistantMessage={AssistantMessage}
        {...props}
        labels={copilotLabels}
      />
    </AiChatLabelsProvider>
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
