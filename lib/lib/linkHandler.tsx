import {
  AnchorHTMLAttributes,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useContext,
  useMemo,
} from "react"

export type LinkContextValue = {
  currentPath?: string
  component?: (
    props: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => JSX.Element
}

const LinkContext = createContext<LinkContextValue | undefined>(undefined)

export const LinkProvider: React.FC<
  {
    children: ReactNode
  } & LinkContextValue
> = ({ children, component, currentPath }) => {
  return (
    <LinkContext.Provider value={{ component, currentPath }}>
      {children}
    </LinkContext.Provider>
  )
}

export const useLinkContext = () => {
  const context = useContext(LinkContext)

  return {
    controller: () => ({}),
    ...context,
  }
}

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const useNavigation = () => {
  const { currentPath } = useLinkContext()

  const isActive = (
    path: string | undefined,
    { exact }: { exact: boolean } = { exact: false }
  ) => {
    if (currentPath === undefined || path === undefined) return false
    if (exact) return currentPath === path
    return currentPath.startsWith(path)
  }

  return {
    currentPath,
    isActive,
  }
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const { component } = useLinkContext()
    const { isActive } = useNavigation()

    const overridenProps = {
      "data-is-active": isActive(props.href) || undefined,
      ...props,
    }

    const Component = useMemo(
      () =>
        forwardRef<HTMLAnchorElement>(function Component(props, ref) {
          if (!component) return <a ref={ref} {...props} />
          return component(props, ref)
        }),
      [component]
    )

    return <Component ref={ref} {...overridenProps} />
  }
)
