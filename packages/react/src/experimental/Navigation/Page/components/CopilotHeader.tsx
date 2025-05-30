import { Button } from "@/factorial-one"
import CrossIcon from "@/icons/app/Cross"
import { HeaderProps, useChatContext } from "@copilotkit/react-ui"
import { CopilotLogo } from "./CopilotLogo"

import "@copilotkit/react-ui/styles.css"

export const CopilotHeader = (_: HeaderProps) => {
  const { setOpen } = useChatContext()

  return (
    <div className="text-white bg-blue-500 flex items-center justify-between px-3 py-3.5">
      <div className="font-black-600 flex items-center justify-center gap-1.5 text-lg text-f1-foreground">
        <div>
          <CopilotLogo className="h-5 w-5" />
        </div>
        <h2 className="relative top-0.5 text-lg/6 font-semibold">One</h2>
      </div>
      <div>
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
