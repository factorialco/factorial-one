import { cva, type VariantProps } from "class-variance-authority"

export type ColumnNumber = 1 | 2 | 3 | 4 | 6
export type PeekVariant = `peek${ColumnNumber}`

export interface CarouselBreakpoints {
  default?: ColumnNumber
  xs?: ColumnNumber
  sm?: ColumnNumber
  md?: ColumnNumber
  lg?: ColumnNumber
}

export const carouselItemVariants = cva("", {
  variants: {
    peek: { true: "", false: "" },
    default: {
      1: "basis-full",
      2: "basis-1/2",
      3: "basis-1/3",
      4: "basis-1/4",
      6: "basis-1/6",
      peek1: "basis-[85%]",
      peek2: "basis-[48%]",
      peek3: "basis-[32%]",
      peek4: "basis-[24%]",
      peek6: "basis-[16%]",
    },
    xs: {
      1: "xs:basis-full",
      2: "xs:basis-1/2",
      3: "xs:basis-1/3",
      4: "xs:basis-1/4",
      6: "xs:basis-1/6",
      peek1: "xs:basis-[85%]",
      peek2: "xs:basis-[48%]",
      peek3: "xs:basis-[32%]",
      peek4: "xs:basis-[24%]",
      peek6: "xs:basis-[16%]",
    },
    sm: {
      1: "sm:basis-full",
      2: "sm:basis-1/2",
      3: "sm:basis-1/3",
      4: "sm:basis-1/4",
      6: "sm:basis-1/6",
      peek1: "sm:basis-[85%]",
      peek2: "sm:basis-[48%]",
      peek3: "sm:basis-[32%]",
      peek4: "sm:basis-[24%]",
      peek6: "sm:basis-[16%]",
    },
    md: {
      1: "md:basis-full",
      2: "md:basis-1/2",
      3: "md:basis-1/3",
      4: "md:basis-1/4",
      6: "md:basis-1/6",
      peek1: "md:basis-[85%]",
      peek2: "md:basis-[48%]",
      peek3: "md:basis-[32%]",
      peek4: "md:basis-[24%]",
      peek6: "md:basis-[16%]",
    },
    lg: {
      1: "lg:basis-full",
      2: "lg:basis-1/2",
      3: "lg:basis-1/3",
      4: "lg:basis-1/4",
      6: "lg:basis-1/6",
      peek1: "lg:basis-[85%]",
      peek2: "lg:basis-[48%]",
      peek3: "lg:basis-[32%]",
      peek4: "lg:basis-[24%]",
      peek6: "lg:basis-[16%]",
    },
  },
  defaultVariants: {
    peek: false,
    default: 1,
  },
})

export type CarouselItemVariants = VariantProps<typeof carouselItemVariants>
