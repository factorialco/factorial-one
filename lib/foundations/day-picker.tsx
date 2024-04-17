import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"

import { Button } from "@/foundations/button"
import { Calendar } from "@/foundations/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/foundations/popover"

interface Props {
  value: Date
  onChange: (nextValue: Date | undefined) => void
}

export const DayPicker: React.FC<Props> = ({ value, onChange }) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn(
          "w-[280px] justify-start text-left font-normal",
          !value && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {value ? format(value, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar
        mode="single"
        selected={value}
        onSelect={onChange}
        initialFocus
      />
    </PopoverContent>
  </Popover>
)
