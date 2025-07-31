import { forwardRef } from "react"
import { CardInternal, CardInternalProps } from "./CardInternal"

const privateProps = ["forceVerticalMetadata"] as const

export type F0CardProps = Omit<CardInternalProps, (typeof privateProps)[number]>

const F0Card = forwardRef<HTMLDivElement, F0CardProps>((props) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as CardInternalProps)

  return <CardInternal {...publicProps} />
})

F0Card.displayName = "F0Card"
export { F0Card }
