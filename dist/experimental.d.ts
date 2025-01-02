import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps } from '@radix-ui/react-avatar';
import { ButtonHTMLAttributes } from 'react';
import type * as CLSX from 'clsx';
import { ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { JSX as JSX_2 } from 'react';
import { PropsWithChildren } from 'react';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import { SVGProps } from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { useForm } from 'react-hook-form';
import { UseFormHandleSubmit } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { ZodType } from 'zod';

declare type ActionType = CopyActionType | NavigateActionType;

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "info" | "positive" | "warning" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement | SVGElement>>;

export declare const AlertAvatar: ({ type, size }: Props_4) => JSX_2.Element;

declare const alertAvatarVariants: (props?: ({
    type?: "info" | "critical" | "warning" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTag: ForwardRefExoticComponent<Props_9<string> & RefAttributes<HTMLDivElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX";

export declare function ApplicationFrame({ children, sidebar, banner, }: ApplicationFrameProps): JSX_2.Element;

declare interface ApplicationFrameProps {
    banner?: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

declare type AreaChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: allowedLineTypes;
    marginTop?: number;
    canBeBlurred?: boolean;
    blurArea?: "l" | "r" | "lr";
};

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<AreaChartWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface AreaChartWidgetProps extends ComposeChartContainerProps<AreaChartProps> {
    canBeBlurred?: boolean;
}

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "lg" | "md" | "sm" | null | undefined;
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare type AvatarVariant = ({
    type: "person";
} & PersonAvatarProps) | ({
    type: "team";
} & TeamAvatarProps) | ({
    type: "company";
} & CompanyAvatarProps);

declare type AxisConfig = {
    hide?: boolean;
    tickFormatter?: (value: string) => string;
    tickCount?: number;
    ticks?: number[];
    domain?: number[];
    width?: number;
};

export declare const Badge: ({ type, size, icon }: BadgeProps) => JSX_2.Element;

export declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    size?: keyof typeof iconSizes;
}

declare const badgeVariants: (props?: ({
    type?: "critical" | "neutral" | "positive" | "highlight" | "warning" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const BalanceTag: ForwardRefExoticComponent<Props_10 & RefAttributes<HTMLDivElement>>;

declare type BarChartProps<K extends ChartConfig_2 = ChartConfig_2> = ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
    legend?: boolean;
};

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const BaseAvatar: ForwardRefExoticComponent<    {
type: ShadAvatarProps["type"];
name: string | string[];
src?: string;
size?: ShadAvatarProps["size"];
color?: ShadAvatarProps["color"] | "random";
badge?: BadgeProps;
} & Pick<Omit<AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & {
size?: sizes[number];
type?: type[number];
color?: color[number];
} & RefAttributes<HTMLSpanElement>, "aria-label" | "aria-labelledby"> & RefAttributes<HTMLDivElement>>;

declare type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_2 = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_3 = ComponentProps<typeof BaseAvatar>;

export declare const BaseCelebration: ({ link, firstName, lastName, src, canReact, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element;

declare const baseColors: {
    white: {
        3: string;
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    current: string;
    transparent: string;
    grey: {
        0: string;
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
        solid: {
            40: string;
            50: string;
        };
    };
    lilac: {
        50: string;
        60: string;
        70: string;
    };
    barbie: {
        50: string;
        60: string;
        70: string;
    };
    smoke: {
        50: string;
        60: string;
        70: string;
    };
    army: {
        50: string;
        60: string;
        70: string;
    };
    flubber: {
        50: string;
        60: string;
        70: string;
    };
    indigo: {
        50: string;
        60: string;
        70: string;
    };
    camel: {
        50: string;
        60: string;
        70: string;
    };
    radical: {
        50: string;
        60: string;
        70: string;
    };
    viridian: {
        50: string;
        60: string;
        70: string;
    };
    orange: {
        50: string;
        60: string;
        70: string;
    };
    red: {
        50: string;
        60: string;
        70: string;
    };
    grass: {
        50: string;
        60: string;
        70: string;
    };
    malibu: {
        50: string;
        60: string;
        70: string;
    };
    yellow: {
        50: string;
        60: string;
        70: string;
    };
    purple: {
        50: string;
        60: string;
        70: string;
    };
    special: {
        highlight: string;
    };
};

declare function BaseHeader({ title, avatar, description, eyebrow, footer, primaryAction, secondaryActions, }: BaseHeaderProps_2): JSX_2.Element;

declare type BaseHeaderProps = ComponentProps<typeof BaseHeader>;

declare interface BaseHeaderProps_2 {
    title: string;
    avatar?: AvatarVariant;
    description?: string;
    eyebrow?: React.ReactNode;
    footer?: React.ReactNode;
    primaryAction?: PrimaryAction;
    secondaryActions?: SecondaryAction[];
}

declare type BaseHeaderProps_3 = ComponentProps<typeof BaseHeader>;

declare type BaseHeaderProps_4 = ComponentProps<typeof BaseHeader>;

export declare const BaseTabs: React.FC<TabsProps>;

export declare type BreadcrumbItemType = NavigationItem & {
    icon?: IconType;
};

declare const Button: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "disabled" | "type" | "round"> & {
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

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React_2.JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare const CalendarEventList: ForwardRefExoticComponent<CalendarEventListProps & RefAttributes<HTMLDivElement>>;

export declare interface CalendarEventListProps {
    events: CalendarEventProps[];
    limit?: 1 | 2 | 3 | 4 | 5;
}

declare interface CalendarEventProps {
    label?: string;
    title: string;
    subtitle?: string;
    description: string;
    color: string;
    isPending: boolean;
    leftTags?: Tag[];
    rightTags?: Tag[];
    fromDate?: Date;
    toDate: Date;
    noBackground?: boolean;
}

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

export declare const Carousel: ({ children, columns, showArrows, showDots, autoplay, delay, showPeek, }: CarouselProps) => default_2.JSX.Element;

declare interface CarouselBreakpoints {
    default?: ColumnNumber;
    xs?: ColumnNumber;
    sm?: ColumnNumber;
    md?: ColumnNumber;
    lg?: ColumnNumber;
}

declare interface CarouselProps {
    children: default_2.ReactNode;
    showArrows?: boolean;
    showDots?: boolean;
    autoplay?: boolean;
    delay?: number;
    columns?: CarouselBreakpoints;
    showPeek?: boolean;
}

declare interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
}

export declare function CategoryBarSection({ title, subtitle, data, helpText, legend, }: CategoryBarSectionProps): JSX_2.Element;

declare interface CategoryBarSectionProps {
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
}

export declare const Celebration: (({ link, firstName, lastName, src, canReact, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element) & {
    Skeleton: () => JSX_2.Element;
};

export declare type CelebrationProps = {
    link: string;
    firstName: string;
    lastName: string;
    src?: string;
    canReact?: boolean;
    type?: "birthday" | "anniversary" | "first-day";
    typeLabel: string;
    date: Date;
};

export declare const CelebrationSkeleton: () => JSX_2.Element;

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

declare type ChartContainerPropsBase = WidgetProps;

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

export declare const ChartWidgetEmptyState: ForwardRefExoticComponent<Props_17 & RefAttributes<HTMLDivElement>>;

export declare type ChatWidgetEmptyStateProps = Props_17;

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

declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type ColumnNumber = 1 | 2 | 3 | 4 | 6;

declare interface Company {
    id: string;
    name: string;
    logo?: string;
}

export declare const CompanyAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props_3): JSX_2.Element;
    displayName: string;
};

declare type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;

export declare const CompanyHeader: ({ name, description, src, primaryAction, secondaryActions, }: Props_6) => JSX_2.Element;

declare const CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;

declare type CompanyItemProps = {
    name: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

export declare function CompanySelector({ companies, selected, onChange, isLoading, withNotification, additionalOptions, }: CompanySelectorProps): JSX_2.Element;

export declare type CompanySelectorProps = {
    companies: Company[];
    selected?: string;
    onChange: (value: string) => void;
    isLoading?: boolean;
    withNotification?: boolean;
    additionalOptions?: {
        label: string;
        value: string;
        icon?: IconType;
        description?: string;
        onClick?: () => void;
    }[];
};

export declare const CompanyTag: ForwardRefExoticComponent<Props_11 & RefAttributes<HTMLDivElement>>;

declare type ComposeChartContainerProps<T extends object> = ChartContainerPropsBase & {
    chart: T;
};

declare type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof Weekdays> & {
    type: "weekdays";
});

declare type CopyActionType = {
    type: "copy";
    text?: string;
};

export declare function Counter({ size, type, value, maxValue }: CounterProps): JSX_2.Element;

declare type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterVariants>;

declare const counterVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
    type?: "bold" | "default" | "selected" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Dashboard: ForwardRefExoticComponent<DashboardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type DashboardProps = {
    widgetWidth?: WidgetWidth;
    children?: ReactNode[];
};

declare type DashboardProps_2 = {
    children: ReactNode[];
};

declare const DataList: ForwardRefExoticComponent<DataListProps & RefAttributes<HTMLUListElement>> & {
    Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;
    CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;
    PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;
    TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;
};

declare type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
};

export declare const DateAvatar: ({ date }: Props_5) => JSX_2.Element;

export declare function DaytimePage({ children, header, period }: DaytimePageProps): JSX_2.Element;

export declare namespace DaytimePage {
    var displayName: string;
}

export declare interface DaytimePageProps extends VariantProps<typeof daytimePageVariants> {
    children?: React.ReactNode;
    header?: React.ReactNode;
}

declare const daytimePageVariants: (props?: ({
    period?: "morning" | "afternoon" | "evening" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const DetailsItem: ForwardRefExoticComponent<DetailsItemType & RefAttributes<HTMLDivElement>>;

export declare const DetailsItemsList: ForwardRefExoticComponent<DetailsItemsListProps & RefAttributes<HTMLDivElement>>;

declare interface DetailsItemsListProps {
    title: string;
    details: DetailsItemType[];
}

export declare interface DetailsItemType {
    title: string;
    content: Content | Content[];
    spacingAtTheBottom?: boolean;
}

export declare const Dialog: ForwardRefExoticComponent<Omit<{
header?: {
icon?: IconType;
title: string;
description: string;
};
actions?: {
primary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined | undefined;
};
secondary?: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined | undefined;
};
};
loading?: boolean;
children: ReactNode;
open?: boolean;
onClose?: () => void;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const DotTag: ForwardRefExoticComponent<Props_12 & RefAttributes<HTMLDivElement>>;

export declare function Dropdown({ items, children }: DropdownProps): JSX_2.Element;

export declare type DropdownItem = DropdownItemObject | "separator";

export declare type DropdownItemObject = NavigationItem & {
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare type DropdownProps = {
    items: DropdownItem[];
    children?: React.ReactNode;
};

declare type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

export declare function Form<Schema extends SchemaType, FormData extends InferSchema<Schema>>({ onSubmit, children, ...form }: {
    children: React.ReactNode;
} & FormType<Schema, FormData>): JSX_2.Element;

export declare function FormActions<Schema extends SchemaType, FormData extends InferSchema<Schema>>({ submitLabel, form, }: {
    submitLabel: string;
    form: FormType<Schema, FormData>;
}): JSX_2.Element;

export declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ label, description, children, ...props }: FormFieldProps<TFieldValues, TName> & {
    children: (field: ControllerRenderProps<TFieldValues>) => JSX.Element;
}) => JSX_2.Element;

export declare type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control"> & {
    label: string;
    description?: string;
};

declare type FormType<T extends SchemaType, FormType extends InferSchema<T>> = UseFormReturn<FormType, unknown, undefined> & {
    onSubmit: ReturnType<UseFormHandleSubmit<FormType>>;
};

export declare const FullscreenLayout: ForwardRefExoticComponent<Omit<StandardLayoutProps_2 & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type HeaderProps = {
    module: {
        name: string;
        href: string;
        icon: IconType;
    };
    statusTag?: {
        text: string;
        variant: StatusVariant;
        tooltip?: string;
    };
    breadcrumbs?: BreadcrumbItemType[];
    actions?: PageAction[];
};

export declare const HighlightBanner: ({ title, subtitle, buttonLabel, onClick, }: HighlightBannerProps) => JSX_2.Element;

declare type HighlightBannerProps = {
    title: string;
    subtitle: string;
    buttonLabel: string;
    onClick?: () => void;
};

export declare const HomeLayout: ForwardRefExoticComponent<Omit<{
widgets?: ReactNode[];
children?: ReactNode;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const iconSizes: {
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare const Indicator: ForwardRefExoticComponent<IndicatorProps & RefAttributes<HTMLDivElement>>;

declare interface IndicatorProps {
    content: string;
    label: string;
    color?: string;
    icon?: IconType;
}

export declare const IndicatorsList: ForwardRefExoticComponent<IndicatorsListProps & RefAttributes<HTMLDivElement>>;

export declare interface IndicatorsListProps {
    items: ComponentProps<typeof Indicator>[];
}

declare type InferSchema<T extends SchemaType> = z.infer<T>;

export declare const InfoPaneLayout: ForwardRefExoticComponent<Omit<InfoPaneLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface InfoPaneLayoutProps {
    children: default_2.ReactNode;
    sideContent: default_2.ReactNode;
}

export declare const Input: React.FC<InputProps>;

declare const Input_2: React_2.ForwardRefExoticComponent<InputProps_2 & React_2.RefAttributes<HTMLInputElement>>;

export declare type InputProps = Pick<ComponentProps<typeof Input_2>, "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"> & {
    type?: Exclude<HTMLInputTypeAttribute, "number">;
};

declare type InputProps_2 = React_2.InputHTMLAttributes<HTMLInputElement>;

declare const Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;

declare type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType;
};

declare type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;

declare const layoutVariants: (props?: ({
    variant?: "narrow" | null | undefined;
} & ClassProp) | undefined) => string;

declare type Level = "info" | "warning" | "critical";

declare type LineChartConfig = {
    [key: string]: ChartConfigValue;
};

declare type LineChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: "natural" | "linear";
};

declare type LineChartPropsBase<K extends LineChartConfig = LineChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const LineChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: LineChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
};

export declare function Menu({ tree }: MenuProps): default_2.JSX.Element;

export declare interface MenuCategory {
    title: string;
    items: MenuItem[];
    isRoot?: boolean;
    isOpen?: boolean;
}

export declare interface MenuItem extends NavigationItem {
    icon: IconType;
    badge?: number;
}

declare interface MenuProps {
    tree: MenuCategory[];
}

export declare function ModuleAvatar({ size, icon }: ModuleAvatarProps): JSX_2.Element;

export declare interface ModuleAvatarProps extends VariantProps<typeof moduleAvatarVariants> {
    icon: IconType;
}

declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare type NavigateActionType = {
    type: "navigate";
    href: string;
};

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
};

declare type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;

export declare const NumberInput: ForwardRefExoticComponent<Omit<NumberInputProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type NumberInputProps = Omit<InputProps, "value" | "type" | "onChange"> & {
    locale: string;
    value?: number | null;
    step?: number;
    min?: number;
    max?: number;
    maxDecimals?: number;
    onChange?: (value: number | null) => void;
};

declare type OmitUndefined<T> = T extends undefined ? never : T;

export declare function OmniButton({ label, options, hasNewUpdate }: OmniButtonProps): JSX_2.Element;

declare interface OmniButtonProps {
    label: string;
    options: Option_2[];
    hasNewUpdate?: boolean;
}

declare interface Option_2 {
    title?: string;
    description?: string;
    href?: string;
    target?: string;
    onClick?: (event: any) => unknown;
}

export declare const OverviewLayout: ForwardRefExoticComponent<Omit<OverviewLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface OverviewLayoutProps {
    children: ReactNode;
    sidepanel: {
        title: string;
        items: DetailsItemType[];
    };
}

export declare function Page({ children, header }: PageProps): JSX_2.Element;

export declare namespace Page {
    var displayName: string;
}

export declare type PageAction = {
    label: string;
    icon: IconType;
} & ({
    href: string;
} | {
    actions: Array<{
        label: string;
        href: string;
    }>;
});

export declare function PageHeader({ module, statusTag, breadcrumbs, actions, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
}

export declare const PersonAvatar: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): JSX_2.Element;
    displayName: string;
};

declare type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;

export declare const PersonHeader: ({ firstName, lastName, description, src, primaryAction, secondaryActions, }: Props_7) => JSX_2.Element;

declare const PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;

export declare const PersonTag: ForwardRefExoticComponent<Props_13 & RefAttributes<HTMLDivElement>>;

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

export declare const PieChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: PieChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface PrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

export declare const PrivateBox: FC<PropsWithChildren>;

declare type Props = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare interface Props_10 {
    text: string;
    status: Status;
}

declare type Props_11 = {
    companyName: string;
    companyImageUrl: string;
    onClick?: () => void;
};

declare interface Props_12 {
    text: string;
    color: NewColor;
}

declare type Props_13 = {
    name: string;
    avatarUrl: string;
    onClick?: () => void;
};

declare type Props_14 = {
    text?: string;
    additionalAccesibleText?: string;
    icon?: IconType;
};

declare interface Props_15 {
    text: string;
    variant: Variant;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccesibleText?: string;
}

declare type Props_16 = {
    teamName: string;
    teamImageUrl: string;
    onClick?: () => void;
};

declare interface Props_17 {
    title: string;
    content: string;
    buttonLabel?: string;
    buttonIcon?: IconType;
    buttonAction?: () => void;
    type: Type;
}

declare type Props_18 = {
    label: string;
    icon: IconType;
    iconClassName?: string;
    count: number;
    onClick?: () => void;
};

declare type Props_19<Id extends string | number = string | number> = {
    items: Omit<WidgetInboxListItemProps<Id>, "onClick">[];
    onClickItem?: (id: Id) => void;
};

declare type Props_2 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_2["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type Props_20<Id extends string | number = string | number> = {
    id: Id;
    icon?: IconType;
    title: string;
    subtitle: string;
    onClick?: (id: Id) => void;
};

declare type Props_21<Id extends string | number = string | number> = {
    items: Omit<Props_22<Id>, "onClick">[];
    onClickItem?: (id: Id) => void;
};

declare type Props_22<Id extends string | number = string | number> = {
    id: Id;
    title: string;
    icon?: IconType;
    iconClassName?: string;
    rightIcon?: IconType;
    rightIconClassName?: string;
    count?: number;
    alert?: ComponentProps<typeof AlertTag>;
    rawTag?: ComponentProps<typeof RawTag>;
    onClick?: (id: Id) => void;
};

declare type Props_3 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_3["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps_3, "aria-label" | "aria-labelledby">;

declare type Props_4 = VariantProps<typeof alertAvatarVariants> & {
    type: "critical" | "warning" | "info";
    size?: "sm" | "md" | "lg";
};

declare type Props_5 = {
    date: Date;
};

declare type Props_6 = {
    name: string;
    description: string;
    src?: string;
} & Pick<BaseHeaderProps, "primaryAction" | "secondaryActions">;

declare type Props_7 = {
    firstName: string;
    lastName: string;
    description: string;
    src?: string;
} & Pick<BaseHeaderProps_3, "primaryAction" | "secondaryActions">;

declare type Props_8 = {
    status?: {
        label: string;
        variant: StatusVariant;
    };
} & Pick<BaseHeaderProps_4, "title" | "description" | "primaryAction" | "secondaryActions">;

declare type Props_9<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
};

export declare const RadarChart: <K extends ChartConfig>(props: RadarChartProps<K> & RefAttributes<HTMLDivElement>) => React.ReactNode;

export declare const _RadarChart: <K extends ChartConfig>({ data, dataConfig, scaleMin, scaleMax, aspect }: RadarChartProps<K>, ref: ForwardedRef<HTMLDivElement>) => JSX_2.Element;

export declare type RadarChartProps<K extends ChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    scaleMin?: number;
    scaleMax?: number;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const RawTag: ForwardRefExoticComponent<Props_14 & RefAttributes<HTMLDivElement>>;

export declare function renderAvatar(avatar: AvatarVariant, size?: (typeof sizes)[number]): ReactNode;

export declare const ResourceHeader: ({ title, description, primaryAction, secondaryActions, status, }: Props_8) => JSX_2.Element;

declare type SchemaType = ZodType;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & {
showBar?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

declare interface SecondaryAction extends PrimaryAction {
    variant?: "outline" | "critical";
}

export declare const Select: ForwardRefExoticComponent<SelectProps<string> & RefAttributes<HTMLButtonElement>>;

declare type SelectItemObject<T> = {
    value: T;
    label: string;
    icon?: IconType;
    description?: string;
    avatar?: AvatarVariant;
};

declare type SelectItemProps<T> = SelectItemObject<T> | "separator";

declare type SelectProps<T> = {
    placeholder: string;
    onChange: (value: T) => void;
    value?: T;
    options: SelectItemProps<T>[];
    children?: React.ReactNode;
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

declare type ShadAvatarProps = ComponentProps<typeof Avatar>;

export declare function Shortcut({ keys, variant }: ShortcutProps): JSX_2.Element;

declare interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}

declare const shortcutVariants: (props?: ({
    variant?: "default" | "inverse" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Sidebar({ header, body, footer }: SidebarProps): JSX_2.Element;

export declare function SidebarHeader({ companies, selected, onChange, withNotification, additionalOptions, }: SidebarHeaderProps): JSX_2.Element;

export declare type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps;

declare type SidebarIconProps = {
    isExpanded: boolean;
    onClick?: () => void;
};

declare interface SidebarProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge"];

declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Spinner({ size, className }: SpinnerProps): JSX_2.Element;

declare interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
}

declare const spinnerVariants: (props?: ({
    size?: "small" | "medium" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
height?: "auto" | "full" | null | undefined;
width?: "auto" | "full" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
wrap?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
height?: "auto" | "full" | null | undefined;
width?: "auto" | "full" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const StandardLayout: default_2.ForwardRefExoticComponent<StandardLayoutProps & default_2.HTMLAttributes<HTMLElement> & default_2.RefAttributes<HTMLElement>>;

export declare interface StandardLayoutProps extends VariantProps<typeof layoutVariants> {
    children?: default_2.ReactNode;
}

declare type StandardLayoutProps_2 = {
    children: default_2.ReactNode;
};

declare type Status = "positive" | "neutral" | "negative";

export declare const StatusTag: ForwardRefExoticComponent<Props_15 & RefAttributes<HTMLDivElement>>;

export declare type StatusVariant = Variant;

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type TabItem = {
    label: string;
    href: string;
    index?: boolean;
};

export declare const Tabs: FC<TabsProps> & {
    Skeleton: FC<Pick<TabsProps, "secondary">>;
};

declare interface TabsProps {
    tabs: TabItem[];
    secondary?: boolean;
}

export declare const TabsSkeleton: React.FC<Pick<TabsProps, "secondary">>;

declare type Tag = {
    icon: IconType;
    label?: string;
    description?: string;
};

declare interface Task {
    id: number | string;
    text: string;
    badge?: {
        text: string;
        isPastDue?: boolean;
    };
    counter?: number;
}

export declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare interface TasksList_2 {
    inProgress?: (Task | string)[];
    todo?: (Task | string)[];
}

export declare interface TasksListProps {
    tasks: TasksList_2;
    maxTasksToShow?: number;
    onClickTask?: (task: Task) => void;
    emptyMessage?: string;
    hideIcons?: boolean;
}

export declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props_2): JSX_2.Element;
    displayName: string;
};

declare type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;

declare const TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;

declare type TeamItemProps = {
    name: string;
    action?: ActionType;
};

export declare const TeamTag: ForwardRefExoticComponent<Props_16 & RefAttributes<HTMLDivElement>>;

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<TextareaProps_2 & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols">;

declare type TextareaProps_2 = React_2.TextareaHTMLAttributes<HTMLTextAreaElement>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const ToggleGroup: React_2.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React_2.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React_2.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "lg" | "sm" | "default" | null | undefined;
} & ClassProp) | undefined) => string>) & React_2.RefAttributes<HTMLDivElement>>;

export declare const ToggleGroupItem: React_2.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "lg" | "sm" | "default" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLButtonElement>>;

declare interface TwoColumnsItemType {
    title: string;
    info: string | ReactNode;
}

export declare const TwoColumnsList: ForwardRefExoticComponent<TwoColumnsListType & RefAttributes<HTMLDivElement>>;

declare interface TwoColumnsListType {
    title?: string;
    list: TwoColumnsItemType[];
}

declare type Type = "bar-chart" | "line-chart";

declare const type: readonly ["base", "rounded"];

declare type URL_2 = string;

export { useForm }

export declare function User({ firstName, lastName, avatarUrl, options }: UserProps): JSX_2.Element;

declare interface UserProps {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    options: {
        label: string;
        href?: string;
        icon?: IconType;
        onClick?: () => void;
        critical?: boolean;
    }[];
}

declare type Variant = "neutral" | "info" | "positive" | "warning" | "critical";

declare type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;

declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | null | undefined;
} & ClassProp) | undefined) => string;

declare type VerticalBarChartProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    label?: boolean;
};

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: string[];
    daysOfTheWeek?: string[];
}

