import { Input } from "@/experimental/exports"
import { Icon } from "@/factorial-one"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"
import { EnhancementOption } from "../../utils/types"

interface OptionProps {
  option: EnhancementOption
  onClick: () => void
}

const Option = ({ option, onClick }: OptionProps) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-row items-center gap-2 bg-f1-background px-3 py-2 hover:bg-f1-background-secondary-hover"
    >
      <p className="text-neutral-40 text-md grow text-ellipsis font-normal">
        {option.label}
      </p>
      {option.subOptions && <Icon icon={ChevronRight} size="md" />}
    </div>
  )
}

interface AIEnhanceMenuProps {
  onSelect: (optionId: string, customIntent?: string) => void
  onClose: () => void
  enhancementOptions: EnhancementOption[]
  canUseCustomPrompt: boolean
  inputPlaceholder: string
}

const AIEnhanceMenu = ({
  onSelect,
  onClose,
  enhancementOptions,
  canUseCustomPrompt,
  inputPlaceholder,
}: AIEnhanceMenuProps) => {
  const [selectedParentOption, setSelectedParentOption] = useState<
    string | null
  >(null)
  const [showCustomInput, setShowCustomInput] = useState(false)
  const customInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (showCustomInput && customInputRef.current) {
      customInputRef.current.focus()
    }
  }, [showCustomInput])

  const handleOptionSelect = (option: EnhancementOption) => {
    if (option.subOptions) {
      setSelectedParentOption(option.id)
    } else if (option.id === "custom-intent") {
      setShowCustomInput(true)
    } else {
      onSelect(option.id)
      onClose()
    }
  }

  const handleBackToMainMenu = () => {
    setSelectedParentOption(null)
    setShowCustomInput(false)
  }

  if (selectedParentOption) {
    const parentOption = enhancementOptions.find(
      (option) => option.id === selectedParentOption
    )
    if (!parentOption || !parentOption.subOptions) return null
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input =
        e.currentTarget.parentElement?.querySelector<HTMLInputElement>("input")
      if (input && input.value.trim()) {
        onSelect("custom-intent", input.value.trim())
        input.value = ""
      }
    }
  }

  return (
    <div
      className="flex w-96 flex-col overflow-hidden rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background shadow-md"
      onClick={(e) => e.stopPropagation()}
    >
      {canUseCustomPrompt && (
        <div className="flex w-full flex-row items-center p-2">
          <Input
            type="text"
            placeholder={inputPlaceholder}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            autoFocus
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
      {enhancementOptions.length > 0 && (
        <div
          className={cn(
            "flex max-h-80 flex-col overflow-y-auto border-0 border-t-[1px] border-solid border-f1-border",
            canUseCustomPrompt ? "border-t" : "border-t-0"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedParentOption ? (
            <>
              <div
                className="flex cursor-pointer flex-row items-center gap-2 border-x-0 border-b-[1px] border-t-0 border-solid border-f1-border bg-f1-background-secondary px-3 py-2 hover:bg-f1-background-secondary-hover"
                onClick={handleBackToMainMenu}
              >
                <Icon icon={ChevronLeft} size="md" />
                <p className="text-neutral-100 text-md grow text-ellipsis font-medium">
                  {
                    enhancementOptions?.find(
                      (option) => option.id === selectedParentOption
                    )?.label
                  }
                </p>
              </div>

              {enhancementOptions
                ?.find((option) => option.id === selectedParentOption)
                ?.subOptions?.map((subOption) => (
                  <Option
                    key={subOption.id}
                    onClick={() => handleOptionSelect(subOption)}
                    option={subOption}
                  />
                ))}
            </>
          ) : (
            enhancementOptions
              .filter((option) => option.id !== "custom-intent")
              .map((option) => (
                <Option
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  option={option}
                />
              ))
          )}
        </div>
      )}
    </div>
  )
}

export { AIEnhanceMenu }
