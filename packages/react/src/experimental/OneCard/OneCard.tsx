import { forwardRef } from "react"
import { CardInternal, CardInternalProps } from "./CardInternal"

const privateProps = ["forceVerticalMetadata"] as const

export type CardProps = Omit<CardInternalProps, (typeof privateProps)[number]>

export const OneCard = forwardRef<HTMLDivElement, CardProps>((props) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as CardInternalProps)

  return <CardInternal {...publicProps} />
})

OneCard.displayName = "Card"
