import * as Icons from "@/icons/app"

// Blank Page

export const menuTree = [
  {
    title: "Root",
    id: "root",
    items: [
      {
        label: "Home",
        icon: Icons.Home,
        href: "/",
        exactMatch: true,
      },
      {
        label: "Inbox",
        icon: Icons.Envelope,
        href: "/inbox",
      },
      {
        label: "Calendar",
        icon: Icons.Calendar,
        href: "/calendar",
      },
      {
        label: "Tasks",
        icon: Icons.CheckCircleLine,
        href: "/tasks",
      },
      {
        label: "Discover",
        icon: Icons.Rocket,
        href: "/discover",
      },
    ],
    isRoot: true,
    isSortable: false,
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
        label: "Documents",
        icon: Icons.Folder,
        href: "/documents",
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
    isSortable: false,
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
        label: "Projects",
        icon: Icons.Suitcase,
        href: "/projects",
      },
      {
        label: "Benefits",
        icon: Icons.Present,
        href: "/benefits",
      },
      {
        label: "Payroll",
        icon: Icons.Money,
        href: "/payroll",
      },
    ],
    isOpen: true,
    isSortable: true,
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
    isSortable: true,
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
