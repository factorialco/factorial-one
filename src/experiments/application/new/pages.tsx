import {
  CircleHelp,
  Home,
  Inbox,
  Search,
  Settings,
  Store,
  Target,
  UserRound,
} from "lucide-react"

const PageHome: React.FC = () => {
  return <div>This is the homepage!</div>
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
    component: "Inbox Component content",
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
    title: "Settings",
    icon: Settings,
    component: "Settings Component content",
    subItems: [],
  },
]
