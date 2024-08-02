import type { LinkProps } from "@/components/Actions/Link"
import { createContext, HTMLAttributes, ReactNode, useContext } from "react"

type LinkContextValue = {
  controller?: (props: LinkProps) => HTMLAttributes<HTMLAnchorElement>
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
