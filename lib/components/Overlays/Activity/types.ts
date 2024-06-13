import { ReactElement } from "react"

export type SerializableProps<
  T extends Record<string, string> = Record<string, string>,
> = T

export type ActivityDefinition<
  Data extends SerializableProps = Record<string, string>,
> = {
  component: React.FC<Data>
}

export type RenderedActivity = {
  element: ReactElement
  data: SerializableProps
  onClose?: () => void
}
