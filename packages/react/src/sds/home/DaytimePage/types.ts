import { PulseAvatar } from "@/experimental/Information/Avatars/PulseAvatar"
import { ComponentProps, ReactNode } from "react"

export interface DaytimePageProps {
  children?: ReactNode
  period?: "morning" | "afternoon" | "evening"
  header?: {
    title: string
    description?: string
    employeeFirstName: string
    employeeLastName: string
    employeeAvatar?: string
    pulse?: ComponentProps<typeof PulseAvatar>["pulse"]
    onPulseClick?: ComponentProps<typeof PulseAvatar>["onPulseClick"]
  }
  embedded?: boolean
}
