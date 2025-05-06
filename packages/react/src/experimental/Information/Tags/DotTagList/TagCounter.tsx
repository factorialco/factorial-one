import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import { useState } from "react"
import { cn, focusRing } from "../../../../lib/utils"
import { NewColor } from "../DotTag"
import { RawTag } from "../RawTag"
import { TooltippedDotTag } from "./TooltippedDotTag"

export type DotTagItem = {
  label: string
  description?: string
  color: NewColor
}

type TagCounterProps = {
  count: number
  list?: DotTagItem[]
}

export const TagCounter = ({ count, list }: TagCounterProps) => {
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
              className="flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2"
            >
              <TooltippedDotTag
                label={tag.label}
                description={tag.description}
                color={tag.color}
              />
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

TagCounter.displayName = "TagCounter"
