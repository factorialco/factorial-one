import { TabsProps } from "@/experimental/Navigation/Tabs"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"
import React, { ComponentProps, useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { Dialog, DialogContent } from "../../../ui/dialog"
import { OneModalContent } from "./OneModalContent/OneModalContent"
import { OneModalHeader } from "./OneModalHeader/OneModalHeader"
import { OneModalProvider } from "./OneModalProvider"

export type OneModalProps = {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal is closed */
  onClose: () => void
  /** Whether to render the modal as a bottom sheet on mobile */
  asBottomSheetInMobile?: boolean
  /** Custom content to render in the modal. Only accepts OneModal.Header and OneModal.Content components */
  children:
    | React.ReactElement<
        | ComponentProps<typeof OneModalHeader>
        | ComponentProps<typeof OneModalContent>
      >
    | React.ReactElement<
        | ComponentProps<typeof OneModalHeader>
        | ComponentProps<typeof OneModalContent>
      >[]
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>

export const OneModal: React.FC<OneModalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      onClose()
    }
  }

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  const isSmallScreen = useMediaQuery("(max-width: 440px)", {
    initializeWithValue: false,
  })

  if (isSmallScreen) {
    return (
      <OneModalProvider isOpen={open} onClose={handleClose}>
        <Drawer open={open} onOpenChange={handleOpenChange}>
          <DrawerOverlay className="bg-f1-background-overlay" />
          <DrawerContent className="max-h-[95vh] bg-f1-background">
            {children}
          </DrawerContent>
        </Drawer>
      </OneModalProvider>
    )
  }

  return (
    <OneModalProvider isOpen={open} onClose={handleClose}>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-h-[620px] max-w-[680px] overflow-y-auto overflow-x-hidden data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] sm:top-[50%] sm:translate-y-[-50%] sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-top-[48%]">
          {children}
        </DialogContent>
      </Dialog>
    </OneModalProvider>
  )
}
