import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Menu } from "lucide-react"
import { FrameProvider, useSidebar } from "./FrameProvider"

interface ApplicationFrameProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

export function ApplicationFrame({ children, sidebar }: ApplicationFrameProps) {
  return (
    <FrameProvider>
      <ApplicationFrameContent sidebar={sidebar}>
        {children}
      </ApplicationFrameContent>
    </FrameProvider>
  )
}

function ApplicationFrameContent({ children, sidebar }: ApplicationFrameProps) {
  const { isSidebarExpanded, toggleSidebar } = useSidebar()

  return (
    <div
      className={cn(
        "relative flex h-full flex-row",
        isSidebarExpanded && "gap-3"
      )}
    >
      <div
        className={cn("text-f1-foreground", isSidebarExpanded && "w-64 pl-3")}
      >
        {sidebar}
      </div>
      <div className="flex flex-1">{children}</div>
      <Button
        variant="outline"
        size="md"
        className="fixed bottom-4 right-4 z-50"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <Menu className="h-4 w-4" />
        Toggle sidebar
      </Button>
    </div>
  )
}
