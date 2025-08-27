import { cn } from "@/lib/utils"
import { useChatContext, type WindowProps } from "@copilotkit/react-ui"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { createContext, useContext, useEffect, useRef, useState } from "react"

interface ChatWindowContextType {
  reachedMaxHeight: boolean
}

const ChatWindowContext = createContext<ChatWindowContextType>({
  reachedMaxHeight: false,
})

export const useChatWindowContext = () => useContext(ChatWindowContext)

// also hardcoded in Tailwind classes in DialogPrimitive.Content
const MIN_HEIGHT = 416
const MAX_HEIGHT = 680
const FULL_HEIGHT_MARGIN = 20

export const ChatWindow = ({ children, ...rest }: WindowProps) => {
  const { setOpen, open } = useChatContext()
  const windowRef = useRef<HTMLDivElement>(null)
  const [windowHeight, setWindowHeight] = useState(MIN_HEIGHT)

  useEffect(() => {
    if (!open) return

    const measureHeight = () => {
      if (windowRef.current) {
        const height = windowRef.current.offsetHeight
        setWindowHeight(height)
      }
    }

    let resizeObserver: ResizeObserver | null = null
    let browserResizeObserver: ResizeObserver | null = null
    let animationFrameId: number | null = null

    const setupObservers = () => {
      if (windowRef.current && open) {
        resizeObserver = new ResizeObserver(measureHeight)
        browserResizeObserver = new ResizeObserver(measureHeight)

        resizeObserver.observe(windowRef.current)
        browserResizeObserver.observe(document.documentElement)

        // Initial measurement
        measureHeight()
      }
    }

    animationFrameId = requestAnimationFrame(setupObservers)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      if (browserResizeObserver) {
        browserResizeObserver.disconnect()
      }
    }
  }, [open])

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={setOpen}
      modal={false}
      {...rest}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          onPointerDownOutside={(e) => e.preventDefault()}
          className={cn(
            "fixed bottom-4 right-4 isolate z-50 w-[90%] rounded-xl border bg-f1-background shadow-lg",
            "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "flex max-h-[min(680px,calc(100%-16px))] min-h-[416px] max-w-[464px] flex-col overflow-hidden rounded-xl border-solid border-f1-border shadow"
          )}
          ref={windowRef}
        >
          <ChatWindowContext.Provider
            value={{
              reachedMaxHeight:
                windowHeight >= MAX_HEIGHT ||
                windowHeight >=
                  document.documentElement.clientHeight - FULL_HEIGHT_MARGIN,
            }}
          >
            {children}
          </ChatWindowContext.Provider>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
