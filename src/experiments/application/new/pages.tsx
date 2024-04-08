import {
  Home,
  Inbox,
  LucideIcon,
  Settings,
  UserRound,
  UsersRound,
} from "lucide-react"

import { PageEmployees } from "./employees"

import { Skeleton } from "@/foundations/skeleton"

const PageDummy: React.FC = () => {
  return (
    <div>
      <div className="px-6">
        {Array.from({ length: 30 }, (_, index) => (
          <Skeleton
            key={index}
            className={`mb-5 h-[20px] rounded-full ${["w-96", "w-80", "w-72", "w-64", "w-60", "w-56"][Math.floor(Math.random() * 6)]}`}
          />
        ))}
      </div>
    </div>
  )
}

export type Page = {
  title: string
  icon: LucideIcon
  component: React.ReactNode | string
  subItems: SubItem[]
}

export type SubItem = {
  title: string
  component: React.ReactNode | string
}

export const Pages: Page[] = [
  {
    title: "Home",
    icon: Home,
    component: <PageDummy />,
    subItems: [],
  },
  {
    title: "Inbox",
    icon: Inbox,
    component: <PageDummy />,
    subItems: [],
  },
  {
    title: "Profile",
    icon: UserRound,
    component: "",
    subItems: [
      {
        title: "Profile",
        component: <PageDummy />,
      },
      {
        title: "Personal",
        component: <PageDummy />,
      },
    ],
  },
  {
    title: "People",
    icon: UsersRound,
    component: "",
    subItems: [
      {
        title: "Employees",
        component: <PageEmployees />,
      },
      {
        title: "Teams",
        component: <PageDummy />,
      },
      {
        title: "Jobs",
        component: <PageDummy />,
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    component: <PageDummy />,
    subItems: [],
  },
]
