import { Checkbox as CheckboxRoot } from "@/ui/checkbox"

interface CheckboxProps {
  /**
   * The title of the checkbox
   */
  title?: string

  /**
   * The id of the checkbox
   */
  id?: string

  /**
   * The checked state of the checkbox
   * @default false
   */
  checked?: boolean

  /**
   * Whether the checkbox is indeterminate
   * @default false
   */
  indeterminate?: boolean

  /**
   * The callback function that is called when the checkbox is checked
   */
  onCheckedChange?: (checked: boolean) => void

  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * The value of the checkbox
   */
  value?: string

  /**
   * Whether to hide the label
   * @default false
   */
  hideLabel?: boolean

  /**
   * Whether the checkbox is only presentational, so it does not have functionality
   * @default false
   */
  presentational?: boolean
}

export function Checkbox({
  title,
  onCheckedChange,
  id,
  disabled,
  indeterminate = false,
  checked = false,
  value,
  hideLabel = false,
  presentational = false,
  ...rest
}: CheckboxProps) {
  return (
    <CheckboxRoot
      title={title}
      onCheckedChange={onCheckedChange}
      id={id}
      disabled={disabled}
      indeterminate={indeterminate}
      checked={checked}
      value={value}
      hideLabel={hideLabel}
      tabIndex={presentational ? -1 : undefined}
      {...rest}
    />
  )
}
