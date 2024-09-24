import { cva } from "class-variance-authority"
import React from "react"

interface CounterProps {
  value: number
  size?: "base" | "sm"
  type?: "default" | "selected" | "bold"
}

const counterVariants = cva(
  "rounded-xs inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tabular-nums",
  {
    variants: {
      size: {
        base: "min-w-5 p-0.5",
        sm: "min-w-4 px-0.5",
      },
      type: {
        default:
          "border border-solid border-f1-border bg-f1-background-secondary",
        selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        bold: "bg-f1-background-accent-bold text-f1-foreground-inverse",
      },
    },
    defaultVariants: {
      size: "base",
      type: "default",
    },
  }
)

const Counter: React.FC<CounterProps> = ({
  size = "base",
  type = "default",
  value,
}) => {
  return <div className={counterVariants({ size, type })}>{value}</div>
}

export { Counter }
