import { createContext, useContext } from "react"

type SelectContextType = {
  value?: string
  open?: boolean
  asList?: boolean
}

export const SelectContext = createContext<SelectContextType>({
  value: undefined,
  open: false,
  asList: false,
})

export const useSelectContext = () => useContext(SelectContext)
