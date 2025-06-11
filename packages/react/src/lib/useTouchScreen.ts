import { useEffect, useState } from "react"

export function useTouchScreen() {
  const [isTouchScreen, setIsTouchScreen] = useState(false)

  useEffect(() => {
    setIsTouchScreen(window.matchMedia("(pointer: coarse)").matches)
  }, [])

  return isTouchScreen
}
