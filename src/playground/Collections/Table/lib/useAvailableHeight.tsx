import { RefObject, useEffect, useState } from "react"

function useAvailableHeight(elementRef: RefObject<HTMLElement>, offset = 0) {
  const [availableHeight, setAvailableHeight] = useState(0)

  useEffect(() => {
    if (!elementRef.current) return

    const updateHeight = () => {
      const element = elementRef.current

      if (!element) return

      const rect = element.getBoundingClientRect()
      const availableHeight = window.innerHeight - rect.top - offset

      setAvailableHeight(availableHeight)
    }

    updateHeight()
    window.addEventListener("resize", updateHeight)

    return () => {
      window.removeEventListener("resize", updateHeight)
    }
  }, [elementRef, offset])

  return availableHeight
}

export default useAvailableHeight
