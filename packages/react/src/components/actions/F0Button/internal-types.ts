import { IconType } from "@/components/F0Icon"
import { NavTarget } from "@/ui/Action"
import { Button as ShadcnButton, sizes, variants } from "@/ui/button"
import { ComponentProps } from "react"

export type ButtonInternalProps = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "disabled" | "type" | "round" | "className" | "pressed"
> &
  DataAttributes & {
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (
      event?: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void | Promise<unknown>
    /**
     * The visible label for the button. Required for accessibility.
     */
    label: string
    /**
     * Indicates that an action is in progress. Shows a loading spinner and blocks interaction.
     */
    loading?: boolean
    /**
     * Adds an icon to the button, combined with the label for better clarity and recognition.
     */
    icon?: IconType
    /**
     * Adds an emoji to the button, can be used as a special case of icon-only button.
     */
    emoji?: string
    /**
     * Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.
     */
    hideLabel?: boolean
    /**
     * Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.
     */
    size?: ButtonSize
    /**
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode
    /**
     * Appends a React node as a separate button, visually grouped with the main button.
     */
    appendButton?: React.ReactNode
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean
    /**
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean

    /**
     * The URL to navigate to when the button is clicked.
     */
    href?: string
    /**
     * The target to navigate to when the button is clicked.
     */
    target?: NavTarget
  } & (
    | {
        /**
         * The URL to navigate to when the button is clicked.
         */
        href: string
        /**
         * The target to navigate to when the button is clicked.
         */
        target?: NavTarget
      }
    // Target can only be used if href is provided
    | {
        href?: never
        target?: never
      }
  )
