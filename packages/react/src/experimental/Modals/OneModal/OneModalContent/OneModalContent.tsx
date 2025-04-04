import { Tabs, TabsProps } from "@/experimental/Navigation/Tabs"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useMediaQuery } from "usehooks-ts"

export type OneModalContentProps = {
  children: React.ReactNode
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export const OneModalContent = ({
  tabs,
  activeTabId,
  setActiveTabId,
  children,
}: OneModalContentProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 440px)", {
    initializeWithValue: false,
  })

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
          "[*[data-state=visible]_div]:bg-f1-background flex flex-col",
          !isSmallScreen && "max-h-[512px]"
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
