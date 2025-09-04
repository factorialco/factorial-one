import { IconType } from "@/components/F0Icon"

export type F0TagRawProps = {
  /**
   * The label to display in the tag or used for accessible text
   */
  text: string
  /**
   * Additional accessible text to display in the tag
   */
  additionalAccesibleText?: string
  /**
   * Whether to hide the label
   */
  hideLabel?: boolean
} & (
  | {
      icon: IconType
      hideLabel: true
    }
  | {
      icon?: IconType
      hideLabel?: boolean
    }
)
