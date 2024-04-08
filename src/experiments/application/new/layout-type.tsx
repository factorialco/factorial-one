import { Dispatch, SetStateAction, createContext, useContext } from "react"

type LayoutTypeContextProps = {
  layoutType: string
  setLayoutType: Dispatch<SetStateAction<string>> | null
  employeeId: number
  setEmployeeId: Dispatch<SetStateAction<number>> | null
}

export const LayoutTypeContext = createContext<LayoutTypeContextProps>({
  layoutType: "Regular",
  setLayoutType: null,
  employeeId: 0,
  setEmployeeId: null,
})

export function useLayoutType(): LayoutTypeContextProps {
  return useContext(LayoutTypeContext)
}
