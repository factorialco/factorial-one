import { cn } from "@/lib/utils"
import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
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

const tabNavigationVariants = cva(
  "border-b-f1-border-secondary flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap border-b px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      secondary: {
        true: "bg-f1-background-secondary/25",
        false: "bg-f1-background-transparent",
      },
    },
    defaultVariants: {
      secondary: false,
    },
  }
)

interface TabNavigationProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    VariantProps<typeof tabNavigationVariants> {}

const TabNavigation = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Root>,
  TabNavigationProps
>(({ className, children, secondary, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Root ref={forwardedRef} {...props} asChild={false}>
    <NavigationMenuPrimitives.List
      className={cn(tabNavigationVariants({ secondary }), className)}
    >
      {children}
    </NavigationMenuPrimitives.List>
  </NavigationMenuPrimitives.Root>
))

TabNavigation.displayName = "TabNavigation"

const tabNavigationLinkVariants = cva(
  "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  {
    variants: {
      secondary: {
        true: "bg-f1-background/60 group-hover:border-f1-border group-data-[active=true]:border-f1-border group-data-[active=true]:text-f1-foreground",
        false:
          "bg-f1-background-transparent group-hover:bg-f1-background-secondary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-secondary group-data-[active=true]:text-f1-foreground",
      },
      disabled: {
        true: "pointer-events-none text-f1-foreground-disabled",
      },
    },
    defaultVariants: {
      secondary: false,
      disabled: false,
    },
  }
)

interface TabNavigationLinkProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>,
      "onSelect"
    >,
    VariantProps<typeof tabNavigationLinkVariants> {
  active?: boolean
}

const TabNavigationLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Link>,
  TabNavigationLinkProps
>(
  (
    { asChild, disabled, active, className, children, secondary, ...props },
    forwardedRef
  ) => (
    <NavigationMenuPrimitives.Item className="flex">
      <NavigationMenuPrimitives.Link
        data-active={active ? "true" : undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
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
              "border border-solid border-transparent text-f1-foreground-secondary",
              tabNavigationLinkVariants({ secondary, disabled }),
              className
            )}
          >
            {children}
            {active && !secondary && (
              <motion.div
                layoutId="underline"
                className="absolute inset-x-0 -bottom-3 h-px bg-f1-background-bold"
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5,
                }}
              />
            )}
          </span>
        ))}
      </NavigationMenuPrimitives.Link>
    </NavigationMenuPrimitives.Item>
  )
)

TabNavigationLink.displayName = "TabNavigationLink"

export { TabNavigation, TabNavigationLink }
