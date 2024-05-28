export const gaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
} as const

export const flexItemVariants = {
  grow: {
    true: "grow",
    false: "grow-0",
  },
  shrink: {
    true: "shrink",
    false: "shrink-0",
  },
  padding: {
    sm: "p-2",
    md: "p-4",
    lg: "p-8",
  },
} as const
