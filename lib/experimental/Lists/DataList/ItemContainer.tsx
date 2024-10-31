import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  ActionProps,
  CopyActionProps,
  NavigateActionProps,
} from "@/experimental/Lists/DataList"
import { cn } from "@/lib/utils"
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react"
import { CopyAction } from "./actions/CopyAction"
import { NavigateAction } from "./actions/NavigateAction"

type CommonProp = {
  leftIcon?: IconType | (() => ReactElement)
  action?: ActionProps
  text: string
  className?: string
}

type ItemContainerProps = CommonProp

export const ItemContainer = forwardRef<HTMLLIElement, ItemContainerProps>(
  (props, ref) => {
    const { text, leftIcon: LeftIcon, className, action, ...rest } = props

    return (
      <li
        className="flex rounded font-medium text-f1-foreground *:flex-1"
        ref={ref}
      >
        <ActionTag
          {...rest}
          {...action}
          className={cn("flex items-center gap-1.5 p-1.5", className)}
        >
          {LeftIcon &&
            (typeof LeftIcon === "function" ? (
              LeftIcon({})
            ) : (
              <Icon icon={LeftIcon} size="md" aria-hidden="true" />
            ))}
          <div className="line-clamp-2 flex-1 text-left">{text}</div>
        </ActionTag>
      </li>
    )
  }
)

ItemContainer.displayName = "ItemContainer"

type ActionTagProps =
  | (HTMLAttributes<HTMLDivElement> & { as?: "div" })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      as: "button"
    } & CopyActionProps)
  | (AnchorHTMLAttributes<HTMLAnchorElement> & {
      as: "a"
    } & NavigateActionProps)

const ActionTag = ({
  children,
  ...props
}: ActionTagProps & { children: ReactNode }) => {
  switch (true) {
    case "text" in props:
      return <CopyAction {...props}>{children}</CopyAction>
    case "href" in props:
      return <NavigateAction {...props}>{children}</NavigateAction>
    default:
      return <div {...props}>{children}</div>
  }
}
