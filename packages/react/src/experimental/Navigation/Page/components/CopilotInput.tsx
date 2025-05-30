import { Button } from "@/factorial-one"
import ArrowUp from "@/icons/app/ArrowUp"
import { InputProps } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"
import { useRef } from "react"

export const CopilotInput = ({ inProgress, onSend }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (value: string) => {
    if (value.trim()) {
      onSend(value)
      if (inputRef.current) {
        inputRef.current.value = ""
      }
    }
  }

  return (
    <div className="flex gap-2 p-5 pb-8">
      <div className="bg-white shadow-sm relative flex flex-1 rounded-md border border-solid border-f1-border p-3">
        <input
          ref={inputRef}
          disabled={inProgress}
          type="text"
          placeholder="Write something here.."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e.currentTarget.value)
            }
          }}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Button
            hideLabel
            label="Send"
            icon={ArrowUp}
            round
            size="md"
            disabled={inProgress}
            onClick={() => {
              if (inputRef.current) {
                handleSubmit(inputRef.current.value)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
