export const defaultTranslations = {
  navigation: {
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next",
  },
  actions: {
    save: "Save",
    cancel: "Cancel",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected",
    },
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    cancel: "Cancel",
  },
  collections: {
    actions: {
      actions: "Actions",
    },
    visualizations: {
      card: "Card view",
      kanban: "Kanban view",
      table: "Table view",
      pagination: {
        of: "of",
      },
    },
    filters: {
      failedToLoadOptions: "Failed to load options",
      retry: "Retry",
    },
  },
  shortcut: "Shortcut",
  date: {
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
    },
  },
} as const

type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

export type TranslationsType = TranslationShape<typeof defaultTranslations>
