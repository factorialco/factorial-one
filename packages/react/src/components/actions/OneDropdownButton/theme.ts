import { OneDropdownButtonVariant } from "./types.ts"

export const internalButtonVariantsStyles = (
  variant?: OneDropdownButtonVariant
) => {
  const variants = {
    default: { borderColor: "hsl(var(--accent-60))" },
    outline: { borderColor: "hsl(var(--neutral-30))" },
    neutral: { borderColor: "hsl(var(--neutral-30))" },
  }
  return variants[variant || "default"]
}
