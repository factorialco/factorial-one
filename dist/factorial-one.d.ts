import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type * as CLSX from 'clsx';
import { ComponentProps } from 'react';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { ImgHTMLAttributes } from 'react';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { SVGProps } from 'react';

export declare const AreaChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "step" | "linear" | "natural" | "monotoneX";
marginTop?: number;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type AvailableColors = (typeof avatarColors)[keyof typeof avatarColors];

declare const Avatar: ForwardRefExoticComponent<AvatarType & RefAttributes<HTMLDivElement>>;

declare const Avatar_2: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

declare const avatarColors: {
    readonly grey: "bg-f1-icon";
    readonly radical: "bg-f1-icon-critical";
    readonly tangerine: "bg-f1-icon-warning";
    readonly malibu: "bg-f1-icon-info";
    readonly lime: "bg-f1-icon-positive";
    readonly champagne: "bg-f1-foreground-positive";
    readonly viridian: "bg-f1-foreground-accent";
    readonly purple: "bg-f1-foreground-info";
};

declare interface AvatarType {
    alt: string;
    src?: string;
    size?: ComponentProps<typeof Avatar_2>["size"];
    color?: AvailableColors;
}

declare type AxisConfig = {
    hide?: boolean;
    tickFormatter?: (value: string) => string;
    tickCount?: number;
    ticks?: number[];
    domain?: number[];
    isBlur?: boolean;
    width?: number;
};

export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLDivElement>>;

declare function Badge_2({ className, variant, ...props }: BadgeProps_2): React_2.JSX.Element;

export declare interface BadgeProps {
    text: string;
    avatar?: Pick<ComponentProps<typeof Avatar>, "src" | "alt">;
    hasDot?: boolean;
    variant?: ComponentProps<typeof Badge_2>["variant"];
}

declare interface BadgeProps_2 extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

declare const badgeVariants: (props?: ({
    readonly variant?: "info" | "name" | "default" | "critical" | "neutral" | "positive" | "warning" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const BarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
type?: "simple" | "stacked" | "stacked-by-sign";
label?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Button: React.FC<ButtonProps>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = Pick<ComponentProps<typeof Button_2>, "variant" | "size" | "disabled" | "type" | "round"> & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    loading?: boolean;
    icon?: IconType;
    hideLabel?: boolean;
};

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "critical" | "neutral" | "ghost" | "promote" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
    round?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const CategoryBarChart: ForwardRefExoticComponent<Omit<CategoryBarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
}

declare type ChartConfig = Record<string, ChartConfig_2[keyof ChartConfig_2]>;

declare type ChartConfig_2 = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

declare type ChartConfigValue = {
    label?: React_2.ReactNode;
    icon?: React_2.ComponentType;
    dashed?: boolean;
} & ({
    color?: string;
    theme?: never;
} | {
    color?: never;
    theme: Record<keyof typeof THEMES, string>;
});

declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<ChartContainerComponentProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare interface ChartContainerComponentProps extends React_2.ComponentProps<"div">, VariantProps<typeof variants> {
    config: ChartConfig_2;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}

declare type ChartItem<K extends ChartConfig> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};

declare type ChartPropsBase<K extends ChartConfig_2 = ChartConfig_2> = {
    dataConfig: K;
    data: ChartItem<K>[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

declare type ClassProp = {
    class: ClassValue;
    className?: never;
} | {
    class?: never;
    className: ClassValue;
} | {
    class?: never;
    className?: never;
};

declare type ClassValue = CLSX.ClassValue;

declare type ComponentTypes = (typeof componentTypes)[number];

declare const componentTypes: readonly ["layout", "info", "action", "form"];

export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    link?: LinkContextValue;
    privacyModeInitiallyEnabled?: boolean;
    image?: ImageContextValue;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
}>;

export declare const Icon: ForwardRefExoticComponent<Omit<Omit<IconProps, "ref"> & RefAttributes<SVGSVGElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
    icon: IconType;
}

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

declare const iconVariants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | "xs" | null | undefined;
} & ClassProp) | undefined) => string;

declare type ImageContextValue = {
    src?: (props: ImageProps) => SrcProps;
};

declare type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

declare interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}

declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;

export declare const LineChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "natural" | "linear";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LineChartConfig = {
    [key: string]: ChartConfigValue;
};

declare type LineChartPropsBase<K extends LineChartConfig = LineChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const Link: ForwardRefExoticComponent<Omit<LinkProps & RefAttributes<HTMLAnchorElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkContextValue = {
    currentPath?: string;
    component?: (props: LinkProps_2, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
};

export declare interface LinkProps extends LinkProps_2, VariantProps<typeof linkVariants> {
}

declare type LinkProps_2 = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
};

declare const linkVariants: (props?: ({
    variant?: "link" | "text" | null | undefined;
    active?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare type OmitUndefined<T> = T extends undefined ? never : T;

export declare const PieChart: ForwardRefExoticComponent<Omit<PieChartProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type PieChartItem = {
    label: string;
    value: number;
    color?: string;
};

declare type PieChartProps = {
    dataConfig: ChartConfig;
    data: PieChartItem[];
    tickFormatter?: (value: string) => string;
    overview?: {
        number: number;
        label: string;
    };
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const PrivacyModeProvider: React_2.FC<{
    initiallyEnabled?: boolean;
    children: ReactNode;
}>;

declare const sizes: readonly ["xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

declare type SrcProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes">;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const usePrivacyMode: () => {
    enabled: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
};

export declare const useReducedMotion: () => boolean;

export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};

declare type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;

declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const VerticalBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig> & {
label?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}
