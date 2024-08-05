import { LinkProps } from "@/components/Actions/Link"
import { createContext, ForwardedRef, ReactNode, useContext } from "react"

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