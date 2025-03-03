import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps } from '@radix-ui/react-avatar';
import { ButtonHTMLAttributes } from 'react';
import { ClassValue } from 'cva';
import { ComponentProps } from 'react';
import { ControllerProps } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { FC } from 'react';
import { FieldPath } from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { JSX as JSX_2 } from 'react';
import { Observable } from 'zen-observable-ts';
import { PopoverProps } from '@radix-ui/react-popover';
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
import { VariantProps } from 'cva';
import { z } from 'zod';
import { ZodType } from 'zod';

declare type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonProps["variant"];
};

export declare type ActionsDefinition<T extends RecordType> = (item: T) => Array<DropdownItem & {
    enabled?: boolean;
}>;

declare type ActionType = CopyActionType | NavigateActionType;

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "info" | "positive" | "warning" | "destructive" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement | SVGElement>>;

export declare const AlertAvatar: ({ type, size }: Props_4) => JSX_2.Element;

declare const alertAvatarVariants: (props?: ({
    type?: "info" | "critical" | "warning" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

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
tileSize?: "lg" | "md" | "sm" | undefined;
gap?: "2" | "4" | "8" | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Avatar: ({ avatar, size, }: {
    avatar: AvatarVariant;
    size?: (typeof sizes)[number];
}) => ReactNode;

declare const Avatar_2: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarList: {
    ({ avatars, size, type, noTooltip, max, }: Props_5): JSX_2.Element;
    displayName: string;
};

export declare type AvatarNamedEntity = {
    id: number;
    name: string;
    avatar?: string;
    expanded?: boolean;
    subItems?: AvatarNamedSubEntity[];
};

export declare type AvatarNamedGroup = {
    value: string;
    label: string;
    type?: "avatar" | "team";
};

export declare type AvatarNamedSubEntity = {
    subId: number;
    subName: string;
    subAvatar?: string;
};

export declare const AvatarNameSelector: ({ entities, groups, onGroupChange, triggerPlaceholder, triggerSelected, selectedGroup, searchPlaceholder, selectAllLabel, clearLabel, selectedLabel, notFoundTitle, notFoundSubtitle, selectedAvatarName, onSelect: onSelectProp, width, loading, singleSelector, disabled, children, ...props }: AvatarNameSelectorProps & {
    children?: React.ReactNode;
}) => JSX_2.Element;

declare interface AvatarNameSelectorCommonProps extends Omit<PopoverProps, "children" | "modal"> {
    entities: AvatarNamedEntity[];
    groups: AvatarNamedGroup[];
    selectedGroup: string;
    triggerPlaceholder: string;
    triggerSelected: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    onGroupChange: (value: string | null) => void;
    disabled?: boolean;
    zIndex?: number;
    loading?: boolean;
    searchPlaceholder?: string;
    selectAllLabel?: string;
    clearLabel?: string;
    selectedLabel?: string;
    selectedAvatarName?: AvatarNamedEntity[];
    alwaysOpen?: boolean;
    width?: number;
}

export declare interface AvatarNameSelectorMultipleProps extends AvatarNameSelectorCommonProps {
    onSelect: (entities: AvatarNamedEntity[]) => void;
    singleSelector: false | undefined;
}

export declare type AvatarNameSelectorProps = AvatarNameSelectorSingleProps | AvatarNameSelectorMultipleProps;

export declare interface AvatarNameSelectorSingleProps extends AvatarNameSelectorCommonProps {
    onSelect: (entity: AvatarNamedEntity | null) => void;
    singleSelector: true;
}

declare type AvatarType = AvatarVariant["type"];

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
    type?: "critical" | "neutral" | "positive" | "highlight" | "warning" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const BalanceTag: ForwardRefExoticComponent<Props_10 & RefAttributes<HTMLDivElement>>;

declare type BarChartProps<K extends ChartConfig_2 = ChartConfig_2> = ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
    legend?: boolean;
    showValueUnderLabel?: boolean;
    highlightLastBar?: boolean;
    onClick?: (data: ChartDataPoint<K>) => void;
    hideTooltip?: boolean;
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

export declare const BaseCelebration: ({ link, firstName, lastName, src, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element;

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

export declare const BaseCommunityPost: ({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, dropdownItems, noVideoPreload, }: CommunityPostProps) => JSX_2.Element;

/**
 * Base data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type BaseDataAdapter<Record extends RecordType, Filters extends FiltersDefinition> = {
    paginationType?: never;
    fetchData: (options: BaseFetchOptions<Filters>) => BaseResponse<Record> | Promise<BaseResponse<Record>> | Observable<PromiseState<BaseResponse<Record>>>;
};

/**
 * Base options for data fetching
 * @template Filters - The available filter configurations
 */
export declare type BaseFetchOptions<Filters extends FiltersDefinition> = {
    filters: FiltersState<Filters>;
};

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
export declare type BaseFilterDefinition = {
    /** Human-readable label for the filter */
    label: string;
};

declare function BaseHeader({ title, avatar, description, primaryAction, secondaryActions, otherActions, status, metadata, }: BaseHeaderProps_2): JSX_2.Element;

declare type BaseHeaderProps = ComponentProps<typeof BaseHeader>;

declare interface BaseHeaderProps_2 {
    title: string;
    avatar?: {
        type: "generic";
        name: string;
        src?: string;
    } | AvatarVariant;
    description?: string;
    primaryAction?: PrimaryAction;
    secondaryActions?: SecondaryAction[];
    otherActions?: (DropdownItem & {
        isVisible?: boolean;
    })[];
    status?: {
        label: string;
        text: string;
        variant: StatusVariant;
        actions?: MetadataAction[];
    };
    metadata?: MetadataProps["items"];
}

/**
 * Base response type for collection data
 * @template Record - The type of records in the collection
 */
export declare type BaseResponse<Record> = Record[];

export declare const BaseTabs: React.FC<TabsProps>;

export declare type BreadcrumbBaseItemType = NavigationItem & {
    id: string;
    loading?: boolean;
    label: string;
};

export declare type BreadcrumbItemType = BreadcrumbLoadingItemType | BreadcrumbNavItemType | BreadcrumbSelectItemType;

export declare type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
    loading: true;
};

export declare type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
    icon?: IconType;
};

export declare function BreadcrumbSelect({ options, defaultItem, ...props }: BreadcrumbSelectProps): JSX_2.Element;

export declare type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
    type: "select";
    searchbox?: boolean;
    externalSearch?: boolean;
    options: BreadcrumbSelectProps["options"];
    onChange: BreadcrumbSelectProps["onChange"];
    value?: string;
    defaultItem?: SelectItemObject<string>;
};

export declare type BreadcrumbSelectProps = Omit<SelectProps<string>, "options" | "value"> & {
    options: Options;
    value?: string;
    defaultItem?: SelectItemObject<string>;
};

declare const Button: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "disabled" | "type" | "round"> & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
};

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "critical" | "neutral" | "ghost" | "promote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
    round?: boolean | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React_2.JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare const CalendarEvent: ForwardRefExoticComponent<CalendarEventProps & RefAttributes<HTMLDivElement>>;

export declare const CalendarEventList: ForwardRefExoticComponent<CalendarEventListProps & RefAttributes<HTMLDivElement>>;

export declare interface CalendarEventListProps {
    events: CalendarEventProps[];
    limit?: 1 | 2 | 3 | 4 | 5;
}

export declare interface CalendarEventProps {
    label?: string;
    title: string;
    subtitle?: string;
    description: string;
    color: string;
    isPending: boolean;
    leftTags?: Tag[];
    rightTags?: Tag[];
    fromDate?: Date;
    toDate?: Date;
    noBackground?: boolean;
}

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

declare type CardPropertyDefinition<T> = PropertyDefinition_2<T>;

declare type CardVisualizationOptions<T> = {
    cardProperties: ReadonlyArray<CardPropertyDefinition<T>>;
    title: (record: T) => string;
};

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
    hideTooltip?: boolean;
}

