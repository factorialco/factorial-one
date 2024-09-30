const avatarColors: Record<string, string> = {
  grey: "bg-f1-icon",
  radical: "bg-f1-icon-critical",
  tangerine: "bg-f1-icon-warning",
  malibu: "bg-f1-icon-info",
  lime: "bg-f1-icon-positive",
  champagne: "bg-f1-foreground-positive",
  viridian: "bg-f1-foreground-accent",
  purple: "bg-f1-foreground-info",
}

export type AvailableColors = keyof typeof avatarColors

export const getColorFromText = (
  label: string | undefined
): AvailableColors => {
  const colorKeys = Object.keys(avatarColors)
  const colorVals = avatarColors
  let hash = 0

  if (label === undefined || label.length === 0) {
    return colorVals[colorKeys[0] ?? ""] || ""
  }

  for (let i = 0; i < label.length; i++) {
    hash = label.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  hash = ((hash % colorKeys.length) + colorKeys.length) % colorKeys.length

  return colorVals[colorKeys[hash]] ?? ""
}
