import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import { SVGProps } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { VariantProps } from 'class-variance-authority';

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "destructive" | "positive" | "info" | "warning" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AreaChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig, string> & {
lineType?: "natural" | "linear" | "step";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const AreaChartInsight: ForwardRefExoticComponent<Omit<RefAttributes<HTMLElement> & Omit<InsightsContainerProps, "children"> & {
chart: ChartPropsBase<ChartConfig, string> & {
lineType?: "natural" | "linear" | "step";
} & RefAttributes<HTMLDivElement>;
}, "ref"> & RefAttributes<HTMLElement>>;

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "sm" | "md" | "lg" | null | undefined;
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarFallback: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarImage: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React_2.RefAttributes<HTMLImageElement>, "ref"> & React_2.RefAttributes<HTMLImageElement>>;

declare type AxisConfig = {
    hide?: boolean;
    tickFormatter?: (value: string) => string;
};

export declare function Badge({ className, variant, ...props }: BadgeProps): React_2.JSX.Element;

export declare interface BadgeProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "positive" | "info" | "warning" | "neutral" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React.FC<ButtonProps>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = Pick<ComponentProps<typeof Button_2>, "variant" | "size" | "disabled"> & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    icon?: IconType;
    hideLabel?: boolean;
};

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | "destructive" | "positive" | "ghost" | null | undefined;
    rounded?: boolean | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React_2.JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

export declare const Card: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const CardContent: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const CardDescription: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLParagraphElement> & RefAttributes<HTMLParagraphElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const CardFooter: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const CardHeader: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const CardTitle: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLHeadingElement> & RefAttributes<HTMLParagraphElement>, "ref"> & RefAttributes<HTMLElement>>;

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

declare type ChartItem<LineKeys extends string> = {
    label: string;
    values: Record<LineKeys, number>;
};

declare type ChartPropsBase<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = {
    dataConfig: ChartConfig<Keys>;
    data: ChartItem<Keys>[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
};

declare type ComponentTypes = (typeof componentTypes)[number];

declare const componentTypes: readonly ["layout", "info", "action", "form"];

export declare type ContainerWrapType<Component extends FC<RefAttributes<HTMLElement>>, ChartKey extends string> = React.FC<RefAttributes<HTMLElement> & Omit<InsightsContainerProps, "children"> & {
    [key in ChartKey]: ComponentProps<Component>;
}>;

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
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
}>;

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

declare type InferChartKeys<T> = T extends ChartConfig<infer K> ? K : never;

export declare const Input: ForwardRefExoticComponent<Omit<Pick<InputProps & RefAttributes<HTMLInputElement>, "size" | "ref" | "disabled" | "type" | "value" | "onChange" | "placeholder">, "ref"> & RefAttributes<HTMLElement>>;

declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement> {
}

export declare const InsightsContainer: ForwardRefExoticComponent<InsightsContainerProps & {
children: ReactNode;
} & RefAttributes<HTMLDivElement>>;

export declare interface InsightsContainerProps {
    header: {
        title: string;
        description: string;
    };
    footer: {
        trend: string;
        time: string;
    };
}

export declare const InsightsDashboard: ForwardRefExoticComponent<InsightsDashboardProps & RefAttributes<HTMLDivElement>>;

declare type InsightsDashboardProps = {
    header?: {
        title: string;
        description?: string;
    };
    tileSize?: ComponentProps<typeof AutoGrid>["tileSize"];
    children?: ReactNode;
};

declare interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}

declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;

export declare const LineChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig, string> & {
lineType?: "natural" | "linear" | "step";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const LineChartInsight: ForwardRefExoticComponent<Omit<RefAttributes<HTMLElement> & Omit<InsightsContainerProps, "children"> & {
chart: ChartPropsBase<ChartConfig, string> & {
lineType?: "natural" | "linear" | "step";
} & RefAttributes<HTMLDivElement>;
}, "ref"> & RefAttributes<HTMLElement>>;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const Select: React_2.FC<SelectPrimitive.SelectProps>;

export declare const SelectContent: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectGroup: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectItem: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectLabel: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectScrollDownButton: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectScrollUpButton: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectSeparator: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const SelectTrigger: React_2.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const SelectValue: React_2.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
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
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
wrap?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
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
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsContent: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsList: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsTrigger: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};

export declare function wrap<Component extends FC<any>, NestedKey extends string>(Component: Component, nestedKey: NestedKey): ContainerWrapType<Component, NestedKey>;

export { }
