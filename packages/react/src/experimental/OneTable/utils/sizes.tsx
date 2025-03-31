export const columnWidths = {
  auto: undefined,
  fit: 1,
} as const

export type ColumnWidth = keyof typeof columnWidths | number
