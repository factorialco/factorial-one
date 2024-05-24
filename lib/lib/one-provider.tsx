import { useLayoutEffect } from "react"

export const FactorialOneProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useLayoutEffect(() => {
    const classNames = "font-sans text-foreground".split(" ")

    document.body.classList.add(...classNames)

    return () => {
      document.body.classList.remove(...classNames)
    }
  }, [])

  return children
}
