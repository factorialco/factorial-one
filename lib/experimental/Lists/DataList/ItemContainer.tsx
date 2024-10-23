import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils.ts"
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react"

type CommonProp = {
  leftIcon?: IconType
  actionIcon?: () => ReactElement
  text: string
}

type ItemContainerProps = CommonProp & SemanticTagProps

type SemanticTagProps =
  | (HTMLAttributes<HTMLDivElement> & { as?: "div" })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })

export const ItemContainer = forwardRef<HTMLLIElement, ItemContainerProps>(
  (props, ref) => {
    const { text, leftIcon: LeftIcon, actionIcon } = props

    return (
      <li
        className="group flex rounded font-medium text-f1-foreground *:flex-1"
        ref={ref}
      >
        <SemanticTag
          {...props}
          className={cn("flex items-center gap-1.5 p-1.5", props.className)}
        >
          {LeftIcon && <Icon icon={LeftIcon} size="md" aria-hidden="true" />}
          <div className="line-clamp-2 flex-1 text-left">{text}</div>
          {actionIcon !== undefined && (
            <div className="grid">{actionIcon()}</div>
          )}
        </SemanticTag>
      </li>
    )
  }
)

ItemContainer.displayName = "ItemContainer"

const SemanticTag = ({
  children,
  ...rest
}: SemanticTagProps & { children: ReactNode }) => {
  switch (rest.as) {
    case "button":
      return <button {...rest}>{children}</button>
    case "a":
      return <a {...rest}>{children}</a>
    default:
      return <div {...rest}>{children}</div>
  }
}
