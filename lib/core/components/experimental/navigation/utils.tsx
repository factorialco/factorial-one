import { LinkProps } from "@/lib/linkHandler.tsx"

export type NavigationItem = Pick<
  LinkProps,
  "href" | "exactMatch" | "onClick"
> & {
  label: string
}
