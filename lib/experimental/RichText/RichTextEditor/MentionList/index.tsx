import React from "react"
import ReactDOM from "react-dom/client"

import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { cn } from "@/lib/utils"
import { MentionedUser } from "../index"

interface MentionListComponentProps {
  item: MentionedUser
  selected: boolean
}

const MentionListComponent = ({
  item,
  selected,
}: MentionListComponentProps) => {
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
interface MentionListUIProps {
  items: MentionedUser[]
  selectedIndex: number
  onItemSelect: (index: number) => void
  onItemHover: (index: number) => void
  component: React.FC<{ item: MentionedUser; index: number; selected: boolean }>
}

const MentionListUI = ({
  items,
  selectedIndex,
  onItemSelect,
  onItemHover,
  component: Component,
}: MentionListUIProps) => {
  return (
    <div className="flex max-h-72 w-60 flex-col gap-2 overflow-y-auto rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md">
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
            onClick={() => onItemSelect(index)}
            onMouseEnter={() => onItemHover(index)}
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

class MentionList {
  items: MentionedUser[]
  command: (item: MentionedUser) => void
  element: HTMLElement
  selectedIndex: number
  component: React.FC<{ item: MentionedUser; index: number; selected: boolean }>
  root: ReactDOM.Root

  constructor(props: {
    items: MentionedUser[]
    command: (item: MentionedUser) => void
    component?: React.FC<{
      item: MentionedUser
      index: number
      selected: boolean
    }>
  }) {
    this.items = props.items
    this.command = props.command
    this.component = props.component || MentionListComponent
    this.selectedIndex = 0

    this.element = document.createElement("div")
    document.body.appendChild(this.element)
    this.root = ReactDOM.createRoot(this.element)

    this.renderItems()
    setTimeout(() => this.positionElement(), 0)
  }

  updateProps(props: { items: MentionedUser[] }) {
    this.items = props.items
    this.renderItems()
    this.positionElement()
  }

  positionElement() {
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) {
      return
    }
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const top = Math.min(
      rect.top + window.scrollY,
      viewportHeight - this.element.offsetHeight
    )
    let left = rect.right + window.scrollX + 5

    if (left + this.element.offsetWidth > viewportWidth) {
      left = viewportWidth - this.element.offsetWidth - 20
    }
    if (left < 0) left = 10

    this.element.style.position = "absolute"
    this.element.style.top = `${top}px`
    this.element.style.left = `${left}px`
    this.element.style.display = "block"
    this.element.style.visibility = "visible"
    this.element.style.opacity = "1"
  }

  onKeyDown({ event }: { event: KeyboardEvent }) {
    if (event.key === "ArrowDown") {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length
      this.renderItems()
      return true
    }
    if (event.key === "ArrowUp") {
      this.selectedIndex =
        (this.selectedIndex + this.items.length - 1) % this.items.length
      this.renderItems()
      return true
    }
    if (event.key === "Enter") {
      this.selectItem(this.selectedIndex)
      return true
    }
    return false
  }

  selectItem(index: number) {
    const item = this.items[index]
    if (item) {
      this.command(item)
    }
  }

  renderItems() {
    this.root.render(
      <MentionListUI
        items={this.items}
        selectedIndex={this.selectedIndex}
        onItemSelect={(index) => this.selectItem(index)}
        onItemHover={(index) => {
          this.selectedIndex = index
          this.renderItems()
        }}
        component={this.component}
      />
    )
  }

  hide() {
    this.element.style.display = "none"
  }

  destroy() {
    this.root.unmount()
    this.element.remove()
  }
}

export { MentionList, MentionListComponent }
