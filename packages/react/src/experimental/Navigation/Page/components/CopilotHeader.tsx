import { Button } from "@/factorial-one"
import CrossIcon from "@/icons/app/Cross"
import { HeaderProps, useChatContext } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"

export const CopilotHeader = (_: HeaderProps) => {
  const { setOpen } = useChatContext()

  return (
    <div className="text-white bg-blue-500 flex items-center justify-between p-3 px-5">
      <div className="font-black-600 text-lg tracking-tight text-f1-foreground">
        AI Assistant
      </div>
      <div className="flex w-24 justify-end">
        <Button
          onClick={() => setOpen(false)}
          hideLabel
          label="Close"
          icon={CrossIcon}
          variant="outline"
          round
          size="sm"
        />
      </div>
    </div>
  )
}
