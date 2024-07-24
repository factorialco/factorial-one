import { PageEmployees } from "./employees"

import { IconType } from "@/components/Utilities/Icon"
import { Skeleton } from "@/ui/skeleton"

import Home from "@/icons/Home"
import Inbox from "@/icons/Inbox"
import Settings from "@/icons/Settings"
import Users from "@/icons/Users"

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
  icon: IconType
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
    icon: Users,
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
    icon: Users,
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
