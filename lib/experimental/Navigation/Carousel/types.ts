import { cva, type VariantProps } from "class-variance-authority"

const createBreakpointVariant = (prefix = "") => ({
  1: `${prefix}basis-full`,
  2: `${prefix}basis-1/2`,
  3: `${prefix}basis-1/3`,
  4: `${prefix}basis-1/4`,
  6: `${prefix}basis-1/6`,
})

export const carouselItemVariants = cva("basis-full", {
  variants: {
    default: createBreakpointVariant(),
    xs: createBreakpointVariant("xs:"),
    sm: createBreakpointVariant("sm:"),
    md: createBreakpointVariant("md:"),
    lg: createBreakpointVariant("lg:"),
  },
  defaultVariants: {
    default: 1,
  },
})

export type CarouselItemVariants = VariantProps<typeof carouselItemVariants>
