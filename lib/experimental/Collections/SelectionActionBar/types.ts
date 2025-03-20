import { IconType } from "@/components/Utilities/Icon"

export type ActionBarButton = {
  label: string
  icon?: IconType
  // The value of the actionId should be unique
  actionId: string
}

// Primary button can't have variant
export type ActionBarPrimaryButton = ActionBarButton & {
  variant: never
}

export type ActionBarSecondaryButton = ActionBarButton & {
  // Only allow outline and critical variants
  variant: "outline" | "critical"
} & ( // Only allow to hide label if icon is present
    | {
        icon: string
        hideLabel?: boolean
      }
    | {
        icon: never
        hideLabel?: false
      }
  )
