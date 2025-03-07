import { Icon } from "@/components/Utilities/Icon"
import { Search as SearchIcon } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { cn, focusRing } from "@/lib/utils"
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from "framer-motion"
import { useId, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"

interface SearchProps {
  value?: string
  placeholder?: string
  onChange: (value: string) => void
}

export const Search = ({ value, placeholder, onChange }: SearchProps) => {
  const [open, setOpen] = useState(false)
  const uniqueId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const i18n = useI18n()

  const placeholderText = placeholder || i18n.actions.search

  useOnClickOutside(ref, () => {
    if (open) setOpen(false)
  })

  const handleOpen = () => {
    if (!open) {
      setOpen(true)
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

  return (
    /*
    <div
      ref={ref}
      className={cn(
        "group relative flex h-8 w-8 items-center gap-2",
        !open && "hover:cursor-pointer"
      )}
      onClick={handleOpen}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-auto right-0 flex w-fit items-center justify-end rounded border border-solid border-f1-border bg-f1-background transition-all duration-200 ease-in-out group-hover:border-f1-border-hover",
          open &&
            "pointer-events-auto -inset-y-1 left-auto right-0 w-64 rounded-md opacity-100 shadow-md group-hover:border-f1-border"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center transition-all",
            open && "left-2 top-[9px]"
          )}
        >
          <Icon
            icon={SearchIcon}
            className={cn("text-f1-icon-bold", open && "text-f1-icon")}
          />
        </div>
        <Icon icon={CrossedCircle} className="text-f1-icon-secondary" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholderText}
          onChange={(e) => onChange(e.target.value)}
          tabIndex={open ? 0 : -1}
          {...(open && { autoFocus: true })}
          className={cn(
            "text-f1-text placeholder:text-f1-text-placeholder m-1 h-8 w-full rounded border border-solid border-f1-border bg-transparent p-2 pl-7 opacity-0 transition-opacity focus:border-f1-border-hover focus:outline-none focus:ring-0",
            "hover:border-f1-border-hover focus:border-f1-border-hover",
            open && "opacity-100",
            focusRing()
          )}
        />
      </div>
    </div>
    */
    <LayoutGroup id={uniqueId}>
      <MotionConfig
        transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] }}
      >
        <AnimatePresence>
          <motion.div
            layout
            ref={ref}
            className="relative flex h-8 w-8 items-center justify-center"
          >
            {open ? (
              <motion.div
                layout
                layoutId="search-container"
                className="absolute -inset-y-1 left-auto right-0 h-10 w-64 bg-f1-border p-px shadow-md"
                style={{ borderRadius: 12 }}
              >
                <motion.div
                  layout
                  className="relative h-full w-full bg-f1-background p-1"
                  style={{ borderRadius: 11 }}
                >
                  <motion.div
                    className="absolute left-2.5 top-2.5 z-10 flex h-5 w-5 items-center justify-center text-f1-icon"
                    layoutId="search-icon"
                  >
                    <Icon icon={SearchIcon} />
                  </motion.div>
                  <motion.input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholderText}
                    className="text-f1-foregroundhover:border-f1-border-hover h-full w-full appearance-none rounded border border-solid border-f1-border bg-f1-background px-7 py-2 text-base focus:border-f1-border-hover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                role="button"
                tabIndex={0}
                layout
                layoutId="search-container"
                className={cn(
                  "relative h-8 w-8 bg-f1-border p-px",
                  focusRing()
                )}
                onClick={handleOpen}
                style={{ borderRadius: 10 }}
              >
                <motion.div
                  layout
                  className="relative h-full w-full bg-f1-background"
                  style={{ borderRadius: 9 }}
                >
                  <motion.div
                    className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center text-f1-icon-bold"
                    layoutId="search-icon"
                  >
                    <Icon icon={SearchIcon} />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </LayoutGroup>
  )
}
