import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ChangeEventHandler } from 'react';
import type * as CLSX from 'clsx';
import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { ImgHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react';
import { LegacyRef } from 'react';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import { SVGProps } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { useForm } from 'react-hook-form';

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "destructive" | "positive" | "info" | "warning" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<SVGElement | HTMLElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AreaChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig, string> & {
lineType?: "natural" | "linear" | "step";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type AreaChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = ChartPropsBase<DataConfig, Keys> & {
    lineType?: "natural" | "linear" | "step";
};

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<WidgetContainerProps & {
summaries?: Array<{
label: string;
value: string;
unit?: string;
}>;
} & {
chart: AreaChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "lg" | "md" | "sm" | null | undefined;
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const Avatar: ForwardRefExoticComponent<AvatarType & RefAttributes<HTMLDivElement>>;

declare const Avatar_2: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

declare interface AvatarType {
    alt: string;
    src?: string;
    size?: ComponentProps<typeof Avatar_2>["size"];
}

declare type AxisConfig = {
    hide?: boolean;
    tickFormatter?: (value: string) => string;
    tickCount?: number;
};

export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLDivElement>>;

declare function Badge_2({ className, variant, ...props }: BadgeProps_2): React_2.JSX.Element;

declare interface BadgeProps {
    text: string;
    avatar?: Pick<ComponentProps<typeof Avatar>, "src" | "alt">;
    variant?: ComponentProps<typeof Badge_2>["variant"];
}

declare interface BadgeProps_2 extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "positive" | "name" | "info" | "warning" | "neutral" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const BarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig, string> & {
label: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type BarChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = ChartPropsBase<DataConfig, Keys> & {
    label: boolean;
};

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetContainerProps & {
summaries?: Array<{
label: string;
value: string;
unit?: string;
}>;
} & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const Button: React.FC<ButtonProps>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = Pick<ComponentProps<typeof Button_2>, "variant" | "disabled" | "type" | "round"> & {
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
    variant?: "default" | "secondary" | "outline" | "destructive" | "positive" | "ghost" | null | undefined;
    round?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React_2.JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

declare type ChartConfig<Keys extends string = string> = Record<Keys, ChartConfig_2[string]>;

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

declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<React_2.ClassAttributes<HTMLDivElement> & React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    aspect?: "square" | "wide" | null | undefined;
} & ClassProp) | undefined) => string> & {
    config: ChartConfig_2;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare type ChartItem<LineKeys extends string> = {
    label: string;
    values: Record<LineKeys, number>;
};

declare type ChartPropsBase<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = {
    dataConfig: ChartConfig<Keys>;
    data: ChartItem<Keys>[];
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

export declare const Dashboard: ForwardRefExoticComponent<DashboardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type DashboardProps = {
    children?: ReactNode[];
};

declare type DashboardProps_2 = {
    children: ReactNode[];
};

export declare const Dialog: ForwardRefExoticComponent<Omit<{
header?: {
icon?: IconType;
title: string;
description: string;
};
actions?: {
primary: {
label: string;
disabled?: boolean | undefined;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
};
secondary?: {
label: string;
disabled?: boolean | undefined;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
};
};
loading?: boolean;
children: ReactNode;
open?: boolean;
onClose?: () => void;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    link?: LinkContextValue;
    image?: ImageContextValue;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
}>;

export declare const Icon: ForwardRefExoticComponent<Omit<IconProps & RefAttributes<SVGSVGElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare interface IconProps extends VariantProps<typeof iconVariants> {
    icon: IconType;
}

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

declare const iconVariants: (props?: ({
    size?: "xl" | "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare type ImageContextValue = {
    src?: (props: ImageProps) => SrcProps;
};

declare type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

declare type InferChartKeys<T> = T extends ChartConfig<infer K> ? K : never;

export declare const Input: ForwardRefExoticComponent<Omit<{
size?: number | undefined;
ref?: LegacyRef<HTMLInputElement> | undefined;
disabled?: boolean | undefined;
type?: HTMLInputTypeAttribute | undefined;
value?: string | readonly string[] | number | undefined;
onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
placeholder?: string | undefined;
}, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}

declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;

export declare const LineChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig, string> & {
lineType?: "natural" | "linear" | "step";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type LineChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = ChartPropsBase<DataConfig, Keys> & {
    lineType?: "natural" | "linear" | "step";
};

export declare const LineChartWidget: ForwardRefExoticComponent<Omit<WidgetContainerProps & {
summaries?: Array<{
label: string;
value: string;
unit?: string;
}>;
} & {
chart: LineChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type LinkContextValue = {
    component?: (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
};

declare interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

declare type OmitUndefined<T> = T extends undefined ? never : T;

export declare const PieChart: ForwardRefExoticComponent<Omit<PieChartProps<ChartConfig, string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type PieChartItem = {
    label: string;
    value: number;
    color?: string;
};

declare type PieChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = {
    dataConfig: ChartConfig<Keys>;
    data: PieChartItem[];
    donutPieChart?: boolean;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const PieChartWidget: ForwardRefExoticComponent<Omit<WidgetContainerProps & {
summaries?: Array<{
label: string;
value: string;
unit?: string;
}>;
} & {
chart: PieChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const Select: ForwardRefExoticComponent<SelectProps<string> & RefAttributes<HTMLButtonElement>>;

declare type SelectProps<T> = {
    placeholder: string;
    onChange: (value: T) => void;
    value?: T;
    options: {
        value: T;
        label: string;
    }[];
};

declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "xl" | "md" | "sm" | "xs" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
height?: "auto" | "full" | null | undefined;
width?: "auto" | "full" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
justifyContent?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
alignItems?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
wrap?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type SrcProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes">;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "xl" | "md" | "sm" | "xs" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
height?: "auto" | "full" | null | undefined;
width?: "auto" | "full" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
justifyContent?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
alignItems?: "center" | "end" | "space-between" | "start" | "stretch" | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsContent: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsList: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsTrigger: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<TextareaProps_2 & React_2.RefAttributes<HTMLTextAreaElement>>;

declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols">;

declare interface TextareaProps_2 extends React_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export { useForm }

export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};

declare type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;

export declare const VerticalBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig, string> & {
label: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

declare type VerticalBarChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = ChartPropsBase<DataConfig, Keys> & {
    label: boolean;
};

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetContainerProps & {
summaries?: Array<{
label: string;
value: string;
unit?: string;
}>;
} & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<SVGElement | HTMLElement>>;

export declare const WidgetContainer: ForwardRefExoticComponent<WidgetContainerProps & {
children: ReactNode;
} & RefAttributes<HTMLDivElement>> & {
    Skeleton: ForwardRefExoticComponent<    {
    header?: {
    title?: string;
    subtitle?: string;
    };
    } & VariantProps<(props?: ({
    height?: "lg" | "md" | "sm" | null | undefined;
    } & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>>;
};

export declare interface WidgetContainerProps {
    header: {
        title: string;
        subtitle?: string;
        info?: string;
        link?: {
            title: string;
            url: string;
        };
    };
}

export declare type WidgetSkeletonProps = {
    header?: {
        title?: string;
        subtitle?: string;
    };
} & VariantProps<typeof skeletonVariants>;

export declare const WidgetStrip: ForwardRefExoticComponent<DashboardProps_2 & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

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

