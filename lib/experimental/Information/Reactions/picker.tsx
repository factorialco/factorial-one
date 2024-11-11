import { Icon } from "@/components/Utilities/Icon"
import { Reaction } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const emojis = ["👍", "🎉", "😂", "🍆", "🚀", "🙏"]

interface PickerProps {
  onSelect?: (emoji: string) => void
}

export function Picker({ onSelect }: PickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("h-auto px-1.5", isOpen && "border-f1-border-hover")}
          aria-label="Add reaction"
        >
          <Icon icon={Reaction} aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        className="w-auto rounded-md border border-solid border-f1-border bg-f1-background p-1"
      >
        <div className="flex flex-wrap gap-2 text-xl">
          <AnimatePresence>
            {emojis.map((emoji, index) => (
              <motion.button
                key={emoji}
                initial={{ opacity: 0, y: 8, width: 0 }}
                animate={{ opacity: 1, y: 0, width: "auto" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.1,
                  delay: index * 0.03 * (shouldReduceMotion ? 0 : 1),
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                onClick={() => {
                  setIsOpen(false)
                  onSelect?.(emoji)
                }}
                className="rounded-sm transition-colors hover:bg-f1-background-hover"
                aria-label={`React with ${emoji}`}
                type="button"
              >
                {emoji}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </PopoverContent>
    </Popover>
  )
}
