import * as Icons from "@/icons/app"

/**
 * GENERAL ITEMS
 */

export const rootItems = [
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
    badge: 6,
  },
  {
    label: "Discover Factorial",
    icon: Icons.Sparkles,
    href: "/discover",
  },
]
