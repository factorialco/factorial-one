import { famousEmployees } from "./avatar-name.factory.spec"
import { AvatarNamedEntity } from "./types"

export const teamsWithEmployees: AvatarNamedEntity[] = [
  {
    id: 1,
    name: "Engineering",
    avatar: "https://i.pravatar.cc/301",
    subItems: getEmployeesFromRange(0, 12),
  },
  {
    id: 2,
    name: "Design",
    avatar: "https://i.pravatar.cc/302",
    subItems: getEmployeesFromRange(12, 22),
  },
  {
    id: 3,
    name: "Marketing",
    avatar: "https://i.pravatar.cc/303",
  },
  {
    id: 4,
    name: "Sales",
    avatar: "https://i.pravatar.cc/304",
    subItems: getEmployeesFromRange(22, 30),
  },
]

export const workplaceWithEmployees: AvatarNamedEntity[] = [
  {
    id: 1,
    name: "New York",
    subItems: getEmployeesFromRange(0, 4),
  },
  {
    id: 2,
    name: "San Francisco",
    subItems: getEmployeesFromRange(4, 10),
  },
  {
    id: 3,
    name: "London",
    subItems: getEmployeesFromRange(10, 14),
  },
  {
    id: 4,
    name: "Barcelona",
    subItems: getEmployeesFromRange(14, 30),
  },
]

function getEmployeesFromRange(start: number, end: number) {
  return Array.from(
    { length: end - start },
    (_, i) => famousEmployees[i + start]
  ).filter(Boolean)
}
