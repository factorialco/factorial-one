export type AvatarVariant =
  | {
      type: "person"
      firstName: string
      lastName: string
      src?: string
    }
  | {
      type: "team"
      name: string
      src?: string
    }
  | {
      type: "company"
      name: string
      src?: string
    }
