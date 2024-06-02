import { Card } from "@/components"
import { Component } from "@/lib/component"
import { AutoGrid } from "@/primitives"
import { ComponentProps, forwardRef, LegacyRef } from "react"

type ElementWithId = { id: unknown }

type Props<T extends ElementWithId> = {
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
    <T extends ElementWithId>(
      { elements, children, tileSize }: Props<T>,
      ref: LegacyRef<HTMLElement>
    ) => {
      return (
        <AutoGrid tileSize={tileSize} ref={ref}>
          {elements.map((element, i) => (
            <Card key={String(element.id)}>{children(element, i)}</Card>
          ))}
        </AutoGrid>
      )
    }
  )
) as <T extends ElementWithId>(
  props: Props<T> & { ref?: LegacyRef<HTMLElement> }
) => JSX.Element
