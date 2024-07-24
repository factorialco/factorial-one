import { VariantProps } from 'class-variance-authority';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

declare const iconVariants: (props?: ({
    size?: "large" | "medium" | "small" | "tiny" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IconProps extends VariantProps<typeof iconVariants> {
}
export type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
export declare function Icon({ size, icon, }: IconProps & {
    icon: IconType;
}): import("react").JSX.Element | null;
export {};
