import { Badge } from "@/experimental/exports"
import { Icon } from "@/factorial-one"
import { Check, CrossedCircle, Link } from "@/icons/app"
import { useI18n } from "@/lib/i18n-provider"
import { cn, focusRing } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Editor } from "@tiptap/react"
import { useState } from "react"

interface LinkPopupProps {
  linkPlaceholder: string
  editor: Editor
}

const LinkPopup = ({ linkPlaceholder, editor }: LinkPopupProps) => {
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

  return (
    <div className="z-50 flex w-max flex-row gap-2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm">
      <div
        className={cn(
          "flex w-96 appearance-none items-center gap-2 rounded-md border-0 bg-f1-background px-2 py-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary",
          !editor.isActive("link")
            ? focusRing("focus:ring-f1-border-hover") +
                "hover:ring-f1-border-hover"
            : "cursor-auto"
        )}
      >
        <Badge
          icon={checkIfUrlIsValid(url) ? Check : Link}
          type={checkIfUrlIsValid(url) ? "positive" : "neutral"}
          size="md"
        />

        {editor.isActive("link") ? (
          <>
            <p className="text-md flex-grow py-0.5 font-normal text-f1-foreground">
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
          <input
            className="w-full shrink disabled:cursor-not-allowed"
            type="text"
            placeholder={linkPlaceholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        )}
      </div>
      {!editor.isActive("link") && (
        <Button
          variant="default"
          type="button"
          onClick={(e) => {
            e.preventDefault()
            handleSave()
          }}
          disabled={!checkIfUrlIsValid(url)}
        >
          {i18n.actions.save}
        </Button>
      )}
    </div>
  )
}

export { LinkPopup }
