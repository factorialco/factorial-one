import { type UserMessageProps } from "@copilotkit/react-ui"

export const UserMessage = ({ message }: UserMessageProps) => {
  return (
    <div className="w-fit max-w-[330px] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3">
      {message}
    </div>
  )
}
