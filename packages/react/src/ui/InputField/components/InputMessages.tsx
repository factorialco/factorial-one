type InputMessagesProps = {
  error?: string | string[] | boolean
}
const InputMessages = ({ error }: InputMessagesProps) => {
  if (!error || error === true) return null

  const messages = Array.isArray(error) ? error : [error]

  return (
    messages.length > 0 && (
      <ul>
        {messages.map((message) => (
          <li key={message} className="text-f1-foreground-error">
            {message}
          </li>
        ))}
      </ul>
    )
  )
}

export { InputMessages }
