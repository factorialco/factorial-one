export const columnWidths = {
  auto: undefined,
  "10": "10%",
  "20": "20%",
  "30": "30%",
  "40": "40%",
  "50": "50%",
  "60": "60%",
  "70": "70%",
  "80": "80%",
  "90": "90%",
  "100": "100%",
  fit: "1px",
} as const

export type ColumnWidth = keyof typeof columnWidths
