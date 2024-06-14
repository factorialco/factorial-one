export type SerializableProps<
  T extends Record<string, string> = Record<string, string>,
> = T

export type ActivityDefinition<
  Data extends SerializableProps = Record<string, string>,
> = {
  component: ActivityComponent<Data>
}

export type ActivityComponent<Data extends SerializableProps> = React.FC<Data>
