import { UserMessageProps } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"

export const CopilotUserMessage = (props: UserMessageProps) => {
  return (
    <div className="mb-4 flex items-center justify-end gap-2">
      <p className="max-w-[80%] flex-shrink-0 break-words rounded-md bg-f1-background-tertiary px-3 py-2 text-base font-normal leading-5 text-f1-foreground">
        {props.message}
      </p>
    </div>
  )
}
