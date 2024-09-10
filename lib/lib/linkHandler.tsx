import {
  AnchorHTMLAttributes,
  createContext,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useContext,
} from "react"

export type LinkContextValue = {
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
> = ({ children, component }) => {
  return (
    <LinkContext.Provider value={{ component }}>
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

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { component } = useLinkContext()

  if (!component) return <a ref={ref} {...props} />
  const Component = forwardRef<HTMLAnchorElement>((props, ref) =>
    component(props, ref)
  )

  return <Component ref={ref} {...props} />
})
