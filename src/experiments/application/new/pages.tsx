import {
  CircleHelp,
  Home,
  Inbox,
  Search,
  Settings,
  Store,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react"

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full h-[72px] flex items-center px-6 text-xl text-secondary-foreground">
      {title}
    </div>
  )
}

const PageHome: React.FC = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <p>This is the homepage!</p>
    </div>
  )
}

const PageInbox: React.FC = () => {
  return (
    <div>
      <PageTitle title="Inbox" />
      <p>This is the inbox!</p>
    </div>
  )
}

const PageEmployees: React.FC = () => {
  return (
    <div>
      <PageTitle title="Employees" />
      <p>These are the employees...</p>
    </div>
  )
}

export const Pages = [
  {
    title: "Home",
    icon: Home,
    component: <PageHome />,
    subItems: [],
  },
  {
    title: "Inbox",
    icon: Inbox,
    component: <PageInbox />,
    subItems: [],
  },
  {
    title: "Profile",
    icon: UserRound,
    component: "",
    subItems: [
      {
        title: "Profile",
        component: "Profile SubMenu one component content",
      },
      {
        title: "Personal",
        component: "Profile SubMenu two component content",
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
        component: "These are the teams...",
      },
      {
        title: "Jobs",
        component: "These are the jobs...",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    component: "Settings Component content",
    subItems: [],
  },
]
