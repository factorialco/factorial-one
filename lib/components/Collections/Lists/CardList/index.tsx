import { Card } from "@/components"
import { AutoGrid } from "@/primitives"
import { ComponentProps } from "react"

type Props<T> = {
  elements: Array<T>
  tileSize?: ComponentProps<typeof AutoGrid>["tileSize"]
  children: (element: T, index: number) => React.ReactNode
}

export const CardList = <T,>({ elements, children, tileSize }: Props<T>) => {
  return (
    <AutoGrid tileSize={tileSize}>
      {elements.map((element, i) => (
        <Card>{children(element, i)}</Card>
      ))}
    </AutoGrid>
  )
}
