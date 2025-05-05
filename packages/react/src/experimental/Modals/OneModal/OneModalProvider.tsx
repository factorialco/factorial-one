import { createContext, useContext } from "react"
import { ModalPosition } from "./types"

type OneModalContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
  position: ModalPosition
}

export const OneModalContext = createContext<OneModalContextType>({
  open: false,
  onClose: () => {},
  position: "center",
  shownBottomSheet: false,
})

export const OneModalProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  position,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  position: ModalPosition
  children: React.ReactNode
}) => {
  return (
    <OneModalContext.Provider
      value={{ open: isOpen, onClose, position, shownBottomSheet }}
    >
      {children}
    </OneModalContext.Provider>
  )
}

export const useOneModal = () => {
  const context = useContext(OneModalContext)
  return context
}
