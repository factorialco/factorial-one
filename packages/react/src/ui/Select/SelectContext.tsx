import { createContext, useContext } from "react"

export type SelectContextType = {
  open?: boolean
  asList?: boolean
} & (
  | {
      value: string[]
      multiple: true
    }
  | {
      value: string
      multiple: false | never
    }
)

export const SelectContext = createContext<SelectContextType>({
  value: "",
  open: false,
  asList: false,
  multiple: false,
})

export const useSelectContext = () => useContext(SelectContext)
