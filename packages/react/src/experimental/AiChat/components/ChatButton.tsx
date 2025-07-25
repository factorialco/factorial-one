import { cn, focusRing } from "@/lib/utils"
import { useChatContext, type ButtonProps } from "@copilotkit/react-ui"
import OneIcon from "../OneIcon"

export const ChatButton = (props: ButtonProps) => {
  const { open, setOpen } = useChatContext()

  return (
    <button
      className={cn(
        "absolute bottom-4 right-4",
        "h-10 w-10 cursor-pointer rounded-xl bg-[hsl(220,27,26%)] p-1 pl-2",
        open ? "hidden" : "block",
        focusRing()
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <OneIcon onDarkBackground />
    </button>
  )
}
