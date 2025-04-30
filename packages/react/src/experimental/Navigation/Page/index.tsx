import { CopilotKit } from "@copilotkit/react-core"
import { CopilotSidebar } from "@copilotkit/react-ui"
import { CopilotButton } from "./components/CopilotButton"

interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

export function Page({ children, header, embedded = false }: PageProps) {
  return (
    <div className="w-full">
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotSidebar
          Button={CopilotButton}
          instructions={
            "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
          }
          labels={{
            title: "Factorial AI",
            initial: "How can I help you today?",
          }}
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
        </CopilotSidebar>
      </CopilotKit>
    </div>
  )
}

Page.displayName = "Page"
