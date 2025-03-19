const availableColors = {
  "chart-1": "var(--chart-1)",
  "chart-2": "var(--chart-2)",
  "chart-3": "var(--chart-3)",
  "chart-4": "var(--chart-4)",
  "chart-5": "var(--chart-5)",
  "chart-6": "var(--chart-6)",
  "chart-7": "var(--chart-7)",
  "chart-8": "var(--chart-8)",
}

export type ChartColor = keyof typeof availableColors

export const autoColor = (index: number, withHSL = true) => {
  const colors = Object.values(availableColors)
  const color = colors[index % colors.length]
  return withHSL ? `hsl(${color})` : color
}

export const chartColor = (color: ChartColor) => availableColors[color]