export declare function CategoryBarSection({ title, subtitle, data, helpText, legend, hideTooltip, }: CategoryBarSectionProps): JSX_2.Element;

declare interface CategoryBarSectionProps {
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
    hideTooltip?: boolean;
}

export declare const Celebration: (({ link, firstName, lastName, src, canReact, lastEmojiReaction, onReactionSelect, type, typeLabel, date, }: CelebrationProps) => JSX_2.Element) & {
    Skeleton: () => JSX_2.Element;
};

export declare type CelebrationProps = {
    link: string;
    firstName: string;
    lastName: string;
    src?: string;
    canReact?: boolean;
    lastEmojiReaction?: string;
    onReactionSelect?: (emoji: string) => void;
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

declare type ChartDataPoint<K extends ChartConfig_2> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};

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

export declare const ChartWidgetEmptyState: ForwardRefExoticComponent<Props_14 & RefAttributes<HTMLDivElement>>;

export declare type ChatWidgetEmptyStateProps = Props_14;

export declare function ClockInControls({ remainingMinutes, data, labels, locationId, locations, canShowLocation, locationSelectorDisabled, onClockIn, onClockOut, onBreak, canShowBreakButton, onChangeLocationId, canShowProject, projectSelectorElement, }: ClockInControlsProps): JSX_2.Element;

