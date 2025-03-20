import React from "react"
import ReactDOM from "react-dom/client"

import Avatar from "design-system/Avatar"
import Text from "design-system/Text"
import Box from "design-system/layouts/Box"

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
    <Box
      gap="s8"
      flexDirection="row"
      alignItems="center"
      padding="s4"
      borderRadius={{ all: "abs010" }}
      border={{
        all: {
          color: selected ? "viridian800" : "grey000White",
          style: "solid",
          width: "s1",
        },
      }}
    >
      {item.image_url && (
        <Avatar label={item.label} url={item.image_url} size="s24" />
      )}
      <Text weight="medium" size="200" ellipsis color="grey1000">
        {item.label}
      </Text>
    </Box>
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
    <Box
      flexDirection="column"
      gap="s8"
      paddingX="s4"
      paddingY="s4"
      borderRadius={{ all: "abs012" }}
      border={{
        all: { color: "grey300", style: "solid", width: "s1" },
      }}
      background="white"
      boxShadow="s200"
      width="s240"
      maxHeight="s240"
    >
      {items.length === 0 ? (
        <Box padding="s8">
          <Text weight="medium" size="200" ellipsis color="grey600">
            No results found
          </Text>
        </Box>
      ) : (
        items.map((item, index) => (
          <Box
            key={index}
            onClick={() => onItemSelect(index)}
            onMouseEnter={() => onItemHover(index)}
          >
            <Component
              item={item}
              index={index}
              selected={index === selectedIndex}
            />
          </Box>
        ))
      )}
    </Box>
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
