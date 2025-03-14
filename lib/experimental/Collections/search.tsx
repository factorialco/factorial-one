import { Icon } from "@/components/Utilities/Icon"
import { CrossedCircle, Search as SearchIcon, Spinner } from "@/icons/app"
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
  onChange: (value: string) => void
  onClear: () => void
  loading?: boolean
}

const IconComponent = ({ loading }: { loading: boolean }) => {
  const IconMotion = motion(Icon)

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <IconMotion key="spinner" icon={Spinner} className="animate-spin" />
      ) : (
        <IconMotion key="magnifier" icon={SearchIcon} className="text" />
      )}
    </AnimatePresence>
  )
}

export const Search = ({
  value,
  onChange,
  onClear,
  loading = false,
}: SearchProps) => {
  const [open, setOpen] = useState(false)
  const uniqueId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const i18n = useI18n()

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        handleOpen()
      }
    } else {
      if (e.key === "Escape") {
        e.preventDefault()
        onClear()
        setOpen(false)
      }
    }
  }

  return (
    <LayoutGroup id={uniqueId}>
      <MotionConfig
        transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] }}
      >
        <AnimatePresence>
          <motion.div
            layout
            ref={ref}
            className={cn(
              "relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center",
              (open || value) && "w-[180px]"
            )}
          >
            {open ? (
              <motion.div
                layout
                layoutId="search-container"
                className="absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover"
                style={{ borderRadius: 12 }}
              >
                <motion.div
                  layout
                  className="relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5"
                  style={{ borderRadius: 11 }}
                >
                  <motion.div
                    className="absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon"
                    layoutId="search-icon"
                  >
                    <IconComponent loading={loading} />
                  </motion.div>
                  <motion.input
                    layout
                    ref={inputRef}
                    type="text"
                    value={value}
                    placeholder={i18n.actions.search}
                    onChange={(e) => onChange(e.target.value)}
                    className="h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onKeyDown={handleKeyDown}
                  />
                  <motion.div
                    tabIndex={0}
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full",
                      focusRing()
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      onClear()
                    }}
                    role="button"
                    aria-label={i18n.actions.clear}
                  >
                    <Icon
                      icon={CrossedCircle}
                      className="text-f1-icon-secondary transition-colors hover:text-f1-icon"
                      size="md"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                role="button"
                aria-label={i18n.actions.search}
                tabIndex={0}
                layout
                layoutId="search-container"
                className={cn(
                  "relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
                  focusRing()
                )}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                style={{ borderRadius: 10 }}
              >
                <motion.div
                  layout
                  className="relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background"
                  style={{ borderRadius: 9 }}
                >
                  <motion.div
                    className="absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold"
                    layoutId="search-icon"
                  >
                    <IconComponent loading={loading} />
                  </motion.div>
                  {value && (
                    <div className="flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5">
                      <motion.div
                        layout
                        className="line-clamp-1 overflow-hidden py-2 pl-7"
                      >
                        {value}
                      </motion.div>
                      <motion.div
                        tabIndex={0}
                        className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-full",
                          focusRing()
                        )}
                        onClick={(e) => {
                          e.stopPropagation()
                          onClear()
                        }}
                        role="button"
                        aria-label={i18n.actions.clear}
                      >
                        <Icon
                          icon={CrossedCircle}
                          className="text-f1-icon-secondary transition-colors hover:text-f1-icon"
                          size="md"
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </LayoutGroup>
  )
}
