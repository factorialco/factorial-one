/**
 * Public implementations of the ButtonInternal component.
 * Button component.
 */
import { forwardRef } from "react"
import { CopyButton } from "./copy"
import { ButtonInternal, ButtonInternalProps } from "./internal"

const privateProps = ["append", "appendButton", "className"] as const

export type ButtonProps = Omit<
  ButtonInternalProps,
  (typeof privateProps)[number]
>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as ButtonInternalProps)

  return <ButtonInternal {...publicProps} ref={ref} />
})

Button.displayName = ButtonInternal.displayName

export { Button, CopyButton }
