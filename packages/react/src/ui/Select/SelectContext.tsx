import { createContext, useContext } from "react"

type SelectContextType = {
  value?: string
  open?: boolean
}

export const SelectContext = createContext<SelectContextType>({
  value: undefined,
  open: false,
})

export const useSelectContext = () => useContext(SelectContext)
