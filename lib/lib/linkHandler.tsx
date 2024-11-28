import {
  AnchorHTMLAttributes,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
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

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  exactMatch?: boolean
}

function stripTrailingSlash(path: string) {
  return path.endsWith("/") ? path.slice(0, -1) : path
}

export const useNavigation = () => {
  const { currentPath } = useLinkContext()

  const isActive = useCallback(
    (
      path: string | undefined,
      { exact = false }: { exact?: boolean } = { exact: false }
    ) => {
      if (currentPath === undefined || path === undefined) return false

      if (exact)
        return stripTrailingSlash(currentPath) === stripTrailingSlash(path)

      return `${stripTrailingSlash(currentPath)}/`.startsWith(
        `${stripTrailingSlash(path)}/`
      )
    },
    [currentPath]
  )

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
      "data-is-active": isActive(props.href, { exact: props.exactMatch }),
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
