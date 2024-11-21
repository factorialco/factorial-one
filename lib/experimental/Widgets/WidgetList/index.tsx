import { Button } from "@/factorial-one"
import { AnimatePresence, motion } from "framer-motion"
import { ReactElement, useEffect, useRef, useState } from "react"
import { WidgetListItemProps } from "./WidgetListItemTypes"

export interface WidgetListProps<T extends WidgetListItemProps> {
  children: ReactElement<T>[]
  onMoreElementsClick?: () => void
  maxHeight: number
  onItemClick?: (item: T) => void
}

export function WidgetList<T extends WidgetListItemProps>({
  children,
  onMoreElementsClick,
  onItemClick,
  maxHeight = 400,
}: WidgetListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(children.length)
  const containerRef = useRef<HTMLDivElement>(null)
  const BUTTON_HEIGHT = 40

  useEffect(() => {
    const updateVisibleCount = () => {
      if (containerRef.current) {
        let totalHeight = 0
        let count = 0
        const maxAllowedHeight = maxHeight - BUTTON_HEIGHT - 8

        Array.from(containerRef.current.children).forEach((child) => {
          const childElement = child as HTMLDivElement
          const childHeight = childElement.offsetHeight

          if (totalHeight + childHeight > maxAllowedHeight) return

          totalHeight += childHeight
          count += 1
          console.log("totalHeight", maxAllowedHeight, totalHeight)
        })

        setVisibleCount(count)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [children.length, maxHeight])

  return (
    <motion.div
      ref={containerRef}
      style={{ maxHeight }}
      className="overflow-hidden"
      initial={{ opacity: 0, height: 0 }} // Animación inicial
      animate={{ opacity: 1, height: "auto" }} // Animación al montar
      exit={{ opacity: 0, height: 0 }} // Animación al desmontar
      transition={{ duration: 0.3 }} // Control de tiempo
    >
      {children.slice(0, visibleCount).map((child, index) => (
        <AnimatePresence key={index}>
          <motion.div
            onClick={() => onItemClick && onItemClick(child.props)}
            className="cursor-pointer"
            initial={{ opacity: 0, y: 10 }} // Empieza con opacidad baja y desplazado
            animate={{ opacity: 1, y: 0 }} // Se anima a la posición final
            exit={{ opacity: 0, y: 10 }} // Se anima al desmontarse
            transition={{ duration: 0.2 }} // Tiempo para suavizar
          >
            {child}
          </motion.div>
        </AnimatePresence>
      ))}

      {visibleCount < children.length && (
        <AnimatePresence>
          <motion.div
            className="mt-2 pl-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              label={`See all ${children.length - visibleCount}`}
              onClick={onMoreElementsClick}
              variant="neutral"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  )
}
