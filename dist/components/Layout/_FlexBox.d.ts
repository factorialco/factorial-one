import { VariantProps } from 'class-variance-authority';

declare const boxVariants: (props?: ({
    overflow?: "hidden" | "auto" | null | undefined;
    paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
    maxWidth?: "sm" | "xs" | "md" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
    height?: "auto" | "full" | null | undefined;
    width?: "auto" | "full" | null | undefined;
    paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
    basis?: "0" | null | undefined;
    inline?: boolean | null | undefined;
    justifyContent?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
    alignItems?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
    grow?: boolean | null | undefined;
    shrink?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BoxRef = HTMLDivElement;
export type BoxProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>;
export declare const FlexBox: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    overflow?: "hidden" | "auto" | null | undefined;
    paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
    maxWidth?: "sm" | "xs" | "md" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
    height?: "auto" | "full" | null | undefined;
    width?: "auto" | "full" | null | undefined;
    paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
    basis?: "0" | null | undefined;
    inline?: boolean | null | undefined;
    justifyContent?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
    alignItems?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
    grow?: boolean | null | undefined;
    shrink?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & import('react').RefAttributes<HTMLDivElement>>;
export {};
