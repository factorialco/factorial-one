export const defaultTranslations = {
  navigation: {
    sidebar: "Main navigation",
  },
  actions: {
    save: "Save",
    cancel: "Cancel",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    cancel: "Cancel",
  },
  collections: {
    visualizations: {
      table: "Table view",
      card: "Card view",
    },
  },
  shortcut: "Shortcut",
} as const

type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

export type TranslationsType = TranslationShape<typeof defaultTranslations>
