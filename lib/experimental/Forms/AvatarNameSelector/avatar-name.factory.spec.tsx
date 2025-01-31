import { AvatarNamedEntity, AvatarNamedSubEntity } from "./types"

export const famousEmployees: AvatarNamedEntity[] = [
  {
    id: 1000,
    name: "Albert Einstein",
    avatar: "https://i.pravatar.cc/301",
  },
  {
    id: 1002,
    name: "Marie Curie",
    avatar: "https://i.pravatar.cc/302",
  },
  {
    id: 1003,
    name: "Isaac Newton",
    avatar: "https://i.pravatar.cc/303",
  },
  {
    id: 1004,
    name: "Galileo Galilei",
    avatar: "https://i.pravatar.cc/304",
  },
  {
    id: 1005,
    name: "Leonardo da Vinci",
    avatar: "https://i.pravatar.cc/305",
  },
  {
    id: 1006,
    name: "Winston Churchill",
  },
  {
    id: 1007,
    name: "Abraham Lincoln",
    avatar: "https://i.pravatar.cc/307",
  },
  {
    id: 1008,
    name: "George Washington",
    avatar: "https://i.pravatar.cc/308",
  },
  {
    id: 1009,
    name: "Thomas Edison",
    avatar: "https://i.pravatar.cc/309",
  },
  {
    id: 1010,
    name: "Nikola Tesla",
    avatar: "https://i.pravatar.cc/310",
  },
  {
    id: 1011,
    name: "Alexander Graham Bell",
    avatar: "https://i.pravatar.cc/311",
  },
  {
    id: 1012,
    name: "Martin Luther King",
    avatar: "https://i.pravatar.cc/312",
  },
  {
    id: 1013,
    name: "Mohandas Gandhi",
    avatar: "https://i.pravatar.cc/313",
  },
  {
    id: 1014,
    name: "Nelson Mandela",
    avatar: "https://i.pravatar.cc/314",
  },
  {
    id: 1015,
    name: "Pablo Picasso",
    avatar: "https://i.pravatar.cc/315",
  },
  {
    id: 1016,
    name: "Vincent van Gogh",
    avatar: "https://i.pravatar.cc/316",
  },
  {
    id: 1017,
    name: "Ludwig van Beethoven",
    avatar: "https://i.pravatar.cc/317",
  },
  {
    id: 1018,
    name: "Wolfgang Amadeus Mozart",
    avatar: "https://i.pravatar.cc/318",
  },
  {
    id: 1019,
    name: "William Shakespeare",
    avatar: "https://i.pravatar.cc/319",
  },
  {
    id: 1020,
    name: "Charles Dickens",
    avatar: "https://i.pravatar.cc/320",
  },
  {
    id: 1021,
    name: "Mark Twain",
    avatar: "https://i.pravatar.cc/321",
  },
  {
    id: 1022,
    name: "Jane Austen",
    avatar: "https://i.pravatar.cc/322",
  },
  {
    id: 1023,
    name: "Agatha Christie",
    avatar: "https://i.pravatar.cc/323",
  },
  {
    id: 1024,
    name: "Virginia Woolf",
    avatar: "https://i.pravatar.cc/324",
  },
  {
    id: 1025,
    name: "Oprah Winfrey",
    avatar: "https://i.pravatar.cc/325",
  },
  {
    id: 1026,
    name: "Elon Musk",
    avatar: "https://i.pravatar.cc/326",
  },
  {
    id: 1027,
    name: "Steve Jobs",
    avatar: "https://i.pravatar.cc/327",
  },
  {
    id: 1028,
    name: "Ada Lovelace",
    avatar: "https://i.pravatar.cc/328",
  },
  {
    id: 1029,
    name: "Grace Hopper",
    avatar: "https://i.pravatar.cc/329",
  },
  {
    id: 1030,
    name: "Coco Chanel",
  },
]

export const famousEmployeesAsSubItems: AvatarNamedSubEntity[] =
  famousEmployees.map((employee) => ({
    subId: employee.id,
    subName: employee.name,
    subAvatar: employee.avatar,
  }))
