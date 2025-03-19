import avatar from "../../../../storybook-assets/avatar.jpeg"
import { famousEmployeesAsSubItems } from "./avatar-name.factory"
import { AvatarNamedEntity } from "./types"

export const teamsWithEmployees: AvatarNamedEntity[] = [
  {
    id: 51,
    name: "Engineering",
    avatar: avatar,
    subItems: getEmployeesFromRange(0, 12),
  },
  {
    id: 52,
    name: "Design",
    avatar: avatar,
    subItems: getEmployeesFromRange(10, 22),
  },
  {
    id: 53,
    name: "Marketing",
    avatar: avatar,
  },
  {
    id: 54,
    name: "Sales",
    avatar: avatar,
    subItems: getEmployeesFromRange(20, 30),
  },
]

export const workplaceWithEmployees: AvatarNamedEntity[] = [
  {
    id: 71,
    name: "New York",
    subItems: getEmployeesFromRange(0, 4),
  },
  {
    id: 72,
    name: "San Francisco",
    subItems: getEmployeesFromRange(4, 10),
  },
  {
    id: 73,
    name: "London",
    subItems: getEmployeesFromRange(10, 14),
  },
  {
    id: 74,
    name: "Barcelona",
    subItems: getEmployeesFromRange(14, 30),
  },
]

function getEmployeesFromRange(start: number, end: number) {
  return Array.from(
    { length: end - start },
    (_, i) => famousEmployeesAsSubItems[i + start]
  ).filter(Boolean)
}
