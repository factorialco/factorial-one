import { AvatarNamedEntity } from "./types"

export const teamsWithEmployees: AvatarNamedEntity[] = [
  {
    id: 1,
    name: "Team 1",
    avatar: "https://i.pravatar.cc/301",
    subItems: [
      {
        id: 1,
        name: "Employee 1",
        avatar: "https://i.pravatar.cc/301",
      },
      {
        id: 2,
        name: "Employee 2",
        avatar: "https://i.pravatar.cc/302",
      },
    ],
  },
  {
    id: 2,
    name: "Team 2",
    avatar: "https://i.pravatar.cc/302",
    subItems: [
      {
        id: 3,
        name: "Employee 3",
        avatar: "https://i.pravatar.cc/303",
      },
    ],
  },
  {
    id: 3,
    name: "Team 3",
    avatar: "https://i.pravatar.cc/303",
  },
]
