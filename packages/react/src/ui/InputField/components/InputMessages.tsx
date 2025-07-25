import { Icon } from "@/components/Utilities/Icon"
import { AlertCircle } from "@/icons/app"

type InputMessagesProps = {
  error?: string | string[] | boolean
}
const InputMessages = ({ error }: InputMessagesProps) => {
  if (!error || error === true) return null

  const messages = Array.isArray(error) ? error : [error]

  return (
    messages.length > 0 && (
      <div className="flex gap-1">
        <Icon
          icon={AlertCircle}
          className="h-6 w-6 -translate-y-[2px] text-f1-icon-critical"
        />
        <ul className="list-none">
          {messages.map((message) => (
            <li
              key={message}
              className="text-md font-medium text-f1-foreground-critical"
            >
              {message}
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export { InputMessages }
