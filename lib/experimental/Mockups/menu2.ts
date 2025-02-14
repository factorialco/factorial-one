import * as Icons from "@/icons/app"
import { rootItems } from "./menu"

// CHC Energia

const personalItems = [
  { label: "Profile", icon: Icons.Person, href: "/profile" },
  {
    label: "Clock in",
    icon: Icons.Clock,
    href: "/clock-in",
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
        label: "Performance",
        icon: Icons.Graph,
        href: "/performance",
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
