import { useState } from "react"
import { SelectContext, SelectContextType } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"
import { SelectPrimitiveProps } from "./radix-ui/select.tsx"

export type SelectProps = SelectPrimitiveProps & {
  asList?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

/**
 * Select Root component
 */

const Select = <T extends string = string>(props: SelectProps) => {
  type Value = Exclude<typeof props.value, undefined>
  const [internalOpen, setInternalOpen] = useState(props.asList ? true : false)

  const isOpen = props.asList
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

  const [localValue, setLocalValue] = useState(props.value)

  const contextValue: SelectContextType = {
    value: localValue,
    open: isOpen,
    asList: props.asList,
    multiple: props.multiple || false,
  } as SelectContextType

  const commonProps = {
    ...props,
    open: isOpen,
    onOpenChange: handleOpenChange,
    children: (
      <SelectContext.Provider value={contextValue}>
        {props.children}
      </SelectContext.Provider>
    ),
  }

  const handleValueChange = (value: Value) => {
    setLocalValue(value)
    if (props.multiple) {
      props.onValueChange?.(value as T[])
    } else {
      props.onValueChange?.(value as T)
    }
  }

  const primitiveProps = props.multiple
    ? {
        ...commonProps,
        multiple: true as const,
        value: localValue as T[],
        defaultValue: props.defaultValue as T[],
        onValueChange: handleValueChange,
      }
    : {
        ...commonProps,
        multiple: false as const,
        value: localValue as T,
        defaultValue: props.defaultValue as T,
        onValueChange: handleValueChange,
      }

  return (
    <div className="[&>div]:!relative">
      <SelectPrimitive.Root {...primitiveProps} />
    </div>
  )
}
Select.displayName = SelectPrimitive.Root.displayName

export { Select }
