export type FilterTypeSchema<Options = never> = {
  options: Options extends never ? never : Options
  label: string
}

export type FilterTypeComponentProps<Value = unknown, Options = never> = {
  schema: FilterTypeSchema<Options>
  value: Value
  onChange: (value: Value) => void
}

export type FilterTypeDefinition<Value = unknown, Options = never> = {
  /** Check if the value is empty */
  emptyValue: Value
  isEmpty: (value: Value) => boolean
  /** Render the filter form */
  render: <Schema extends FilterTypeSchema<Options>>(props: {
    schema: Schema
    value: Value
    onChange: (value: Value) => void
  }) => React.ReactNode
  /**
   * The value label to display in the filter chips
   */
  chipLabel: (
    value: Value,
    context: { schema: FilterTypeSchema<Options> }
  ) => string | Promise<string>

  /**
   * The options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
   */
  options?: Options
}