export declare interface ClockInControlsProps {
    /** Optional remaining time in minutes */
    remainingMinutes?: number;
    /** Clock in entries data */
    data: ClockInGraphProps["data"];
    /** Labels for all text content */
    labels: {
        clockedOut: string;
        clockedIn: string;
        onBreak: string;
        clockIn: string;
        clockOut: string;
        break: string;
        resume: string;
        remainingTime: string;
        overtime: string;
        selectLocation: string;
        selectProject: string;
    };
    locationId?: string;
    onChangeLocationId: Dispatch<string>;
    locations: {
        id: string;
        name: string;
        icon: IconType;
    }[];
    canShowLocation?: boolean;
    locationSelectorDisabled?: boolean;
    canShowBreakButton?: boolean;
    /** Callback when Clock In button is clicked */
    onClockIn?: () => void;
    /** Callback when Clock Out button is clicked */
    onClockOut?: () => void;
    /** Callback when Break button is clicked */
    onBreak?: () => void;
    canShowProject?: boolean;
    projectSelectorElement?: React.ReactNode;
}

declare interface ClockInGraphProps {
    data?: {
        from: Date;
        to: Date;
        variant: ClockInStatus;
    }[];
    remainingMinutes?: number;
}

declare type ClockInStatus = "clocked-in" | "break" | "clocked-out";

/**
 * Props for the Collection component.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 * @template VisualizationOptions - Additional options for visualizing the collection
 */
export declare type CollectionProps<Record extends RecordType, Filters extends FiltersDefinition, Actions extends ActionsDefinition<Record>, VisualizationOptions extends object> = {
    /** The data source configuration and state */
    source: DataSource<Record, Filters, Actions>;
} & VisualizationOptions;

declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare type ColumnNumber = 1 | 2 | 3 | 4 | 6;

export declare const CommunityPost: (({ id, author, group, createdAt, title, description, onClick, mediaUrl, event, counters, reactions, inLabel, comment, dropdownItems, noVideoPreload, }: CommunityPostProps) => JSX_2.Element) & {
    Skeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => JSX_2.Element;
};

export declare type CommunityPostProps = {
    id: string;
    author: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
        url: string;
    };
    group: {
        title: string;
        onClick: () => void;
    };
    createdAt: Date;
    title: string;
    description?: PostDescriptionProps["content"];
    mediaUrl?: string;
    event?: PostEventProps;
    counters: {
        views?: string;
        comments: string;
    };
    reactions?: ReactionsProps;
    inLabel: string;
    comment: {
        label: string;
        onClick: () => void;
    };
    noVideoPreload?: boolean;
    onClick: (id: string) => void;
    dropdownItems?: DropdownItem[];
};

export declare const CommunityPostSkeleton: ({ withEvent, withImage, }: CommunityPostSkeletonProps) => JSX_2.Element;

export declare type CommunityPostSkeletonProps = {
    withEvent?: boolean;
    withImage?: boolean;
};

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
    size?: "md" | "sm" | undefined;
    type?: "bold" | "default" | "selected" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * @template F - The filter options type
 */
export declare type CurrentFilters<F extends FilterOptions<string>> = F extends {
    fields: Record<infer K extends string, FilterDefinition>;
} ? {
    [Key in K]?: FilterValue<F["fields"][Key]>;
} : Record<string, never>;

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

/**
 * Combined type for all possible data adapter configurations
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type DataAdapter<Record extends RecordType, Filters extends FiltersDefinition> = BaseDataAdapter<Record, Filters> | PaginatedDataAdapter<Record, Filters>;

/**
 * A component that renders a collection of data with filtering and visualization capabilities.
 * It combines filters, data fetching, and multiple visualization options into a cohesive interface.
 *
 * @template Schema - The schema defining the structure and types of the collection data
 * @template Filters - The definition of available filters for the collection
 *
 * @param source - The data source containing properties, filters, and data fetching capabilities
 * @param visualizations - Array of available visualization options (e.g., table, card view)
 *
 * @returns A JSX element containing:
 * - Filter controls (if filters are defined)
 * - Visualization selector (if multiple visualizations are available)
 * - The selected visualization of the data
 */
export declare const DataCollection: <Record extends RecordType, Filters extends FiltersDefinition, Actions extends ActionsDefinition<Record>>({ source, visualizations, }: {
    source: DataSource<Record, Filters, Actions>;
    visualizations: ReadonlyArray<Visualization<Record, Filters, Actions>>;
}) => JSX.Element;

declare const DataList: ForwardRefExoticComponent<DataListProps & RefAttributes<HTMLUListElement>> & {
    Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;
    CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;
    PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;
    TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;
};

declare type DataListProps = {
    children: ReactElement<Items_2>[] | ReactElement<Items_2>;
    label?: string;
};

/**
 * Represents a data source with filtering capabilities and data fetching functionality.
 * Extends DataSourceDefinition with runtime properties for state management.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 */
