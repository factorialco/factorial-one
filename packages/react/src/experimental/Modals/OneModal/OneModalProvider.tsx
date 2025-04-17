import { createContext, useContext } from "react"

type OneModalContextType = {
  open: boolean
  onClose: () => void
  shownBottomSheet: boolean
}

export const OneModalContext = createContext<OneModalContextType>({
  open: false,
  onClose: () => {},
  shownBottomSheet: false,
})

export const OneModalProvider = ({
  isOpen,
  onClose,
  shownBottomSheet = false,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  shownBottomSheet?: boolean
  children: React.ReactNode
}) => {
  return (
    <OneModalContext.Provider
      value={{ open: isOpen, onClose, shownBottomSheet }}
    >
      {children}
    </OneModalContext.Provider>
  )
}

export const useOneModal = () => {
  const context = useContext(OneModalContext)
  return context
}
