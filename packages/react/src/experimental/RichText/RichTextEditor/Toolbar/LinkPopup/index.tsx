import { Badge } from "@/experimental/exports"
import { Icon } from "@/factorial-one"
import { Alert, Check, Cross, CrossedCircle, Link } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { cn, focusRing } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Editor } from "@tiptap/react"
import { useState } from "react"

interface LinkPopupProps {
  linkPlaceholder: string
  editor: Editor
  onClose: () => void
}

const LinkPopup = ({ linkPlaceholder, editor, onClose }: LinkPopupProps) => {
  const i18n = useI18n()

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

  const handlePaste = () => {
    setUrl("")
    navigator.clipboard.readText().then((text) => {
      setUrl(text)
    })
  }

  const handleDelete = () => {
    editor.chain().focus().unsetLink().run()
    setUrl("")
  }

  return (
    <div className="dark z-50 flex w-max flex-row gap-1 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm">
      <Button
        variant="ghost"
        size="md"
        onClick={(e) => {
          e.preventDefault()
          onClose()
        }}
        className="aspect-square p-0"
      >
        <Icon icon={Cross} />
      </Button>
      <div
        className={cn(
          "flex w-80 appearance-none items-center gap-2 rounded border-0 bg-f1-background py-1 pl-2 pr-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary",
          !editor.isActive("link")
            ? focusRing("focus:ring-f1-border-hover") +
                "hover:ring-f1-border-hover"
            : "cursor-auto"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center",
            url.length > 0 ? "w-6" : "w-4"
          )}
        >
          <Badge
            icon={
              url.length > 0 ? (checkIfUrlIsValid(url) ? Check : Alert) : Link
            }
            type={
              url
                ? checkIfUrlIsValid(url)
                  ? "positive"
                  : "warning"
                : "neutral"
            }
            size={url.length > 0 ? "sm" : "lg"}
          />
        </div>

        <input
          className="w-full shrink text-f1-foreground disabled:cursor-not-allowed"
          type="text"
          placeholder={linkPlaceholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave()
            }
          }}
        />

        {editor.isActive("link") && (
          <Icon
            size="md"
            icon={CrossedCircle}
            className="cursor-pointer text-f1-foreground-tertiary hover:text-f1-foreground-secondary"
            onClick={handleDelete}
          />
        )}

        <Button variant="outline" type="button" size="sm" onClick={handlePaste}>
          Paste
        </Button>
      </div>
      <Button
        variant="default"
        type="button"
        onClick={(e) => {
          e.preventDefault()
          handleSave()
        }}
      >
        {i18n.actions.save}
      </Button>
    </div>
  )
}

export { LinkPopup }
