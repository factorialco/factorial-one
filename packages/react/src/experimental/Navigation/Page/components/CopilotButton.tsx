import { cn } from "@/lib/utils"
import { ButtonProps, useChatContext } from "@copilotkit/react-ui"
import "@copilotkit/react-ui/styles.css"
import { CopilotLogo } from "./CopilotLogo"
export const CopilotButton = (_: ButtonProps) => {
  const { open, setOpen } = useChatContext()

  return (
    <div
      onClick={() => setOpen(!open)}
      className={cn(
        "-translate-x-3 rounded-lg border-2 border-f1-border bg-[#f0f0f0] p-2 hover:bg-[#e0e0e0]"
      )}
    >
      <button
        className={cn(open ? "open" : "", "cursor-pointer")}
        aria-label={open ? "Close Chat" : "Open Chat"}
      >
        <CopilotLogo />
      </button>
    </div>
  )
}
