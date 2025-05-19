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
    moveUp: "Move up",
    moveDown: "Move down",
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
    itemsCount: "items",
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years",
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other",
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day",
      },
      week: {
        currentDate: "This week",
        label: "Week",
      },
      month: {
        currentDate: "This month",
        label: "Month",
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter",
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year",
      },
      year: {
        currentDate: "This year",
        label: "Year",
      },
      range: {
        currentDate: "Today",
        label: "Range",
      },
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
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite",
  },
  notifications: "Notifications",
} as const

type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

export type TranslationsType = TranslationShape<typeof defaultTranslations>
