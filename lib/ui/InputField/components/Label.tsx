import { baseColors } from "@/tokens/colors.ts"

type LabelProps = {
  label: string
  required?: boolean
  htmlFor: string
}
const Label = ({ label, required, htmlFor }: LabelProps) => {
  return (
    <label
      className="text-sm font-medium text-f1-foreground-secondary"
      htmlFor={htmlFor}
    >
      {label}
      (required && (
      <span
        style={{
          color: baseColors["red"][50],
        }}
        aria-hidden="true"
      >
        *
      </span>
      ) )
    </label>
  )
}

export { Label }
