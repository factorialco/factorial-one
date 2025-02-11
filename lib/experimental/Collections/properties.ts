/**
 * Base interface for all property schemas.
 * Defines the common structure that all property types must implement.
 */
interface BasePropertySchema {
  type: unknown
  value: unknown
  /** Human-readable label for the property */
  label: string
}

/**
 * Schema definition for number properties.
 * Used for numeric values in the collection.
 */
export interface NumberPropertySchema extends BasePropertySchema {
  type: "number"
  value: number
}

/**
 * Schema definition for string properties.
 * Used for text values in the collection.
 */
export interface StringPropertySchema extends BasePropertySchema {
  type: "string"
  value: string
}

/**
 * Schema definition for date properties.
 * Used for temporal values in the collection.
 */
export interface DatePropertySchema extends BasePropertySchema {
  type: "date"
  value: Date
}

/**
 * Union type of all available property schemas.
 * Used to constrain property definitions to supported types.
 */
export type PropertySchema =
  | NumberPropertySchema
  | StringPropertySchema
  | DatePropertySchema

/**
 * Maps property types to their corresponding value types.
 * Used for type inference and validation.
 */
export type PropertyTypeMap = {
  [T in PropertySchema["type"]]: Extract<PropertySchema, { type: T }>["value"]
}

/**
 * Extracts the value type from a property definition.
 *
 * @template Definition - The property schema to extract from
 */
export type ExtractPropertyValue<Definition extends PropertySchema> =
  Definition["value"]

/**
 * Extracts the configuration options from a property definition,
 * excluding the runtime value.
 *
 * @template Definition - The property schema to extract from
 */
export type ExtractPropertyOptions<Definition extends PropertySchema> = Omit<
  Definition,
  "value"
>

/**
 * Extracts the runtime type from a property's configuration options.
 * Used to determine the actual type of values that will be stored.
 *
 * @template T - The property options to extract from
 */
export type ExtractPropertyType<
  T extends ExtractPropertyOptions<PropertySchema>,
> = T extends { type: PropertySchema["type"] }
  ? PropertyTypeMap[T["type"]]
  : never