export declare type DataSource<Record extends RecordType, Filters extends FiltersDefinition, Actions extends ActionsDefinition<Record>> = DataSourceDefinition<Record, Filters, Actions> & {
    /** Current state of applied filters */
    currentFilters: FiltersState<Filters>;
    /** Function to update the current filters state */
    setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>;
};

/**
 * Defines the structure and configuration of a data source for a collection.
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations for the collection
 */
export declare type DataSourceDefinition<Record extends RecordType, Filters extends FiltersDefinition, Actions extends ActionsDefinition<Record>> = {
    /** Available filter configurations */
    filters?: Filters;
    presets?: Presets<Filters>;
    actions?: Actions;
    /** Current state of applied filters */
    currentFilters?: FiltersState<Filters>;
    /** Data adapter responsible for fetching and managing data */
    dataAdapter: DataAdapter<Record, Filters>;
};

export declare const DateAvatar: ({ date }: Props_6) => JSX_2.Element;

export declare function DaytimePage({ children, header, period, embedded, }: DaytimePageProps): JSX_2.Element;

export declare namespace DaytimePage {
    var displayName: string;
}

export declare interface DaytimePageProps extends VariantProps<typeof daytimePageVariants> {
    children?: React.ReactNode;
    header?: React.ReactNode;
    embedded?: boolean;
}

