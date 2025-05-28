import { UserMessageProps } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"

export const CopilotUserMessage = (props: UserMessageProps) => {
  console.log("props", props)
  return (
    <div className="mb-4 flex items-center justify-end gap-2">
      <div className="max-w-[80%] flex-shrink-0 break-words rounded-md bg-f1-background-secondary px-3 py-2 text-f1-foreground-secondary">
        {props.message}
      </div>
    </div>
  )
}
