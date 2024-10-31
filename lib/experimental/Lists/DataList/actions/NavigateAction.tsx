import { Icon } from "@/components/Utilities/Icon"
import { NavigateActionProps as NavigationActionP } from "@/experimental/Lists/DataList"
import ChevronRight from "@/icons/ChevronRight.tsx"
import { Link } from "@/lib/linkHandler.tsx"
import { cn } from "@/lib/utils.ts"
import { AnchorHTMLAttributes, memo, ReactNode } from "react"

export type NavigateActionProps = {
  children: ReactNode
} & NavigationActionP &
  AnchorHTMLAttributes<HTMLAnchorElement>

export const NavigateAction = memo(
  ({ children, className, ...props }: NavigateActionProps) => {
    return (
      <Link
        {...props}
        className={cn(
          "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
          "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
          className
        )}
      >
        {children}
        <div className="grid">
          <Icon
            aria-hidden={true}
            icon={ChevronRight}
            size="md"
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
          />
        </div>
      </Link>
    )
  }
)

NavigateAction.displayName = "NavigateAction"
