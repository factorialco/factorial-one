import { OneEllipsis } from "@/components/OneEllipsis"
import { cn } from "@/lib/utils"

type LabelProps = {
  label: string
  required?: boolean
  htmlFor: string
  className?: string
}
const Label = ({ label, required, htmlFor, className }: LabelProps) => {
  return (
    <label
      className={cn(
        className,
        "text-md flex max-w-full gap-1 font-medium text-f1-foreground-secondary"
      )}
      htmlFor={htmlFor}
      aria-required={required}
      aria-label={label}
    >
      <OneEllipsis className="min-w-0 max-w-full flex-1 border-2 border-solid border-[#0f0]">
        {label}
      </OneEllipsis>
      {required && (
        <span className="text-f1-foreground-critical" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}

export { Label }
