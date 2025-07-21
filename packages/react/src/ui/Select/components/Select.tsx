import * as React from "react"
import { useState } from "react"
import { SelectContext, SelectContextType } from "../SelectContext.tsx"
import * as SelectPrimitive from "./radix-ui"

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
  asList?: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

/**
 * Select Root component
 */

const Select = (props: SelectProps) => {
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
    ...props,
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
    if (props.multiple) {
      props.onValueChange?.(value as string[])
    } else {
      props.onValueChange?.(value as string)
    }
  }

  const promitiveProps = props.multiple
    ? {
        ...commonProps,
        multiple: true as const,
        value: localValue as string[],
        defaultValue: props.defaultValue as string[],
        onValueChange: handleValueChange,
      }
    : {
        ...commonProps,
        multiple: false as const,
        value: localValue as string,
        defaultValue: props.defaultValue as string,
        onValueChange: handleValueChange,
      }

  return (
    <div className="[&>div]:!relative">
      <SelectPrimitive.Root {...promitiveProps} />
    </div>
  )
}
Select.displayName = SelectPrimitive.Root.displayName

export { Select }
