const availableColors = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
}

export type ChartColor = keyof typeof availableColors

export const autoColor = (index: number) => {
  const colors = Object.values(availableColors)
  return colors[index % colors.length]
}

export const chartColor = (color: ChartColor) => availableColors[color]
