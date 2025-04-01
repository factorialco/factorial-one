import { Icon } from "@/factorial-one"
import { Ai, ChevronLeft, ChevronRight } from "@/icons/app"
import { Input } from "@/ui/input"
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
      className="flex cursor-pointer flex-row items-center gap-2 bg-f1-background px-3 py-2 hover:bg-f1-background-secondary"
    >
      <p className="text-neutral-40 text-md grow text-ellipsis font-normal">
        {option.label}
      </p>
      {option.subOptions && <Icon icon={ChevronRight} size="md" />}
    </div>
  )
}

interface AIEnhanceMenuProps {
  onSelect: ({
    selectedIntent,
    customIntent,
  }: {
    selectedIntent?: string
    customIntent?: string
  }) => void
  onClose: () => void
  enhancementOptions: EnhancementOption[]
  inputPlaceholder: string
}

const AIEnhanceMenu = ({
  onSelect,
  onClose,
  enhancementOptions,
  inputPlaceholder,
}: AIEnhanceMenuProps) => {
  const [selectedParentOption, setSelectedParentOption] = useState<
    string | null
  >(null)
  const [searchQuery, setSearchQuery] = useState("")
  const customInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (customInputRef.current) {
      customInputRef.current.focus()
    }
  }, [])

  const handleOptionSelect = (option: EnhancementOption) => {
    if (option.subOptions) {
      setSelectedParentOption(option.id)
    } else {
      onSelect({ selectedIntent: option.id, customIntent: undefined })
      onClose()
    }
  }

  const handleBackToMainMenu = () => {
    setSelectedParentOption(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchQuery.trim()) {
        onSelect({
          selectedIntent: undefined,
          customIntent: searchQuery.trim(),
        })
        setSearchQuery("")
        onClose()
      }
    }
  }

  return (
    <div
      className="flex max-h-52 w-96 flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex w-full flex-row items-center p-2">
        <Input
          icon={Ai}
          type="text"
          placeholder={inputPlaceholder}
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={customInputRef}
        />
      </div>
      {enhancementOptions.length > 0 && (
        <>
          {selectedParentOption && (
            <div
              className="flex cursor-pointer flex-row items-center gap-2 bg-f1-background-secondary px-3 py-2 hover:bg-f1-background-secondary-hover"
              onClick={handleBackToMainMenu}
            >
              <Icon icon={ChevronLeft} size="md" />
              <p className="text-neutral-100 text-md grow text-ellipsis font-medium">
                {
                  enhancementOptions.find(
                    (option) => option.id === selectedParentOption
                  )?.label
                }
              </p>
            </div>
          )}
          <div className="flex flex-col overflow-y-auto [scrollbar-width:thin]">
            {selectedParentOption
              ? enhancementOptions
                  .find((option) => option.id === selectedParentOption)
                  ?.subOptions?.map((subOption) => (
                    <Option
                      key={subOption.id}
                      onClick={() => handleOptionSelect(subOption)}
                      option={subOption}
                    />
                  ))
              : enhancementOptions
                  .filter((option) =>
                    option.label
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((option) => (
                    <Option
                      key={option.id}
                      onClick={() => handleOptionSelect(option)}
                      option={option}
                    />
                  ))}
          </div>
        </>
      )}
    </div>
  )
}

export { AIEnhanceMenu }
