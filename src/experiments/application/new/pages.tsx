import { PageEmployees } from "./employees"

import { Icons } from "@/components/Utilities/Icons"
import { Skeleton } from "@/ui/skeleton"

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
  icon: Icons["medium"]
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
    icon: "home",
    component: <PageDummy />,
    subItems: [],
  },
  {
    title: "Inbox",
    icon: "inbox",
    component: <PageDummy />,
    subItems: [],
  },
  {
    title: "Profile",
    icon: "users",
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
    icon: "users",
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
    icon: "settings",
    component: <PageDummy />,
    subItems: [],
  },
]
