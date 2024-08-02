import {
  AnchorHTMLAttributes,
  createContext,
  ReactNode,
  useContext,
} from "react"

export type LinkContextValue = {
  controller?: (
    props: AnchorHTMLAttributes<HTMLAnchorElement>
  ) => AnchorHTMLAttributes<HTMLAnchorElement>
}

const LinkContext = createContext<LinkContextValue | undefined>(undefined)

export const LinkProvider: React.FC<
  {
    children: ReactNode
  } & LinkContextValue
> = ({ children, controller }) => {
  return (
    <LinkContext.Provider value={{ controller }}>
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
