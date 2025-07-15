import { CopilotKit } from "@copilotkit/react-core"
import type { ComponentProps } from "react"

export type AiChatProps = ComponentProps<typeof CopilotKit>

export const AiChat = (props: AiChatProps) => {
  return <CopilotKit {...props} />
}
