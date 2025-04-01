import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { cn } from "@/lib/utils"
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { MentionedUser } from "../utils/types"

interface DefaultMentionItemProps {
  item: MentionedUser
  selected: boolean
}

const DefaultMentionItem = ({ item, selected }: DefaultMentionItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border-[2px] border-solid p-1",
        selected ? "border-f1-border-selected-bold" : "border-f1-border-inverse"
      )}
    >
      <PersonAvatar
        firstName={item.label}
        lastName=""
        src={item.image_url ?? undefined}
        size="medium"
      />
      <p className="text-neutral-100 text-sm font-medium">{item.label}</p>
    </div>
  )
}

type MentionListHandle = {
  onKeyDown: ({ event }: { event: KeyboardEvent }) => boolean
}

export interface MentionListProps {
  items: MentionedUser[]
  command: (item: MentionedUser) => void
  component?: React.FC<{
    item: MentionedUser
    index: number
    selected: boolean
  }>
}

const MentionList = forwardRef<MentionListHandle, MentionListProps>(
  ({ items, command, component: Component = DefaultMentionItem }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = (index: number) => {
      const item = items[index]
      if (item) {
        command(item)
      }
    }

    const upHandler = () => {
      setSelectedIndex((prev) => (prev + items.length - 1) % items.length)
    }

    const downHandler = () => {
      setSelectedIndex((prev) => (prev + 1) % items.length)
    }

    const enterHandler = () => {
      selectItem(selectedIndex)
    }

    useEffect(() => {
      setSelectedIndex(0)
    }, [items])

    useImperativeHandle(
      ref,
      () => ({
        onKeyDown: ({ event }: { event: KeyboardEvent }) => {
          if (event.key === "ArrowUp") {
            upHandler()
            return true
          }
          if (event.key === "ArrowDown") {
            downHandler()
            return true
          }
          if (event.key === "Enter") {
            enterHandler()
            return true
          }
          return false
        },
      }),
      [upHandler, downHandler, enterHandler]
    )

    return (
      <div className="drop-drop-shadow-sm flex max-h-72 w-60 flex-col gap-2 overflow-y-auto rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background p-1">
        {items.length === 0 ? (
          <div className="p-2">
            <p className="text-neutral-40 text-sm font-medium">
              No results found
            </p>
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              onClick={() => selectItem(index)}
              onMouseEnter={() => setSelectedIndex(index)}
              className="cursor-pointer bg-f1-background hover:bg-f1-background-hover"
            >
              <Component
                item={item}
                index={index}
                selected={index === selectedIndex}
              />
            </div>
          ))
        )}
      </div>
    )
  }
)

export { MentionList }
