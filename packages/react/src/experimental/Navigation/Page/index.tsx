import ArrowUp from "@/icons/app/ArrowUp"
import { CopilotKit } from "@copilotkit/react-core"
import { CopilotPopup } from "@copilotkit/react-ui"
import { CopilotButton } from "./components/CopilotButton"
import { CopilotHeader } from "./components/CopilotHeader"
import { CopilotInput } from "./components/CopilotInput"
import { CopilotUserMessage } from "./components/CopilotUserMessage"

interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
  aiAgent?: {
    enabled: boolean
    runtimeUrl: string
    agentName: string
  }
}

export function Page({
  children,
  header,
  embedded = false,
  aiAgent,
}: PageProps) {
  return aiAgent?.enabled ? (
    <div className="w-full">
      <CopilotKit runtimeUrl={aiAgent?.runtimeUrl} agent={aiAgent?.agentName}>
        <CopilotPopup
          Header={CopilotHeader}
          Button={CopilotButton}
          UserMessage={CopilotUserMessage}
          instructions={
            "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
          }
          labels={{
            title: "Factorial AI",
            initial: "Hey! How can I assist you today?",
          }}
          icons={{
            sendIcon: <ArrowUp />,
          }}
          Input={CopilotInput}
        >
          <div
            className={`flex w-full flex-col overflow-hidden ${
              embedded ? "" : "xs:rounded-xl"
            } bg-f1-page ring-1 ring-inset ring-f1-border-secondary`}
          >
            {header && <div className="flex flex-col">{header}</div>}

            <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
              {children}
            </div>
          </div>
        </CopilotPopup>
      </CopilotKit>
    </div>
  ) : (
    <div className="w-full">
      <div
        className={`flex w-full flex-col overflow-hidden ${
          embedded ? "" : "xs:rounded-xl"
        } bg-f1-page ring-1 ring-inset ring-f1-border-secondary`}
      >
        {header && <div className="flex flex-col">{header}</div>}

        <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}

Page.displayName = "Page"
