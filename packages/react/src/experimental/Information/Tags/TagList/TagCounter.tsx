import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useState } from "react"
import { cn, focusRing } from "../../../../lib/utils"
import { Tooltip } from "../../../Overlays/Tooltip"
import { RawTag } from "../RawTag"
import { Tag, TagVariant } from "../Tag"

export type TagCounterItem = TagVariant

type Props = {
  count: number
  list?: TagCounterItem[]
}

export const TagCounter = ({ count, list }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const counter = <RawTag text={`+${count}`} />

  if (!list?.length) return counter

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn("inline-flex flex-shrink-0 items-center", focusRing())}
        >
          {counter}
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="rounded-md border border-solid border-f1-border-secondary p-1 shadow-md"
        align="end"
      >
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col">
          {list.map((tag, index) => (
            <div
              key={index}
              className="flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
            >
              <Tooltip
                label={getTagDisplayName(tag)}
                description={getTagDescription(tag)}
              >
                <div>
                  <Tag tag={tag} />
                </div>
              </Tooltip>
            </div>
          ))}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

const getTagDisplayName = (tag: TagVariant): string => {
  switch (tag.type) {
    case "dot":
      return tag.text
    case "person":
      return tag.name
    case "team":
      return tag.teamName
    case "company":
      return tag.companyName
    case "alert":
    case "status":
    case "balance":
      return tag.text
    default:
      return ""
  }
}

const getTagDescription = (tag: TagVariant): string | undefined => {
  if ("description" in tag && typeof tag.description === "string") {
    return tag.description
  }
  return undefined
}

TagCounter.displayName = "TagCounter"
