import { ReactElement } from "react"

export type SerializableProps<
  T extends Record<string, string> = Record<string, string>,
> = T

export type ActivityDefinition<
  Data extends SerializableProps = Record<string, string>,
> = {
  component: ActivityComponent<Data>
}

export type RenderedActivity = {
  element: ReactElement
  data: SerializableProps
  onClose?: () => void
}

export type ActivityComponent<Data extends SerializableProps> = React.FC<Data>