declare const daytimePageVariants: (props?: ({
    period?: "evening" | "morning" | "afternoon" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

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

export declare const DotTag: ForwardRefExoticComponent<DotTagProps & RefAttributes<HTMLDivElement>>;

export declare interface DotTagProps {
    text: string;
    color: NewColor;
}

export declare function Dropdown({ items, icon, size, children, }: DropdownProps): JSX_2.Element;

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
    icon?: IconType;
    size?: ButtonProps["size"];
    children?: React.ReactNode;
};

declare type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

/**
 * Extracts the property keys from a record type.
 * @template RecordType - The type containing the properties to extract
 */
export declare type ExtractPropertyKeys<RecordType> = keyof RecordType;

export declare const F1SearchBox: ForwardRefExoticComponent<F1SearchBoxProps & RefAttributes<HTMLInputElement>>;

declare type F1SearchBoxProps = {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    threshold?: number;
    debounceTime?: number;
    clearable?: boolean;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
};

export declare const filterActions: <T extends RecordType>(actions: ActionsDefinition<T>, item: T) => (DropdownItem & {
    enabled?: boolean;
})[];

/**
 * Union of all available filter types.
 * @template T - Type of values for the InFilterDefinition
 */
export declare type FilterDefinition<T = unknown> = InFilterDefinition<T> | SearchFilterDefinition;

/**
 * Option type for InFilter
 * @template T - Type of value
 */
export declare type FilterOption<T = unknown> = {
    /** The value used for filtering */
    value: T;
    /** Human-readable label for the option */
    label: string;
};

/**
 * Configuration options for filters.
 * @template FilterKeys - String literal type for filter keys
 */
export declare type FilterOptions<FilterKeys extends string> = Record<FilterKeys, FilterDefinition>;

/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for configuration and displays active filters as chips.
 *
 * Features:
 * - Search and multi-select filters
 * - Temporary state until explicitly applied
 * - Animated filter chips
 *
 * @example
 * ```tsx
 * <Filters
 *   definition={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" }
 *       ]
 *     }
 *   }}
 *   filters={{}}
 *   onChange={setFilters}
 * />
 * ```
 */
export declare function Filters<Definition extends FiltersDefinition>({ schema, presets, filters: value, onChange, }: FiltersProps<Definition>): JSX_2.Element;

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * @template Keys - String literal type for filter keys
 */
export declare type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>;

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
export declare interface FiltersProps<Definition extends FiltersDefinition> {
    /** The definition of available filters and their configurations */
    schema: Definition;
    /** Current state of applied filters */
    filters: FiltersState<Definition>;
    presets?: Presets<Definition>;
    /** Callback fired when filters are changed */
    onChange: (value: FiltersState<Definition>) => void;
}

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * @template Definition - Record of filter definitions
 */
export declare type FiltersState<Definition extends Record<string, FilterDefinition>> = {
    [K in keyof Definition]?: FilterValue<Definition[K]>;
};

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 * @template T - The filter definition type
 */
export declare type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : never;

export declare type FlattenedItem = {
    parent: AvatarNamedEntity | null;
    subItem: AvatarNamedSubEntity & {
        expanded?: boolean;
        subItems?: AvatarNamedSubEntity[];
    };
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

declare interface FrameContextType {
    isSmallScreen: boolean;
    sidebarState: SidebarState;
    prevSidebarState: SidebarState | null;
    toggleSidebar: () => void;
}

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
    actions?: PageAction[];
    navigation?: NavigationProps;
    embedded?: boolean;
    breadcrumbs?: BreadcrumbItemType[];
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

declare type HTMLString = string;

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

/**
 * Multi-select filter that allows selecting from predefined options.
 * Used for filtering based on a set of discrete values.
 * @template T - Type of values that can be selected
 */
export declare type InFilterDefinition<T = unknown> = BaseFilterDefinition & {
    /** Identifies this as an "in" type filter */
    type: "in";
    /**
     * Available options for selection.
     * Can be either:
     * - An array of options
     * - A function that returns an array of options (sync or async)
     */
    options: Array<FilterOption<T>> | (() => Array<FilterOption<T>> | Promise<Array<FilterOption<T>>>);
};

export declare const InfoPaneLayout: ForwardRefExoticComponent<Omit<InfoPaneLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface InfoPaneLayoutProps {
    children: default_2.ReactNode;
    sideContent: default_2.ReactNode;
}

export declare const Input: React.FC<InputProps>;

declare const Input_2: React_2.ForwardRefExoticComponent<React_2.InputHTMLAttributes<HTMLInputElement> & {
    icon?: IconType;
    clearable?: boolean;
} & React_2.RefAttributes<HTMLInputElement>>;

export declare type InputProps = Pick<ComponentProps<typeof Input_2>, "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"> & {
    type?: Exclude<HTMLInputTypeAttribute, "number">;
};

declare const Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;

declare type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType;
};

declare type Items = SelectItemObject<string>[];

declare type Items_2 = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;

declare const layoutVariants: (props?: ({
    variant?: "narrow" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

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

declare type MetadataAction = {
    icon: IconType;
    label: string;
    onClick: () => void;
};

declare function MetadataItem({ item }: {
    item: MetadataItem;
}): JSX_2.Element;

declare interface MetadataItem {
    label: string;
    value: MetadataItemValue;
    actions?: MetadataAction[];
    hideLabel?: boolean;
}

declare type MetadataItemValue = {
    type: "text";
    content: string;
} | {
    type: "avatar";
    variant: AvatarVariant;
    text: string;
} | {
    type: "status";
    label: string;
    variant: StatusVariant;
} | {
    type: "list";
    variant: AvatarVariant["type"];
    avatars: AvatarVariant[];
} | {
    type: "data-list";
    data: string[];
} | {
    type: "tag-list";
    tags: string[];
} | {
    type: "dot-tag";
    label: string;
    color: NewColor;
};

declare interface MetadataProps {
    /**
     * Everything is not a MetadataItem is ignored.
     * Undefined and boolean enable conditional items
     **/
    items: (MetadataItem | undefined | boolean)[];
    /**
     * If true and the metadata type is a list, it will be collapsed to the first item
     */
    collapse?: boolean;
}

export declare const MobileDropdown: ({ items, children }: DropdownProps) => JSX_2.Element;

export declare function ModuleAvatar({ size, icon }: ModuleAvatarProps): JSX_2.Element;

export declare interface ModuleAvatarProps extends VariantProps<typeof moduleAvatarVariants> {
    icon: IconType;
}

declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type NavigateActionType = {
    type: "navigate";
    href: string;
};

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
};

declare type NavigationProps = {
    previous?: {
        url: string;
        title: string;
    };
    next?: {
        url: string;
        title: string;
    };
    counter?: {
        current: number;
        total: number;
    };
};

export declare type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;

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

export declare function OmniButton({ label, options, hasNewUpdate }: OmniButtonProps): JSX_2.Element;

declare interface OmniButtonProps {
    label: string;
    options: Option_2[];
    hasNewUpdate?: boolean;
}

export declare function OnePagination({ totalPages, currentPage, onPageChange, showControls, ariaLabel, visibleRange, hasNextPage, }: OnePaginationProps): JSX_2.Element;

declare interface OnePaginationProps {
    /**
     * The total number of pages. Pass 0 if the total is unknown.
     */
    totalPages: number;
    /**
     * The current page.
     * @default 1
     */
    currentPage?: number;
    /**
     * The callback function to handle page change.
     */
    onPageChange?: (page: number) => void;
    /**
     * Whether to show the controls.
     * @default true
     */
    showControls?: boolean;
    /**
     * Accessible label for the pagination navigation.
     * @default "Page navigation"
     */
    ariaLabel?: string;
    /**
     * The number of pages to show on the sides of the current page.
     * @default 3
     */
    visibleRange?: number;
    /**
     * Used in indeterminate state (totalPages = 0) to indicate if there are more pages available.
     * @default true
     */
    hasNextPage?: boolean;
}

declare interface Option_2 {
    title?: string;
    description?: string;
    href?: string;
    target?: string;
    onClick?: (event: any) => unknown;
}

declare type Options = Items | ((search?: string) => Promise<Items> | Items);

export declare const OverviewLayout: ForwardRefExoticComponent<Omit<OverviewLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface OverviewLayoutProps {
    children: ReactNode;
    sidepanel: {
        title: string;
        items: DetailsItemType[];
    };
}

export declare function Page({ children, header, embedded }: PageProps): JSX_2.Element;

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

export declare function PageHeader({ module, statusTag, breadcrumbs, actions, embedded, navigation, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    embedded?: boolean;
}

/**
 * Paginated data adapter configuration
 * @template Record - The type of records in the collection
 * @template Filters - The available filter configurations
 */
export declare type PaginatedDataAdapter<Record extends RecordType, Filters extends FiltersDefinition> = {
    paginationType: "pages";
    perPage?: number;
    fetchData: (options: PaginatedFetchOptions<Filters>) => PaginatedResponse<Record> | Promise<PaginatedResponse<Record>> | Observable<PromiseState<PaginatedResponse<Record>>>;
};

/**
 * Options for paginated data fetching
 * @template Filters - The available filter configurations
 */
export declare type PaginatedFetchOptions<Filters extends FiltersDefinition> = BaseFetchOptions<Filters> & {
    pagination: {
        currentPage: number;
        perPage: number;
    };
};

/**
 * Response type for paginated collection data
 * @template Record - The type of records in the collection
 */
export declare type PaginatedResponse<Record> = {
    records: Record[];
} & PaginationInfo;

export declare type PaginationInfo = {
    total: number;
    currentPage: number;
    perPage: number;
    pagesCount: number;
};

export declare const PersonAvatar: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): JSX_2.Element;
    displayName: string;
};

declare type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;

declare const PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;

export declare const PersonTag: ForwardRefExoticComponent<Props_12 & RefAttributes<HTMLDivElement>>;

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

declare type PostDescriptionProps = {
    content: HTMLString;
    collapsed?: boolean;
};

declare type PostEventProps = {
    title: string;
    imageUrl?: string;
    place?: string;
    date: Date;
};

export declare type Presets<Filters extends FiltersDefinition> = Array<{
    label: string;
    filter: FiltersState<Filters>;
}>;

declare interface PrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
    disabled?: boolean;
    tooltip?: string;
    isVisible?: boolean;
}

export declare const PrivateBox: FC<PropsWithChildren>;

/**
 * Utility type for handling both Promise and Observable return types.
 * @template T - The type of the value being promised or observed
 */
export declare type PromiseOrObservable<T> = T | Promise<T> | Observable<PromiseState<T>>;

declare interface PromiseState<T> {
    loading: boolean;
    error: Error | null;
    data: T | null;
}

declare type PropertyDefinition_2<T> = {
    label: string;
    info?: string;
    render: (item: T) => ReactNode;
};

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

declare type Props_12 = {
    name: string;
    avatarUrl: string;
    onClick?: () => void;
};

declare type Props_13 = {
    teamName: string;
    teamImageUrl: string;
    onClick?: () => void;
};

declare interface Props_14 {
    title: string;
    content: string;
    buttonLabel?: string;
    buttonIcon?: IconType;
    buttonAction?: () => void;
    type: Type;
}

declare type Props_15 = {
    label: string;
    icon: IconType;
    iconClassName?: string;
    count: number;
    onClick?: () => void;
};

declare type Props_16<Id extends string | number = string | number> = {
    items: Omit<WidgetInboxListItemProps<Id>, "onClick">[];
    onClickItem?: (id: Id) => void;
};

declare type Props_17<Id extends string | number = string | number> = {
    id: Id;
    icon?: IconType;
    title: string;
    subtitle: string;
    onClick?: (id: Id) => void;
};

declare type Props_18<Id extends string | number = string | number> = {
    items: Omit<Props_19<Id>, "onClick">[];
    onClickItem?: (id: Id) => void;
};

declare type Props_19<Id extends string | number = string | number> = {
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

declare type Props_2 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_2["size"];
    badge?: BadgeProps;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

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
    avatars: AvatarVariant[];
    size?: (typeof sizes)[number];
    type?: AvatarType;
    /**
     * Whether to hide tooltips in each avatar.
     * @default false
     */
    noTooltip?: boolean;
    /**
     * The maximum number of avatars to display.
     * @default 3
     */
    max?: number;
};

declare type Props_6 = {
    date: Date;
};

declare type Props_7 = {} & Pick<BaseHeaderProps, "avatar" | "title" | "description" | "primaryAction" | "secondaryActions" | "otherActions" | "metadata" | "status">;

declare type Props_8 = {
    /** Main heading text */
    title: string;
    /** Description text below the title */
    description: string;
    /**  Complementary action specific to the section */
    action?: Pick<ButtonProps, "label" | "onClick"> & {
        icon?: IconType;
        variant?: "default" | "outline";
    };
    /** Optional Link to related documentation (Help center or other link))*/
    supportButton?: {
        label: string;
        href: string;
    };
    /** If specified, a separator will be displayed above or below the content */
    separator?: "top" | "bottom";
};

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

export declare const RawTag: ForwardRefExoticComponent<RawTagProps & RefAttributes<HTMLDivElement>>;

export declare type RawTagProps = {
    text?: string;
    additionalAccesibleText?: string;
    icon?: IconType;
    noBorder?: boolean;
    className?: string;
};

declare interface ReactionProps {
    emoji: string;
    initialCount: number;
    hasReacted?: boolean;
    users?: User_2[];
    onInteraction?: (emoji: string) => void;
}

declare interface ReactionsProps {
    items: ReactionProps[];
    onInteraction?: (emoji: string) => void;
    locale?: string;
}

/**
 * Represents a record type with string keys and unknown values.
 * This type is used to represent the data structure of a collection.
 */
export declare type RecordType = Record<string, unknown>;

export declare const ResourceHeader: ({ avatar, title, description, primaryAction, secondaryActions, otherActions, status, metadata, }: Props_7) => JSX_2.Element;

declare type SchemaType = ZodType;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & {
showBar?: boolean;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

/**
 * Free-text search filter.
 * Used for performing text-based searches across specified fields.
 */
export declare type SearchFilterDefinition = BaseFilterDefinition & {
    /** Identifies this as a "search" type filter */
    type: "search";
};

declare interface SecondaryAction extends PrimaryAction {
    variant?: "outline" | "critical";
}

export declare const SectionHeader: ({ title, description, action, supportButton, separator, }: Props_8) => JSX_2.Element;

export declare const Select: ForwardRefExoticComponent<SelectProps<string> & RefAttributes<HTMLButtonElement>>;

export declare type SelectItemObject<T> = {
    value: T;
    label: string;
    description?: string;
    avatar?: AvatarVariant;
    icon?: IconType;
};

export declare type SelectItemProps<T> = SelectItemObject<T> | "separator";

export declare type SelectProps<T> = {
    placeholder?: string;
    onChange: (value: T) => void;
    value?: T;
    defaultItem?: SelectItemObject<T>;
    options: SelectItemProps<T>[];
    children?: React.ReactNode;
    disabled?: boolean;
    open?: boolean;
    showSearchBox?: boolean;
    searchBoxPlaceholder?: string;
    onSearchChange?: (value: string) => void;
    externalSearch?: boolean;
    searchValue?: string;
    onOpenChange?: (open: boolean) => void;
    searchEmptyMessage?: string;
    className?: string;
};

declare type ShadAvatarProps = ComponentProps<typeof Avatar_2>;

export declare function Shortcut({ keys, variant }: ShortcutProps): JSX_2.Element | null;

declare interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}

declare const shortcutVariants: (props?: ({
    variant?: "default" | "inverse" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

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

declare type SidebarState = "locked" | "unlocked" | "hidden";

declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge"];

declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare function Spinner({ size, className }: SpinnerProps): JSX_2.Element;

declare interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
}

declare const spinnerVariants: (props?: ({
    size?: "small" | "large" | "medium" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
height?: "auto" | "full" | undefined;
width?: "auto" | "full" | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
basis?: "0" | undefined;
inline?: boolean | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
grow?: boolean | undefined;
shrink?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | undefined;
wrap?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | undefined;
height?: "auto" | "full" | undefined;
width?: "auto" | "full" | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | undefined;
basis?: "0" | undefined;
inline?: boolean | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | undefined;
grow?: boolean | undefined;
shrink?: boolean | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | undefined;
} & ({
class?: ClassValue;
className?: never;
} | {
class?: never;
className?: ClassValue;
})) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const StandardLayout: default_2.ForwardRefExoticComponent<StandardLayoutProps & default_2.HTMLAttributes<HTMLElement> & default_2.RefAttributes<HTMLElement>>;

export declare interface StandardLayoutProps extends VariantProps<typeof layoutVariants> {
    children?: default_2.ReactNode;
}

declare type StandardLayoutProps_2 = {
    children: default_2.ReactNode;
};

declare type Status = "positive" | "neutral" | "negative";

export declare const StatusTag: ForwardRefExoticComponent<StatusTagProps & RefAttributes<HTMLDivElement>>;

export declare interface StatusTagProps {
    text: string;
    variant: Variant;
    /**
     * Sometimes you need to clarify the status for screen reader users
     * E.g., when showing a tooltip for sighted user, provide the tootip text to this prop because tooltips aren't accessible
     */
    additionalAccesibleText?: string;
}

export declare type StatusVariant = Variant;

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type TabItem = {
    label: string;
    href: string;
    index?: boolean;
};

declare type TableColumnDefinition<T> = PropertyDefinition_2<T>;

declare type TableVisualizationOptions<T> = {
    columns: ReadonlyArray<TableColumnDefinition<T>>;
};

export declare const Tabs: FC<TabsProps> & {
    Skeleton: FC<Pick<TabsProps, "secondary">>;
};

declare interface TabsProps {
    tabs: TabItem[];
    secondary?: boolean;
    embedded?: boolean;
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

export declare const TeamTag: ForwardRefExoticComponent<Props_13 & RefAttributes<HTMLDivElement>>;

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<TextareaProps_2 & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols">;

declare type TextareaProps_2 = React_2.TextareaHTMLAttributes<HTMLTextAreaElement>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const ToggleGroup: React_2.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React_2.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React_2.RefAttributes<HTMLDivElement>, "ref">) & VariantProps<(props?: ({
    variant?: "default" | "outline" | undefined;
    size?: "lg" | "sm" | "default" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string>) & React_2.RefAttributes<HTMLDivElement>>;

export declare const ToggleGroupItem: React_2.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "outline" | undefined;
    size?: "lg" | "sm" | "default" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string> & React_2.RefAttributes<HTMLButtonElement>>;

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

/**
 * A hook that manages data source state and filtering capabilities for a collection.
 * It handles the initialization and management of filter states, and provides
 * a consistent interface for data fetching with the current filters.
 *
 * @template Schema - The schema defining the structure and types of the collection data
 * @template Filters - The definition of available filters for the collection
 *
 * @param properties - The schema properties defining the data structure
 * @param filters - Optional filter configurations for the collection
 * @param currentFilters - Initial state of the filters
 * @param fetchData - Function to fetch data with the current filters
 *
 * @returns A DataSource object containing:
 * - properties: The schema properties
 * - filters: The available filter configurations
 * - currentFilters: The current state of the filters
 * - setCurrentFilters: Function to update the filter state
 * - fetchData: Function to fetch data with the current filters
 */
export declare const useDataSource: <Record extends RecordType, Filters extends FiltersDefinition, Actions extends ActionsDefinition<Record>>({ filters, currentFilters: initialCurrentFilters, dataAdapter, actions, presets, }: DataSourceDefinition<Record, Filters, Actions>, deps?: ReadonlyArray<unknown>) => DataSource<Record, Filters, Actions>;

export { useForm }

export declare function User({ firstName, lastName, avatarUrl, options }: UserProps): JSX_2.Element;

declare interface User_2 {
    name: string;
}

declare interface UserProps {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    options: DropdownItem[];
}

export declare function useSidebar(): FrameContextType;

declare type Variant = "neutral" | "info" | "positive" | "warning" | "critical";

declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type VerticalBarChartProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    label?: boolean;
};

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Represents a visualization configuration for displaying collection data.
 * Supports different visualization types (card, table, or custom) with their respective options.
 *
 * @template Record - The type of records in the collection
 * @template Filters - The filters type extending FiltersDefinition
 */
declare type Visualization<Record extends RecordType, Filters extends FiltersDefinition, Actions extends ActionsDefinition<Record>> = {
    /** Card-based visualization type */
    type: "card";
    /** Configuration options for card visualization */
    options: CardVisualizationOptions<Record>;
} | {
    /** Table-based visualization type */
    type: "table";
    /** Configuration options for table visualization */
    options: TableVisualizationOptions<Record>;
} | {
    /** Custom visualization type */
    type: "custom";
    /** Human-readable label for the visualization */
    label: string;
    /** Icon to represent the visualization in UI */
    icon: IconType;
    /** Custom component to render the visualization */
    component: (props: {
        source: DataSource<Record, Filters, Actions>;
    }) => JSX.Element;
};

export declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: number[];
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
        height?: "lg" | "md" | "sm" | undefined;
    } & ({
        class?: ClassValue;
        className?: never;
    } | {
        class?: never;
        className?: ClassValue;
    })) | undefined) => string> & default_2.RefAttributes<HTMLDivElement>>;
};

export declare function WidgetEmptyState({ title, description, emoji, actions, }: WidgetEmptyStateProps): JSX_2.Element;

export declare type WidgetEmptyStateProps = {
    title: string;
    description: string;
    emoji?: string;
    actions?: Action[];
};

export declare function WidgetHighlightButton({ label, count, icon, iconClassName, onClick, }: Props_15): JSX_2.Element;

export declare function WidgetInboxList({ items, onClickItem }: Props_16): JSX_2.Element;

declare type WidgetInboxListItemProps<Id extends string | number = string | number> = Props_17<Id>;

export declare type WidgetInboxListProps = Props_16;

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

export declare function WidgetSimpleList({ items, onClickItem }: Props_18): JSX_2.Element;

export declare type WidgetSimpleListProps = Props_18;

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