export declare const Widget: default_2.ForwardRefExoticComponent<WidgetProps & {
    children: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>> & {
    Skeleton: default_2.ForwardRefExoticComponent<{
        header?: {
            title?: string;
            subtitle?: string;
        };
    } & VariantProps<(props?: ({
        height?: "lg" | "md" | "sm" | null | undefined;
    } & ClassProp) | undefined) => string> & default_2.RefAttributes<HTMLDivElement>>;
};

export declare function WidgetHighlightButton({ label, count, icon, iconClassName, onClick, }: Props_18): JSX_2.Element;

export declare function WidgetInboxList({ items, onClickItem }: Props_19): JSX_2.Element;

declare type WidgetInboxListItemProps<Id extends string | number = string | number> = Props_20<Id>;

export declare type WidgetInboxListProps = Props_19;

export declare interface WidgetProps {
    header?: {
        title?: string;
        subtitle?: string;
        comment?: string;
        canBeBlurred?: boolean;
        link?: {
            title: string;
            url: string;
            onClick?: () => void;
        };
        count?: number;
    };
    action?: ButtonProps;
    summaries?: Array<{
        label: string;
        value: string | number;
        prefixUnit?: string;
        postfixUnit?: string;
    }>;
    alert?: string;
    status?: {
        text: string;
        variant: StatusVariant;
    };
    fullHeight?: boolean;
}

export declare const WidgetSection: ForwardRefExoticComponent<    {
children?: ReactNode | undefined;
} & {
title?: string;
} & RefAttributes<HTMLDivElement>>;

export declare function WidgetSimpleList({ items, onClickItem }: Props_21): JSX_2.Element;

export declare type WidgetSimpleListProps = Props_21;

export declare type WidgetSkeletonProps = {
    header?: {
        title?: string;
        subtitle?: string;
    };
} & VariantProps<typeof skeletonVariants>;

export declare const WidgetStrip: ForwardRefExoticComponent<DashboardProps_2 & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type WidgetWidth = "sm" | "md" | "lg";

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
