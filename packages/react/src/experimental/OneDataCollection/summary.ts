export type SummaryType = "sum"

export type SummariesDefinition = Record<
  string,
  {
    type: SummaryType
  }
>

export type SummariesState<Definition extends SummariesDefinition> = {
  field: keyof Definition
  type: SummaryType
} | null

/**
 * Type helper to extract keys from a SummaryDefinition
 */
export type SummaryKey<Definition extends SummariesDefinition> =
  Definition extends readonly string[] ? Definition[number] : keyof Definition
