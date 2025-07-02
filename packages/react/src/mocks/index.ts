import { NewColor } from "@/experimental/Information/Tags/DotTag"
import {
  Ai,
  Alert,
  Appearance,
  Circle,
  Delete,
  Desktop,
  Pencil,
  Plus,
  Star,
  Table,
} from "@/icons/app"

export const MOCK_ICONS = [
  Pencil,
  Plus,
  Table,
  Ai,
  Delete,
  Star,
  Alert,
  Desktop,
  Appearance,
  Circle,
]

export const MOCK_EMOJIS = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
]

export const FIRST_NAMES_MOCK = [
  "Dani",
  "Desirée",
  "Eliseo",
  "Arnau",
  "Carlos",
  "Lilian",
  "Andrea",
  "Mario",
  "Nik",
  "René",
  "Sergio",
  "Saúl",
]

export const SURNAMES_MOCK = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
]

export const ROLES_MOCK = [
  "Senior Engineer",
  "Product Manager",
  "Designer",
  "Marketing Lead",
  "Software Engineer",
]

export const STATUS_MOCK = ["active", "inactive", "active", "active", "active"]

export const SALARY_MOCK = [
  100000,
  80000,
  90000,
  undefined,
  120000,
  95000,
  85000,
  110000,
  undefined,
  75000,
  130000,
  92000,
  88000,
  undefined,
  115000,
  105000,
  82000,
  98000,
  undefined,
  125000,
  78000,
  108000,
  94000,
  undefined,
  135000,
]

export const DEPARTMENTS_MOCK = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
] as const
export const YEARS_OF_EXPERIENCIE_MOCK = [
  8, 12, 4, 15, 7, 3, 11, 6, 13, 2, 9, 14, 5, 10, 1, 8, 13, 4, 11, 6,
]
export const START_DATE_MOCK = Array.from(
  { length: 20 },
  (_, i) => new Date(2025, 6, 30 + i)
)

export const PROJECTS_MOCK = [
  "Project A",
  "Project B",
  "Project C",
  "Project D",
]
export const PERFORMANCE_SCORE_MOCK = [
  85, 92, 78, 95, 88, 73, 91, 82, 94, 77, 89, 96, 81, 87, 93, 76, 90, 84, 97,
  80,
]

export const DOT_TAG_COLORS_MOCK: NewColor[] = [
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
]

export const getMockValue = <T>(mock: T[], index: number): T => {
  return mock[index % mock.length]
}
