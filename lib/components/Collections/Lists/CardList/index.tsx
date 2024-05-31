import { Card } from "@/components"
import { Component } from "@/lib/component"
import { AutoGrid } from "@/primitives"
import { ComponentProps, forwardRef, LegacyRef } from "react"

type Props<T> = {
  elements: Array<T>
  tileSize?: ComponentProps<typeof AutoGrid>["tileSize"]
  children: (element: T, index: number) => React.ReactNode
}

export const CardList = Component(
  {
    name: "CardList",
    type: "info",
  },
  forwardRef(
    <T,>(
      { elements, children, tileSize }: Props<T>,
      ref: LegacyRef<HTMLElement>
    ) => {
      return (
        <AutoGrid tileSize={tileSize} ref={ref}>
          {elements.map((element, i) => (
            <Card>{children(element, i)}</Card>
          ))}
        </AutoGrid>
      )
    }
  )
) as <T>(props: Props<T> & { ref?: LegacyRef<HTMLElement> }) => JSX.Element
