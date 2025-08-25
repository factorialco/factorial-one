import { type VariantProps } from "cva"
import { textVariants } from "./variants"

export type AsAllowedList =
  | "div"
  | "p"
  | "label"
  | "span"
  | "h1"
  | "h2"
  | "code"

export type TextVariants = VariantProps<typeof textVariants>
export type TextVariant = NonNullable<TextVariants["variant"]>
