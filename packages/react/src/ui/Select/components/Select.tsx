import * as React from "react"
import { useState } from "react"
import { SelectContext, SelectContextType } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  asList?: boolean
  placeholder?: string
  options: { value: string; label: string }[]
}
/**
 * Select Root component
 */

const Select = (props: SelectProps) => {
  // Extract the specific props we need
  const {
    asList,
    placeholder: _placeholder,
    options: _options,
    onValueChange,
    multiple,
    ...selectPrimitiveProps
  } = props

  // If open prop is not provided, we'll manage it internally
  const [internalOpen, setInternalOpen] = useState(asList ? true : false)

  // Use either the controlled open state from props or the internal state
  const isOpen = asList
    ? true
    : props.open !== undefined
      ? props.open
      : internalOpen

  const handleOpenChange = (open: boolean) => {
    // Update internal state if we're not in controlled mode
    if (props.open === undefined) {
      setInternalOpen(open)
    }

    // Call the onOpenChange prop if provided
    props.onOpenChange?.(open)
  }

  React.useEffect(() => {
    console.log("props.value", props.value)
  }, [props.value])

  const [localValue, setLocalValue] = useState(props.value)

  const contextValue: SelectContextType = {
    value: localValue,
    open: isOpen,
    asList: props.asList,
    multiple: props.multiple || false,
  } as SelectContextType

  const commonProps = {
    ...selectPrimitiveProps,
    open: isOpen,
    onOpenChange: handleOpenChange,
    children: (
      <SelectContext.Provider value={contextValue}>
        {props.children}
      </SelectContext.Provider>
    ),
  }

  const handleValueChange = (value: string | string[]) => {
    setLocalValue(value)
    if (multiple) {
      onValueChange?.(value as string[])
    } else {
      onValueChange?.(value as string)
    }
  }

  const promitiveProps = {
    ...commonProps,
    multiple: multiple || false,
    value: localValue,
    onValueChange: handleValueChange,
  } as SelectProps

  return (
    <div className="[&>div]:!relative">
      <SelectPrimitive.Root {...promitiveProps} />
    </div>
  )
}
Select.displayName = SelectPrimitive.Root.displayName

export { Select }
