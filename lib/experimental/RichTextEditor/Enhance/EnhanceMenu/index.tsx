import React, { useEffect, useRef, useState } from "react"

import { Icon } from "@factorialco/factorial-one"
import { Input } from "@factorialco/factorial-one/dist/experimental"
import { ChevronLeft, ChevronRight } from "@factorialco/factorial-one/icons/app"

import Text from "design-system/Text"
import Box from "design-system/layouts/Box"

import { EnhancementOption } from "@/experimental/RichTextEditor"

interface AIEnhanceMenuProps {
  onSelect: (optionId: string, customIntent?: string) => void
  onClose: () => void
  enhancementOptions: EnhancementOption[]
}

const AIEnhanceMenu = ({
  onSelect,
  onClose,
  enhancementOptions,
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
      // If this option has suboptions, show them
      setSelectedParentOption(option.id)
    } else if (option.id === "custom-intent") {
      // For custom intent, show the custom input field
      setShowCustomInput(true)
    } else {
      // For regular options, just select them
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
    <Box
      background="white"
      borderRadius={{ all: "abs012" }}
      boxShadow="s200"
      onClick={(e) => e.stopPropagation()}
      width="s360"
      overflowY="hidden"
      overflowX="hidden"
      border={{ all: { style: "solid", width: "s1", color: "grey300" } }}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        gap="s8"
        paddingX="s12"
        paddingY="s12"
      >
        <Input
          type="text"
          placeholder="What do you want the AI to do?"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - The Input component from Factorial doesn't expose autoFocus but it works
          autoFocus
          onKeyDown={handleKeyDown}
        />
      </Box>
      {enhancementOptions.length > 0 && (
        <Box
          border={{ top: { style: "solid", width: "s1", color: "grey300" } }}
          flexDirection="column"
          overflowY="auto"
          maxHeight="s300"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedParentOption ? (
            <>
              <Box
                flexDirection="row"
                alignItems="center"
                paddingX="s12"
                paddingY="s8"
                gap="s8"
                background="grey100"
                border={{
                  bottom: { style: "solid", width: "s1", color: "grey300" },
                }}
                onClick={handleBackToMainMenu}
                className="hoverEffect"
              >
                <Icon icon={ChevronLeft} size="md" />
                <Text size="300" weight="medium">
                  {
                    enhancementOptions?.find(
                      (option) => option.id === selectedParentOption
                    )?.label
                  }
                </Text>
              </Box>

              {enhancementOptions
                ?.find((option) => option.id === selectedParentOption)
                ?.subOptions?.map((subOption) => (
                  <Box
                    key={subOption.id}
                    onClick={() => handleOptionSelect(subOption)}
                    paddingX="s12"
                    paddingY="s8"
                    flexDirection="row"
                    justifyContent="spaceBetween"
                    className="hoverEffect"
                  >
                    <Text size="300">{subOption.label}</Text>
                  </Box>
                ))}
            </>
          ) : (
            enhancementOptions
              .filter((option) => option.id !== "custom-intent")
              .map((option) => (
                <Box
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  paddingX="s12"
                  paddingY="s8"
                  flexDirection="row"
                  justifyContent="spaceBetween"
                  className="hoverEffect"
                >
                  <Text size="300">{option.label}</Text>
                  {option.subOptions && <Icon icon={ChevronRight} size="md" />}
                </Box>
              ))
          )}
        </Box>
      )}
    </Box>
  )
}

export { AIEnhanceMenu }
