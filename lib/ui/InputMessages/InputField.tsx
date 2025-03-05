import { forwardRef } from "react"


export type InputFieldProps<T> = {
    label?: string
    placeholder?: string
    value: T
    onChange: (value: T) => void
    errors?: string | string[] | boolean
    hints?: string | string[]
    disabled?: boolean
    className?: string
    required?: boolean
    clearable?: boolean
    onClear?: () => void
    onFocus?: () => void
    onBlur?: () => void


}

const InputField = forwardRef((props, ref) => {



    return (

    )
})

InputField.displayName = "InputField"

export { InputField }
