import { useMediaQuery } from "usehooks-ts"

export const useReducedMotion = () => {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  return prefersReducedMotion
}
