import { DropdownInternalProps } from "@/experimental/Navigation/Dropdown/internal"
import { Tabs, TabsProps } from "@/experimental/Navigation/Tabs"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"
import React, { ReactNode } from "react"
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[620px] max-w-[680px] overflow-y-auto overflow-x-hidden data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%] sm:top-[50%] sm:translate-y-[-50%] sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-top-[48%]">
        <div className="sticky left-0 right-0 top-0 z-50 bg-f1-background">
          <OneModalHeader
            title={title}
            dropdownItems={dropdownItems}
            onClose={onClose}
          />

          {tabs && (
            <div className="-mx-2">
              <Tabs tabs={tabs} />
            </div>
          )}
        </div>
        <ScrollArea className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col">
          {children}
          <ScrollBar
            orientation="vertical"
            className="[&_div]:bg-f1-background"
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
