import { cn } from "@/lib/utils"
import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu"
import * as React from "react"

function getSubtree(
  options: { asChild: boolean | undefined; children: React.ReactNode },
  content: React.ReactNode | ((children: React.ReactNode) => React.ReactNode)
) {
  const { asChild, children } = options
  if (!asChild)
    return typeof content === "function" ? content(children) : content

  const firstChild = React.Children.only(children) as React.ReactElement
  return React.cloneElement(firstChild, {
    children:
      typeof content === "function"
        ? content(firstChild.props.children)
        : content,
  })
}

const TabNavigation = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    "orientation" | "defaultValue" | "dir"
  >
>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Root ref={forwardedRef} {...props} asChild={false}>
    <NavigationMenuPrimitives.List
      className={cn(
        // base
        "flex items-center justify-start gap-1 whitespace-nowrap border-solid px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        // border color
        "border-transparent border-b-f1-border",
        className
      )}
    >
      {children}
    </NavigationMenuPrimitives.List>
  </NavigationMenuPrimitives.Root>
))

TabNavigation.displayName = "TabNavigation"

const TabNavigationLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Link>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>,
    "onSelect"
  > & { disabled?: boolean }
>(({ asChild, disabled, className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Item className="flex" aria-disabled={disabled}>
    <NavigationMenuPrimitives.Link
      aria-disabled={disabled}
      className={cn(
        "group relative flex shrink-0 select-none items-center justify-center",
        disabled ? "pointer-events-none" : ""
      )}
      ref={forwardedRef}
      onSelect={() => {}}
      asChild={asChild}
      {...props}
    >
      {getSubtree({ asChild, children }, (children) => (
        <span
          className={cn(
            // base
            "-mb-px flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-1.5 font-medium transition-all",
            // text color
            "text-f1-foreground-secondary",
            // hover
            "group-hover:bg-f1-background-secondary",
            // selected
            "group-data-[active]:border-f1-border group-data-[active]:bg-f1-background-secondary",
            // disabled
            disabled
              ? "text-gray-300 dark:text-gray-700 pointer-events-none"
              : "",
            className
          )}
        >
          {children}
        </span>
      ))}
    </NavigationMenuPrimitives.Link>
  </NavigationMenuPrimitives.Item>
))

TabNavigationLink.displayName = "TabNavigationLink"

export { TabNavigation, TabNavigationLink }
