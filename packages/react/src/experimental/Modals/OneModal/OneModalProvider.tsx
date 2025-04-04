import { createContext, useContext } from "react"

type OneModalContextType = {
  open: boolean
  onClose: () => void
}

export const OneModalContext = createContext<OneModalContextType>({
  open: false,
  onClose: () => {},
})

export const OneModalProvider = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) => {
  return (
    <OneModalContext.Provider value={{ open: isOpen, onClose }}>
      {children}
    </OneModalContext.Provider>
  )
}

export const useOneModal = () => {
  const { open, onClose } = useContext(OneModalContext)
  return { open, onClose }
}
