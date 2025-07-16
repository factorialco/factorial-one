import { CopilotPopup } from "@copilotkit/react-ui"
import type { ComponentProps } from "react"

export type AiChatProps = Pick<
  ComponentProps<typeof CopilotPopup>,
  "className" | "children"
>

export const AiChat = (props: AiChatProps) => {
  return <CopilotPopup {...props} />
}
