import { Button } from "@/components/Actions/exports"
import { Badge } from "@/experimental/exports"
import { Icon } from "@/factorial-one"
import { Alert, Check, CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Editor } from "@tiptap/react"
import { useState } from "react"

interface LinkPopupProps {
  linkPlaceholder: string
  editor: Editor
  setOpenLinkPopover: (open: boolean) => void
}

const LinkPopup = ({
  linkPlaceholder,
  editor,
  setOpenLinkPopover,
}: LinkPopupProps) => {
  const [url, setUrl] = useState(editor.getAttributes("link").href || "")

  const checkIfUrlIsValid = (url: string) => {
    const trimmedUrl = url.trim()
    const isValidUrl =
      /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/.*)?$/i.test(
        trimmedUrl
      )
    return isValidUrl
  }

  const handleSave = () => {
    const trimmedUrl = url.trim()
    if (!trimmedUrl) return
    if (!checkIfUrlIsValid(trimmedUrl)) return
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: trimmedUrl })
      .run()
  }

  return (
    <div className="z-50 flex w-80 flex-col divide-y-[1px] divide-solid divide-f1-border-secondary rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background drop-shadow-sm">
      <div className="flex flex-col gap-3 p-2">
        <div
          className={cn(
            "flex w-full appearance-none items-center rounded-md border-0 bg-f1-background p-2 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary",
            !editor.isActive("link")
              ? focusRing("focus:ring-f1-border-hover") +
                  "hover:ring-f1-border-hover"
              : "cursor-auto"
          )}
        >
          {editor.isActive("link") ? (
            <>
              <p className="text-md flex-grow font-normal text-f1-foreground">
                {url}
              </p>
              <Icon
                size="md"
                icon={CrossedCircle}
                className="cursor-pointer text-f1-foreground-tertiary hover:text-f1-foreground-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  editor.chain().focus().unsetLink().run()
                  setUrl("")
                }}
              />
            </>
          ) : (
            <>
              <input
                className="w-full shrink disabled:cursor-not-allowed"
                type="text"
                placeholder={linkPlaceholder}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {checkIfUrlIsValid(url) ? (
                <Badge icon={Check} type="positive" size="md" />
              ) : url.length > 0 ? (
                <Badge icon={Alert} type="warning" size="md" />
              ) : null}
            </>
          )}
        </div>
        {!editor.isActive("link") && (
          <div className="flex flex-row gap-3">
            <Button // @ts-ignore
              className="w-full"
              label="Cancel"
              variant="outline"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setUrl("")
                setOpenLinkPopover(false)
                editor.chain().focus().run()
              }}
            />
            <Button // @ts-ignore
              className="w-full"
              label="Save"
              variant="default"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                handleSave()
              }}
              disabled={!checkIfUrlIsValid(url)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export { LinkPopup }
