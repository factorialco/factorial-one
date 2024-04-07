import * as React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/foundations/button"
import { Calendar } from "@/foundations/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/foundations/popover"

interface Props {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}

export const DatePicker: React.FC<Props> = ({ value: date, onChange }) => {
  const [open, setOpen] = useState(false)

  const handleSelect = (date: Date | undefined) => {
    onChange(date)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => handleSelect(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
