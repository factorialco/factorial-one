import { Tooltip } from "../../../Overlays/Tooltip"
import { DotTag, NewColor } from "../DotTag"

type TooltippedDotTagProps = {
  label: string
  description?: string
  color: NewColor
  noTooltip?: boolean
}

export const TooltippedDotTag = ({
  label,
  description,
  color,
  noTooltip = false,
}: TooltippedDotTagProps) => {
  if (noTooltip) {
    return <DotTag text={label} color={color} />
  }

  return (
    <Tooltip label={label} description={description ?? ""}>
      <div>
        <DotTag text={label} color={color} />
      </div>
    </Tooltip>
  )
}

TooltippedDotTag.displayName = "TooltippedDotTag"
