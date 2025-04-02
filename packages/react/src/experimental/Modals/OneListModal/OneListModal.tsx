import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { Tabs, TabsProps } from "@/experimental/Navigation/Tabs"
import { cn } from "@/lib/utils"
import { Drawer, DrawerContent, DrawerOverlay } from "@/ui/drawer"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import React, { ReactNode, useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { Dialog, DialogContent } from "../../../ui/dialog"
import { OneModalHeader } from "../OneModalHeader/OneModalHeader"

export interface ListModalProps {
  /** Modal title */
  title: string
  /** Dropdown items */
  dropdownItems?: DropdownInternalProps["items"]
  /** Tabs */
  tabs?: TabsProps["tabs"]
  /** Whether the modal is open */
  isOpen: boolean
  /** Set the modal open state */
  setIsOpen: (isOpen: boolean) => void
  /** Callback when modal is closed */
  onClose: () => void
  /** Custom content to render in the list section */
  children: ReactNode
}

export const ListModal: React.FC<ListModalProps> = ({
  title,
  dropdownItems,
  tabs,
  isOpen,
  onClose,
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

  const Content = () => (
    <>
      <OneModalHeader
        title={title}
        dropdownItems={dropdownItems}
        onClose={handleClose}
      />

      {tabs && (
        <div className="-mx-2">
          <Tabs tabs={tabs} />
        </div>
      )}
      <ScrollArea
        className={cn(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-col",
          !isSmallScreen && "max-h-[512px]"
        )}
      >
        {children}
        <ScrollBar
          orientation="vertical"
          className="[&_div]:bg-f1-background"
        />
      </ScrollArea>
    </>
  )

  if (isSmallScreen) {
    return (
      <Drawer open={open} onOpenChange={handleOpenChange}>
        <DrawerOverlay className="bg-f1-background-overlay" />
        <DrawerContent className="max-h-[90vh] bg-f1-background">
          <Content />
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[620px] max-w-[680px] overflow-y-auto overflow-x-hidden data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] sm:top-[50%] sm:translate-y-[-50%] sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-top-[48%]">
        <Content />
      </DialogContent>
    </Dialog>
  )
}
