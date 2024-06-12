import { ReactElement } from "react"

export type SerializableProps = Record<string, string>

export type ActivityDefinition<Data extends SerializableProps> = {
  id?: string
  component: React.FC<Data>
}

export type RenderedActivity = {
  id?: string
  element: ReactElement
  data: SerializableProps
  onClose?: () => void
}
