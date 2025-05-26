import { useSidebar } from "@/experimental/exports"
import { TabsProps } from "@/experimental/Navigation/Tabs"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/ui/dialog"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"
import React, { ComponentProps, useEffect, useState } from "react"
import { OneModalContent } from "./OneModalContent/OneModalContent"
import { OneModalHeader } from "./OneModalHeader/OneModalHeader"
import { OneModalProvider } from "./OneModalProvider"
import { ModalPosition } from "./types"
import { useIsSmallScreen } from "./utils"

export type OneModalProps = {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal is closed */
  onClose: () => void
  /** Whether to render the modal as a bottom sheet on mobile */
  asBottomSheetInMobile?: boolean
  position?: ModalPosition
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
  asBottomSheetInMobile = true,
  position = "center",
  onClose,
  isOpen,
  children,
}) => {
  const { sidebarState } = useSidebar()
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

  const isSmallScreen = useIsSmallScreen()

  if (isSmallScreen && asBottomSheetInMobile) {
    return (
      <OneModalProvider
        isOpen={open}
        onClose={handleClose}
        position={position}
        shownBottomSheet
      >
        <Drawer open={open} onOpenChange={handleOpenChange}>
          <DrawerOverlay className="bg-f1-background-overlay" />
          <DrawerContent className="max-h-[95vh] bg-f1-background">
            {children}
          </DrawerContent>
        </Drawer>
      </OneModalProvider>
    )
  }

  let contentClassName =
    "flex flex-col max-h-[620px] max-w-[680px] overflow-hidden"

  const isSidePosition = position === "left" || position === "right"

  if (isSidePosition) {
    contentClassName = cn(
      "overflow-x-hidden flex flex-col fixed top-3 bottom-3 translate-y-0 translate-x-0 max-w-[539px] rounded-md border border-solid border-f1-border-secondary",
      position === "left" &&
        (sidebarState === "locked" ? "left-[248px]" : "left-3"),
      position === "right" && "left-auto right-3"
    )
  }

  return (
    <OneModalProvider isOpen={open} onClose={handleClose} position={position}>
      <Dialog open={open} onOpenChange={onClose} modal={position === "center"}>
        <DialogContent
          withTraslateAnimation={!isSidePosition}
          className={contentClassName}
        >
          {children}
        </DialogContent>
      </Dialog>
    </OneModalProvider>
  )
}
