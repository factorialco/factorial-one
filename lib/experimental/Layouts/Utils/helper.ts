const avatarColors: Record<string, string> = {
  grey: "f1-icon",
  radical: "f1-icon-critical",
  tangerine: "f1-icon-warning",
  malibu: "f1-icon-info",
  lime: "f1-icon-positive",
  champagne: "f1-foreground-positive",
  viridian: "f1-foreground-accent",
  purple: "f1-foreground-info",
}

export const getColorFromText = (label: string | undefined) => {
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
