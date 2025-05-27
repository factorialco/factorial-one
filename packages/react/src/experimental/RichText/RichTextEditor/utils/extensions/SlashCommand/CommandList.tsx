import { Icon } from "@/factorial-one"
import { cn } from "@/lib/utils"
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { CommandItem } from "./AvailableCommands"

interface CommandListHandle {
  onKeyDown: ({ event }: { event: KeyboardEvent }) => boolean
}

interface CommandListProps {
  items: CommandItem[]
  command: (item: CommandItem) => void
}

const CommandList = forwardRef<CommandListHandle, CommandListProps>(
  ({ items, command }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const selectedItemRef = useRef<HTMLDivElement>(null)

    const selectItem = useCallback(
      (index: number) => {
        const item = items[index]
        if (item) {
          command(item)
        }
      },
      [items, command]
    )

    const scrollIntoView = useCallback((element: HTMLElement) => {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()

      if (elementRect.top < containerRect.top) {
        container.scrollTop += elementRect.top - containerRect.top
      } else if (elementRect.bottom > containerRect.bottom) {
        container.scrollTop += elementRect.bottom - containerRect.bottom
      }
    }, [])

    const upHandler = useCallback(() => {
      setSelectedIndex((prev) => {
        const newIndex = (prev + items.length - 1) % items.length
        requestAnimationFrame(() => {
          if (selectedItemRef.current) {
            scrollIntoView(selectedItemRef.current)
          }
        })
        return newIndex
      })
    }, [items.length, scrollIntoView])

    const downHandler = useCallback(() => {
      setSelectedIndex((prev) => {
        const newIndex = (prev + 1) % items.length
        requestAnimationFrame(() => {
          if (selectedItemRef.current) {
            scrollIntoView(selectedItemRef.current)
          }
        })
        return newIndex
      })
    }, [items.length, scrollIntoView])

    const enterHandler = useCallback(() => {
      selectItem(selectedIndex)
    }, [selectedIndex, selectItem])

    useEffect(() => {
      setSelectedIndex(0)
    }, [items])

    useImperativeHandle(
      ref,
      () => ({
        onKeyDown: ({ event }: { event: KeyboardEvent }) => {
          if (event.key === "ArrowUp") {
            event.preventDefault()
            upHandler()
            return true
          }
          if (event.key === "ArrowDown") {
            event.preventDefault()
            downHandler()
            return true
          }
          if (event.key === "Enter") {
            event.preventDefault()
            enterHandler()
            return true
          }
          return false
        },
      }),
      [upHandler, downHandler, enterHandler]
    )

    return (
      <div
        ref={containerRef}
        className="w-80 rounded-lg border border-solid border-f1-border bg-f1-background p-2 drop-shadow-md"
      >
        {items.map((item, index) => (
          <div
            key={index}
            ref={index === selectedIndex ? selectedItemRef : null}
            className={cn(
              "flex w-full cursor-pointer items-center gap-2 rounded-md border border-solid px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover",
              index === selectedIndex
                ? "border-f1-border-selected-bold"
                : "border-f1-border-inverse"
            )}
            onClick={() => selectItem(index)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            <div className="flex w-full flex-row items-center gap-3">
              <Icon icon={item.icon} />
              <p className="text-md flex-grow font-medium text-f1-foreground">
                {item.title}
              </p>
              {item.markdownShortcut && (
                <p className="text-xs text-f1-foreground-secondary">
                  {item.markdownShortcut}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
)

CommandList.displayName = "CommandList"

export { CommandList }
