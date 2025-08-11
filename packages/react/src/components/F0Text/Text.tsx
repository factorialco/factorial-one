import { experimentalComponent } from "@/lib/experimental"
import { forwardRef } from "react"
import { TextInternal, TextInternalProps } from "./TextInternal"

const privateProps = ["className"] as const

export type F0TextProps = Omit<TextInternalProps, (typeof privateProps)[number]>

const _F0Text = forwardRef<HTMLElement, F0TextProps>((props) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as TextInternalProps)

  return <TextInternal {...publicProps} />
})

_F0Text.displayName = "F0Text"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0Text = experimentalComponent<typeof _F0Text>("F0Text", _F0Text)
