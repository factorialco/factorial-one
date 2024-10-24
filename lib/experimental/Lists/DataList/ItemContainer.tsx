import { Icon, IconType } from "@/components/Utilities/Icon"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
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
  actionIcon?: ({ className }: { className: string }) => ReactElement
  text: string
}

type ItemContainerProps = CommonProp & SemanticTagProps

type SemanticTagProps =
  | (HTMLAttributes<HTMLDivElement> & { as?: "div" })
  | (ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" })

export const ItemContainer = forwardRef<HTMLLIElement, ItemContainerProps>(
  (props, ref) => {
    const { text, leftIcon: LeftIcon, actionIcon, className, ...rest } = props

    return (
      <li
        className="flex rounded font-medium text-f1-foreground *:flex-1"
        ref={ref}
      >
        <SemanticTag
          {...rest}
          className={cn("flex items-center gap-1.5 p-1.5", className)}
        >
          {LeftIcon && <Icon icon={LeftIcon} size="md" aria-hidden="true" />}
          <div className="line-clamp-2 flex-1 text-left">{text}</div>
          {actionIcon !== undefined && (
            <div className="grid">
              {actionIcon({
                className:
                  "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
              })}
            </div>
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
      return (
        <button
          {...rest}
          className={cn(
            "group flex items-center gap-1.5 rounded p-1.5",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
            "hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
            rest.className
          )}
        >
          {children}
        </button>
      )
    case "a":
      return (
        <Link
          {...rest}
          className={cn(
            rest.className,
            "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold"
          )}
        >
          {children}
        </Link>
      )
    default:
      return <div {...rest}>{children}</div>
  }
}
