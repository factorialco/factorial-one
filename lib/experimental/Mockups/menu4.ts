import * as Icons from "@/icons/app"
import { rootItems } from "./menu"

const personalItems = [
  { label: "Profile", icon: Icons.Person, href: "/profile" },
  {
    label: "Clock in",
    icon: Icons.Clock,
    href: "/clock-in",
  },
  {
    label: "My projects",
    icon: Icons.Suitcase,
    href: "/my-projects",
  },
  {
    label: "Time off",
    icon: Icons.PalmTree,
    href: "/time-off",
  },
  {
    label: "Tasks",
    icon: Icons.CheckCircleLine,
    href: "/tasks",
  },
  {
    label: "My documents",
    icon: Icons.Folder,
    href: "/my-documents",
  },
  {
    label: "My training",
    icon: Icons.BookOpen,
    href: "/my-training",
  },
  {
    label: "My spending",
    icon: Icons.Wallet,
    href: "/my-spending",
  },
  {
    label: "Kudos",
    icon: Icons.Heart,
    href: "/kudos",
  },
]

export const menuTreeNone = [
  {
    title: "Root",
    id: "root",
    items: rootItems,
    isRoot: true,
  },
  {
    title: "Personal",
    id: "personal",
    items: personalItems,
    isOpen: true,
  },
  {
    title: "Company",
    id: "company",
    items: [
      {
        label: "Organization",
        icon: Icons.People,
        href: "/organization",
      },
      {
        label: "Calendar",
        icon: Icons.Calendar,
        href: "/calendar",
      },
      {
        label: "Documents",
        icon: Icons.Folder,
        href: "/documents",
      },
      {
        label: "Projects",
        icon: Icons.Suitcase,
        href: "/projects",
      },
      {
        label: "Spaces",
        icon: Icons.Building,
        href: "/spaces",
      },
      {
        label: "Software",
        icon: Icons.Desktop,
        href: "/software",
      },
      {
        label: "Time tracking",
        icon: Icons.Timer,
        href: "/time-tracking",
      },
      {
        label: "Shifts",
        icon: Icons.Schedule,
        href: "/shifts",
      },
      {
        label: "Benefits",
        icon: Icons.HoldHeart,
        href: "/benefits",
      },
      {
        label: "Payroll",
        icon: Icons.Money,
        href: "/payroll",
      },
      {
        label: "Performance",
        icon: Icons.Graph,
        href: "/performance",
      },
      {
        label: "Recruitment",
        icon: Icons.SearchPerson,
        href: "/recruitment",
      },

      {
        label: "Engagement",
        icon: Icons.MessageHeart,
        href: "/engagement",
      },
      {
        label: "Training",
        icon: Icons.BookOpen,
        href: "/training",
      },
      {
        label: "Accounting",
        icon: Icons.MoneyBag,
        href: "/accounting",
      },
      {
        label: "Spending",
        icon: Icons.Wallet,
        href: "/spending",
      },
      {
        label: "Analytics",
        icon: Icons.BarGraph,
        href: "/analytics",
      },
      {
        label: "Workflows",
        icon: Icons.Split,
        href: "/workflows",
      },
      {
        label: "Settings",
        icon: Icons.Settings,
        href: "/settings",
      },
    ],
    isOpen: true,
  },
]

export const menuTreeBundles = [
  {
    title: "Root",
    id: "root",
    items: rootItems,
    isRoot: true,
  },
  {
    title: "Personal",
    id: "personal",
    items: personalItems,
    isOpen: true,
  },
  {
    title: "General",
    id: "general",
    items: [
      {
        label: "Organization",
        icon: Icons.People,
        href: "/organization",
      },
      {
        label: "Calendar",
        icon: Icons.Calendar,
        href: "/calendar",
      },
      {
        label: "Documents",
        icon: Icons.Folder,
        href: "/documents",
      },
      {
        label: "Projects",
        icon: Icons.Suitcase,
        href: "/projects",
      },
      {
        label: "Spaces",
        icon: Icons.Building,
        href: "/spaces",
      },
      {
        label: "Software",
        icon: Icons.Desktop,
        href: "/software",
      },
    ],
    isOpen: true,
  },
  {
    title: "Operations",
    id: "operations",
    items: [
      {
        label: "Time tracking",
        icon: Icons.Timer,
        href: "/time-tracking",
      },
      {
        label: "Shifts",
        icon: Icons.Schedule,
        href: "/shifts",
      },
      {
        label: "Benefits",
        icon: Icons.HoldHeart,
        href: "/benefits",
      },
      {
        label: "Payroll",
        icon: Icons.Money,
        href: "/payroll",
      },
    ],
    isOpen: true,
  },
  {
    title: "Talent",
    id: "talent",
    items: [
      {
        label: "Recruitment",
        icon: Icons.SearchPerson,
        href: "/recruitment",
      },
      {
        label: "Performance",
        icon: Icons.Graph,
        href: "/performance",
      },
      {
        label: "Engagement",
        icon: Icons.MessageHeart,
        href: "/engagement",
      },
      {
        label: "Training",
        icon: Icons.BookOpen,
        href: "/training",
      },
    ],
    isOpen: true,
  },
  {
    title: "Finance",
    id: "finance",
    items: [
      {
        label: "Accounting",
        icon: Icons.MoneyBag,
        href: "/accounting",
      },
      {
        label: "Spending",
        icon: Icons.Wallet,
        href: "/spending",
      },
    ],
    isOpen: true,
  },
  {
    title: "More",
    id: "more",
    items: [
      {
        label: "Analytics",
        icon: Icons.BarGraph,
        href: "/analytics",
      },
      {
        label: "Workflows",
        icon: Icons.Split,
        href: "/workflows",
      },
      {
        label: "Settings",
        icon: Icons.Settings,
        href: "/settings",
      },
    ],
    isOpen: true,
  },
]
