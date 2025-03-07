import { Icon } from "@/components/Utilities/Icon"
import { Search as SearchIcon, Spinner } from "@/icons/app"
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
  loading?: boolean
}

const IconComponent = ({ loading }: { loading: boolean }) => {
  const IconMotion = motion(Icon)

  const iconAnimationProps = {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 },
    transition: { duration: 0.1 },
  }

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <IconMotion
          key="spinner"
          icon={Spinner}
          className="animate-spin"
          {...iconAnimationProps}
        />
      ) : (
        <IconMotion
          key="magnifier"
          icon={SearchIcon}
          className="text"
          {...iconAnimationProps}
        />
      )}
    </AnimatePresence>
  )
}

export const Search = ({
  value,
  placeholder,
  onChange,
  loading = false,
}: SearchProps) => {
  const [open, setOpen] = useState(false)
  const uniqueId = useId()
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const i18n = useI18n()

  const [loadingTest, setLoadingTest] = useState(loading)

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
    <LayoutGroup id={uniqueId}>
      <MotionConfig
        transition={{ duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] }}
      >
        <AnimatePresence>
          <motion.div
            layout
            ref={ref}
            className={cn(
              "relative flex h-8 w-8 items-center justify-center",
              open && "w-64"
            )}
          >
            {open ? (
              <motion.div
                layout
                layoutId="search-container"
                className="absolute inset-0 h-8 w-full bg-f1-border p-px shadow-md transition-colors focus-within:bg-f1-border-hover"
                style={{ borderRadius: 12 }}
              >
                <motion.div
                  layout
                  className="relative h-full w-full bg-f1-background"
                  style={{ borderRadius: 11 }}
                >
                  <motion.div
                    className="absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon"
                    layoutId="search-icon"
                  >
                    <IconComponent loading={loadingTest} />
                  </motion.div>
                  <motion.input
                    ref={inputRef}
                    type="text"
                    value={value}
                    placeholder={placeholderText}
                    onChange={(e) => onChange(e.target.value)}
                    className="h-full w-full appearance-none rounded border-none bg-f1-background px-7 py-2 text-base text-f1-foreground"
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
                  "relative h-8 w-8 bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
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
                    className="absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold"
                    layoutId="search-icon"
                  >
                    <IconComponent loading={loadingTest} />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            <button
              type="button"
              className="text-medium absolute -bottom-5 right-0 rounded-xs bg-f1-background-accent-bold p-1 text-xs text-f1-foreground-inverse"
              onClick={(e) => {
                e.stopPropagation()
                setLoadingTest(!loadingTest)
              }}
            >
              Load
            </button>
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </LayoutGroup>
  )
}
