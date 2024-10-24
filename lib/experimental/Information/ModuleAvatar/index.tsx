import * as Icons from "@/icons"
import { cva, type VariantProps } from "class-variance-authority"

export const moduleIconNames = [
  "Calendar",
  "ClockIn",
  "Documents",
  "Engagement",
  "Finance",
  "Goals",
  "Home",
  "Inbox",
  "Kudos",
  "MyDocuments",
  "Organization",
  "Payroll",
  "Performance",
  "Profile",
  "Projects",
  "Recruitment",
  "Reports",
  "Shifts",
  "Software",
  "Spaces",
  "Spending",
  "Tasks",
  "TimeOff",
  "TimeTracking",
  "Trainings",
  "Workflows",
] as const

export const iconComponents = moduleIconNames.reduce(
  (acc, name) => {
    const value = Icons[`Module${name}` as keyof typeof Icons]
    if (value) acc[name] = value
    return acc
  },
  {} as Record<
    (typeof moduleIconNames)[number],
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  >
)

export type IconType = keyof typeof iconComponents

const moduleAvatarVariants = cva(
  "relative flex shrink-0 items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const iconSizeVariants = cva("relative text-f1-foreground-inverse", {
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface ModuleAvatarProps
  extends VariantProps<typeof moduleAvatarVariants> {
  icon: IconType
}

const squirclePath =
  "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0"

export function ModuleAvatar({ size = "md", icon }: ModuleAvatarProps) {
  const IconComponent = iconComponents[icon]

  return (
    <div className={moduleAvatarVariants({ size })}>
      <svg
        viewBox="0 0 100 100"
        className="absolute h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF355E" />
            <stop offset="44%" stopColor="#FF355E" />
            <stop offset="100%" stopColor="#D62D4F" />
          </linearGradient>
        </defs>
        <path d={squirclePath} fill="url(#gradient)" />
      </svg>
      <IconComponent className={iconSizeVariants({ size })} />
    </div>
  )
}
