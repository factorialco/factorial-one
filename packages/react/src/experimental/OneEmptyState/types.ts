import { IconType } from "@/components/Utilities/Icon"
import { AlertAvatarProps } from "@/experimental/Information/Avatars/AlertAvatar"

export type ActionProps = {
  /**
   * The label of the action
   */
  label: string

  /**
   * The click handler of the action
   */
  onClick: () => void
  
  /**
   * The variant of the action
   * @default "default"
   * @optional
   */
  variant?: "default" | "outline"

  /**
   * The icon of the action
   * @optional
   */
  icon?: IconType
}

export type EmptyStateAlertProps = Omit<AlertAvatarProps, 'size' | 'type'> & {
  type: Exclude<AlertAvatarProps['type'], 'positive'>
}

export type EmptyStateProps = {
  /**
   * The title of the empty state
   */
  title: string

  /**
   * If defined, a description will be displayed in the empty state
   * @optional
   */
  description?: string

  /**
   * If defined, an icon will be displayed in the empty state.
   * Can be either an emoji string or an alert configuration.
   * @optional
   */
  icon?: string | EmptyStateAlertProps

  /**
   * An array of action objects to display as buttons in the empty state.
   * Each action represents a user-interactable option, such as "Retry" or "Go Back",
   * and can include a label, click handler, optional icon, and button variant.
   * @optional
   */
  actions?: ActionProps[]
}