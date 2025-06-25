import { Button } from "@/factorial-one"
import { Plus } from "@/icons/app"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { AddBlockButtonConfig } from "./types"

interface AddBlockButtonProps {
  position: { top: number; left: number }
  nodePos: number
  config?: AddBlockButtonConfig
  onAddBlock: (position: number) => void
}

export const AddBlockButton: React.FC<AddBlockButtonProps> = ({
  position,
  nodePos,
  config,
  onAddBlock,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const labels = config?.labels || {
    addBlock: "Add block",
    addBlockHint: "Click to add a block below",
  }

  useEffect(() => {
    // Simple timeout to show the button after mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onAddBlock(nodePos)
  }

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  if (!config?.enabled && config?.enabled !== undefined) {
    return null
  }

  return (
    <div
      className={cn(
        "pointer-events-auto fixed z-50 transition-opacity duration-200 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        top: position.top,
        left: position.left,
        transform: "translate(-100%, -50%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={labels.addBlockHint}
    >
      <div className="shadow-sm flex h-6 w-6 items-center justify-center rounded-full border border-f1-border-secondary bg-f1-background hover:bg-f1-background-secondary hover:shadow-md">
        <Button
          onClick={handleClick}
          variant="neutral"
          size="sm"
          hideLabel
          label={labels.addBlock}
          icon={Plus}
        />
      </div>
    </div>
  )
}
