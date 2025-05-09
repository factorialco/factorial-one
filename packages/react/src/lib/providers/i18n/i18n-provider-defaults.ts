export const defaultTranslations = {
  navigation: {
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next",
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    copy: "Copy",
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
      table: "Table view",
      card: "Card view",
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
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other",
    },
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
