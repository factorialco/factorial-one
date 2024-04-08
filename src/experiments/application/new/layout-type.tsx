import { Dispatch, SetStateAction, createContext, useContext } from "react"

type LayoutTypeContextProps = {
  layoutType: string
  setLayoutType: Dispatch<SetStateAction<string>> | null
}

export const LayoutTypeContext = createContext<LayoutTypeContextProps>({
  layoutType: "Regular",
  setLayoutType: null,
})

export function useLayoutType(): LayoutTypeContextProps {
  return useContext(LayoutTypeContext)
}
