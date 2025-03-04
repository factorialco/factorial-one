import { cva, type VariantProps } from "cva"

export type ColumnNumber = 1 | 2 | 3 | 4 | 6
export type PeekVariant = `peek${ColumnNumber}`

export interface CarouselBreakpoints {
  default?: ColumnNumber
  xs?: ColumnNumber
  sm?: ColumnNumber
  md?: ColumnNumber
  lg?: ColumnNumber
  xl?: ColumnNumber
}

const getBreakpointVariant = (breakpoint?: string) => {
  const prefix = breakpoint ? `@${breakpoint}:` : ""
  return {
    1: `${prefix}basis-full`,
    2: `${prefix}basis-1/2`,
    3: `${prefix}basis-1/3`,
    4: `${prefix}basis-1/4`,
    6: `${prefix}basis-1/6`,
    peek1: `${prefix}basis-[85%]`,
    peek2: `${prefix}basis-[48%]`,
    peek3: `${prefix}basis-[32%]`,
    peek4: `${prefix}basis-[24%]`,
    peek6: `${prefix}basis-[16%]`,
  }
}

export const carouselItemVariants = cva({
  variants: {
    peek: { true: "", false: "" },
    default: getBreakpointVariant(),
    xs: getBreakpointVariant("xl"),
    sm: getBreakpointVariant("2xl"),
    md: getBreakpointVariant("3xl"),
    lg: getBreakpointVariant("4xl"),
    xl: getBreakpointVariant("5xl"),
  },
  defaultVariants: {
    peek: false,
    default: 1,
  },
})

export type CarouselItemVariants = VariantProps<typeof carouselItemVariants>
