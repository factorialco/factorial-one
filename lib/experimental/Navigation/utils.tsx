import { LinkProps } from "@/lib/linkHandler"

export type NavigationItem = Pick<LinkProps, "href" | "exactMatch"> & {
  label: string
}
