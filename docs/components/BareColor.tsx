import { useState } from "react"

import { Button } from "@/components/Actions/Button"
import { CopyIcon } from "lucide-react"

type Props = {
  name: string
  description?: string
  cssColor?: string
}

export function BareColor({ name }: Props) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className="bg-f1-background-secondary border-f1-border flex max-w-[600px] flex-row items-center space-x-3 rounded-sm border border-solid px-2 py-1.5">
      <div className="w-12 h-8 rounded-sm" style={{background: `hsl(var(--${name}))`}}/>
      <div className="flex flex-1 flex-col space-y-0">
        <span className="font-mono text-f1-foreground flex-grow font-semibold">
          {name}
        </span>
      </div>
      <Button
        onClick={copyToClipboard}
        variant="ghost"
        disabled={copied}
        label={copied ? "Copied!" : "Copy"}
        icon={copied ? undefined : CopyIcon}
      />
    </div>
  )
}
