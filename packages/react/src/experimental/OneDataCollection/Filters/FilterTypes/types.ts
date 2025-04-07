/**
 * Extracts the appropriate value type for a given filter:
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export type FilterValue<T extends FilterTypeDefinition> =
  T extends FilterTypeDefinition<infer U> ? U : never

export type FilterTypeSchema<Options = never> = {
  options: Options
  label: string
}

export type FilterTypeComponentProps<Value = unknown, Options = never> = {
  schema: FilterTypeSchema<Options>
  value: Value
  onChange: (value: Value) => void
}

export type FilterTypeDefinition<Value = unknown, Options = never> = {
  /** Check if the value is empty */
  isEmpty: (value: Value) => boolean
  /** Render the filter form */
  render: (props: {
    schema: {
      options: Options
      label: string
    }
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
