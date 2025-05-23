import { Tabs, TabsProps } from "@/experimental/Navigation/Tabs"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useOneModal } from "../OneModalProvider"
import { useIsSmallScreen } from "../utils"

export type OneModalContentProps = {
  children: React.ReactNode
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export const OneModalContent = ({
  tabs,
  activeTabId,
  setActiveTabId,
  children,
}: OneModalContentProps) => {
  const { position: modalPosition } = useOneModal()

  const isSmallScreen = useIsSmallScreen()

  return (
    <>
      {tabs && (
        <div className="-mx-2">
          <Tabs
            tabs={tabs}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
        </div>
      )}
      <ScrollArea
        className={cn(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          !isSmallScreen && modalPosition === "center" && "max-h-[512px]"
        )}
      >
        {children}
        <ScrollBar
          orientation="vertical"
          className="[&_div]:bg-f1-background"
        />
      </ScrollArea>
    </>
  )
}
