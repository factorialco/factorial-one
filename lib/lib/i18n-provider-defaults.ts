export type TranslationsType = typeof defaultTranslations

const defaultTranslations = {
  actions: {
    save: "Save",
    cancel: "Cancel",
  },
} as const

export { defaultTranslations }
