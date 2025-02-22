import * as Icons from "@/icons/app"
import { rootItems } from "./menu"

// Full CrossFit

const personalItems = [
  { label: "Profile", icon: Icons.Person, href: "/profile" },
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

export const menuTree = [
  {
    title: "Root",
    id: "root",
    items: rootItems,
    isRoot: true,
    isSortable: false,
  },
  {
    title: "Personal",
    id: "personal",
    items: personalItems,
    isOpen: true,
    isSortable: false,
  },
  {
    title: "Compoany",
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
    ],
    isOpen: true,
    isSortable: true,
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
    isSortable: true,
  },
]
