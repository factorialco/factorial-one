import { AlertTagCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/alertTag';
import { AlertTagCellValue as AlertTagCellValue_2 } from './types/alertTag.tsx';
import { AmountCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/amount';
import { AmountCellValue as AmountCellValue_2 } from './types/amount.tsx';
import { AnchorHTMLAttributes } from 'react';
import { AvatarListCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/avatarList';
import { AvatarListCellValue as AvatarListCellValue_2 } from './types/avatarList.tsx';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps } from '@radix-ui/react-avatar';
import { CategoryBarProps } from './CategoryBarChart';
import { ChartConfig } from '../../ui/chart';
import { ChartConfig as ChartConfig_2 } from './utils/types';
import { ChartPropsBase } from './utils/types';
import { ClassValue } from 'cva';
import { color as color_2 } from '../../../../ui/avatar';
import { CompanyCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/company';
import { CompanyCellValue as CompanyCellValue_2 } from './types/company.tsx';
import { ComponentProps } from 'react';
import { DateCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/date';
import { DateCellValue as DateCellValue_2 } from './types/date.tsx';
import { DateFilterOptions } from './DateFilter/DateFilter';
import { default as default_2 } from 'react';
import { DotTagCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/dotTag';
import { DotTagCellValue as DotTagCellValue_2 } from './types/dotTag.tsx';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { IconCellValue } from './types/icon.tsx';
import { IconProps } from './Icon';
import { ImgHTMLAttributes } from 'react';
import { InFilterOptions } from './InFilter/types';
import { JSX as JSX_2 } from 'react';
import { LineChartConfig } from '../../ui/chart';
import { LineChartPropsBase } from './utils/types';
import { LinkProps as LinkProps_3 } from './Link';
import { MouseEventHandler } from 'react';
import { NumberCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/number';
import { NumberCellValue as NumberCellValue_2 } from './types/number.tsx';
import { PersonCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/person';
import { PersonCellValue as PersonCellValue_2 } from './types/person.tsx';
import { PieChartProps } from './PieChart';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { PropertyRendererMetadata } from '../../../experimental/OneDataCollection/visualizations/property/types';
import { PropertyRendererMetadata as PropertyRendererMetadata_2 } from './types.ts';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { sizes as sizes_3 } from '../../../../ui/avatar';
import { StatusCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/status';
import { StatusCellValue as StatusCellValue_2 } from './types/status.tsx';
import { SVGProps } from 'react';
import { TagCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/tag';
import { TagCellValue as TagCellValue_2 } from './types/tag.tsx';
import { TagListCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/tagList';
import { TagListCellValue as TagListCellValue_2 } from './types/tagList.tsx';
import { TeamCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/team';
import { TeamCellValue as TeamCellValue_2 } from './types/team.tsx';
import { TextCellValue } from '../../../experimental/OneDataCollection/visualizations/property/types/text';
import { TextCellValue as TextCellValue_2 } from './types/text.tsx';
import { type as type_2 } from '../../../../ui/avatar';
import { VariantProps } from 'cva';

export declare type Action = UpsellAction | RegularAction;

declare type Action_2 = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonVariant;
    size?: "md" | "lg";
    loading?: boolean;
};

export declare const AreaChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "step" | "linear" | "natural" | "monotoneX";
marginTop?: number;
canBeBlurred?: boolean;
blurArea?: "l" | "r" | "lr";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes_2)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

declare type AvatarBadge = ({
    type: "module";
    module: ModuleId;
} | {
    type: Exclude<BadgeProps["type"], undefined>;
    icon: BadgeProps["icon"];
}) & {
    tooltip?: string;
};

declare type AvatarVariant = ({
    type: "person";
} & Omit<PersonAvatarProps, "size">) | ({
    type: "team";
} & Omit<TeamAvatarProps, "size">) | ({
    type: "company";
} & Omit<CompanyAvatarProps, "size">);

export declare const Await: <T>({ resolve, fallback, error: errorFallback, children, }: AwaitProps<T>) => ReactNode;

declare type AwaitProps<T> = {
    resolve: Promise<T> | T;
    fallback: ReactNode;
    error?: ReactNode;
    className?: string;
    children: (value: T) => ReactNode;
};

declare interface BadgeProps extends VariantProps<typeof badgeVariants> {
    icon: IconType;
    size?: keyof typeof iconSizes;
}

declare const badgeVariants: (props?: ({
    type?: "critical" | "warning" | "positive" | "neutral" | "highlight" | undefined;
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type BannerAction = {
    label: string;
    onClick: () => void;
    variant?: "default" | "outline" | "ghost";
};

export declare const BarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig> & {
type?: "simple" | "stacked" | "stacked-by-sign";
label?: boolean;
legend?: boolean;
showValueUnderLabel?: boolean;
highlightLastBar?: boolean;
onClick?: ((data: {
label: string;
values: {
[x: string]: number;
};
}) => void) | undefined;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type BaseAction = {
    label: string;
    onClick: () => Promise<void> | void;
};

declare const BaseAvatar: ForwardRefExoticComponent<    {
type: ShadAvatarProps["type"];
name: string | string[];
src?: string;
size?: ShadAvatarProps["size"];
color?: ShadAvatarProps["color"] | "random";
badge?: AvatarBadge;
} & Pick<Omit<AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & {
size?: sizes_3[number];
type?: type_2[number];
color?: color_2[number];
} & RefAttributes<HTMLSpanElement>, "aria-label" | "aria-labelledby"> & RefAttributes<HTMLDivElement>>;

declare type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_2 = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_3 = ComponentProps<typeof BaseAvatar>;

declare type BaseBannerProps = {
    title: string;
    subtitle?: string;
    mediaUrl: string;
    primaryAction?: BannerAction;
    secondaryAction?: BannerAction;
    onClose?: () => void;
    isLoading?: boolean;
    children?: React.ReactNode;
};

/**
 * Base definition for all filter types.
 * Provides common properties that all filters must implement.
 */
declare type BaseFilterDefinition<T extends FilterTypeKey> = {
    /** Human-readable label for the filter */
    label: string;
    /** The type of filter */
    type: T;
};

export declare const buildTranslations: (translations: TranslationsType) => TranslationsType;

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonInternalProps = Pick<ComponentProps<typeof Button_2>, "variant" | "size" | "disabled" | "type" | "round" | "className" | "pressed"> & DataAttributes & {
    /**
     * Callback fired when the button is clicked. Supports async functions for loading state.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    /**
     * The visible label for the button. Required for accessibility.
     */
    label: string;
    /**
     * Indicates that an action is in progress. Shows a loading spinner and blocks interaction.
     */
    loading?: boolean;
    /**
     * Adds an icon to the button, combined with the label for better clarity and recognition.
     */
    icon?: IconType;
    /**
     * Adds an emoji to the button, can be used as a special case of icon-only button.
     */
    emoji?: string;
    /**
     * Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.
     */
    hideLabel?: boolean;
    /**
     * Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.
     */
    size?: "sm" | "md" | "lg";
    /**
     * Appends a React node after the button content (for custom UI extensions).
     */
    append?: React.ReactNode;
    /**
     * Appends a React node as a separate button, visually grouped with the main button.
     */
    appendButton?: React.ReactNode;
    /**
     * If true, the button is inactive and does not respond to user interaction.
     */
    disabled?: boolean;
    /**
     * If true, the button is visually active or selected (pressed state).
     */
    pressed?: boolean;
};

export declare type ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number]>;

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    round?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    appendButton?: React_2.ReactNode;
    pressed?: boolean;
}

declare type ButtonSize = (typeof sizes)[number];

declare type ButtonVariant = (typeof variants)[number];

declare const buttonVariants: (props?: ({
    disabled?: boolean | undefined;
    pressed?: boolean | undefined;
    variant?: "default" | "critical" | "promote" | "neutral" | "outline" | "ghost" | "outlinePromote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

declare type CalendarMode = "single" | "range";

declare type CalendarView = "day" | "month" | "year" | "week" | "quarter" | "halfyear";

declare type CardAvatarVariant = AvatarVariant | {
    type: "emoji";
    emoji: string;
} | {
    type: "file";
    file: File;
};

declare interface CardInternalProps {
    /**
     * Whether the card has a compact layout
     */
    compact?: boolean;
    /**
     * The avatar to display in the card
     */
    avatar?: CardAvatarVariant;
    /**
     * Whether the card has an image
     */
    image?: string;
    /**
     * The title of the card
     */
    title?: string;
    /**
     * The description of the card
     */
    description?: string;
    /**
     * Metadata items to display in the card
     */
    metadata?: CardMetadata[];
    /**
     * The children to display in the card
     */
    children?: ReactNode;
    /**
     * The link to navigate to when the card is clicked
     */
    link?: string;
    /**
     * The primary action that displays a primary button in the card footer
     */
    primaryAction?: CardPrimaryAction;
    /**
     * The secondary actions - either an array of button actions or a single link
     */
    secondaryActions?: CardSecondaryAction[] | CardSecondaryLink;
    /**
     * Actions to display in the dropdown menu inside the card content
     */
    otherActions?: DropdownItem[];
    /**
     * Whether the card is selectable
     */
    selectable?: boolean;
    /**
     * Whether the card is selected
     */
    selected?: boolean;
    /**
     * The callback to handle the selection of the card
     */
    onSelect?: (selected: boolean) => void;
    /**
     * The callback to handle the click of the card
     */
    onClick?: () => void;
    /**
     * Force vertical metadata for compact layout
     * Private prop
     */
    forceVerticalMetadata?: boolean;
}

declare type CardMetadata = {
    icon: IconType;
    property: CardMetadataProperty;
};

/**
 * Card metadata property renderers.
 * Each metadata item consists of an icon and a property with its data.
 */
declare type CardMetadataProperty = {
    [K in CardPropertyType]: {
        type: K;
        value: Parameters<(typeof propertyRenderers)[K]>[0];
    };
}[CardPropertyType];

declare interface CardPrimaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

declare const cardPropertyRenderers: {
    readonly text: (args: TextCellValue) => default_2.JSX.Element;
    readonly number: (args: NumberCellValue, meta: PropertyRendererMetadata<never>) => default_2.JSX.Element;
    readonly date: (args: DateCellValue) => default_2.JSX.Element;
    readonly amount: (args: AmountCellValue, meta: PropertyRendererMetadata<never>) => default_2.JSX.Element;
    readonly person: (args: PersonCellValue) => default_2.JSX.Element;
    readonly company: (args: CompanyCellValue) => default_2.JSX.Element;
    readonly team: (args: TeamCellValue) => default_2.JSX.Element;
    readonly status: (args: StatusCellValue) => default_2.JSX.Element;
    readonly tag: (args: TagCellValue) => default_2.JSX.Element;
    readonly avatarList: (args: AvatarListCellValue) => default_2.JSX.Element;
    readonly tagList: (args: TagListCellValue) => default_2.JSX.Element;
    readonly alertTag: (args: AlertTagCellValue) => default_2.JSX.Element;
    readonly dotTag: (args: DotTagCellValue) => default_2.JSX.Element;
};

declare type CardPropertyType = keyof typeof cardPropertyRenderers;

declare interface CardSecondaryAction {
    label: string;
    icon?: IconType;
    onClick: () => void;
}

declare interface CardSecondaryLink extends Pick<LinkProps, "href" | "target" | "disabled"> {
    label: string;
}

export declare const CategoryBarChart: ForwardRefExoticComponent<Omit<CategoryBarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface CheckboxProps extends DataAttributes {
    /**
     * The title of the checkbox
     */
    title?: string;
    /**
     * The id of the checkbox
     */
    id?: string;
    /**
     * The checked state of the checkbox
     * @default false
     */
    checked?: boolean;
    /**
     * Whether the checkbox is indeterminate
     * @default false
     */
    indeterminate?: boolean;
    /**
     * The callback function that is called when the checkbox is checked
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Whether the checkbox is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The value of the checkbox
     */
    value?: string;
    /**
     * Whether to hide the label
     * @default false
     */
    hideLabel?: boolean;
    /**
     * Whether the checkbox is only presentational, so it does not have functionality
     * @default false
     */
    presentational?: boolean;
    /**
     * Whether the checkbox should stop event propagation
     * @default false
     */
    stopPropagation?: boolean;
    /**
     * The name of the checkbox
     */
    name?: string;
}

declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare const CompanyAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props_2): JSX_2.Element;
    displayName: string;
};

declare type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;

declare type ComponentTypes = (typeof componentTypes)[number];

declare const componentTypes: readonly ["layout", "info", "action", "form"];

export declare const CopyButton: ForwardRefExoticComponent<Omit<CopyButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type CopyButtonProps = Omit<ComponentProps<typeof Button_2>, "onClick" | "children" | "title" | "label" | "hideLabel" | "icon" | "round"> & {
    valueToCopy: string;
    copiedTooltipLabel?: string;
    copyTooltipLabel?: string;
    onCopy?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * Extracts the current filters type from filter options.
 * Creates a type mapping filter keys to their respective value types.
 * Used for type-safe access to filter values.
 * @template F - The filter options type
 */
export declare type CurrentFilters<F extends FilterOptions<string>> = F extends {
    fields: Record<infer K extends string, FilterDefinition>;
} ? {
    [Key in K]?: FilterValue<F["fields"][Key]>;
} : Record<string, never>;

declare type DateFilterDefinition = BaseFilterDefinition<"date"> & {
    options?: DateFilterOptions_2;
};

declare type DateFilterOptions_2 = {
    minDate?: Date;
    maxDate?: Date;
    mode?: CalendarMode;
    defaultSelected?: Date | DateRange | null;
    view?: CalendarView;
};

declare type DateRange = {
    from: Date;
    to?: Date;
};

declare type DefaultAction = BannerAction;

export declare const defaultTranslations: {
    readonly approvals: {
        readonly history: "Approval history";
        readonly statuses: {
            readonly waiting: "Waiting";
            readonly pending: "Pending";
            readonly approved: "Approved";
            readonly rejected: "Rejected";
        };
        readonly requiredNumbers: {
            readonly one: "One approval required";
            readonly other: "{{count}} approvals required";
        };
    };
    readonly navigation: {
        readonly sidebar: "Main navigation";
        readonly previous: "Previous";
        readonly next: "Next";
    };
    readonly actions: {
        readonly add: "Add";
        readonly edit: "Edit";
        readonly save: "Save";
        readonly cancel: "Cancel";
        readonly copy: "Copy";
        readonly close: "Close";
        readonly showAll: "Show all";
        readonly showLess: "Show less";
        readonly skipToContent: "Skip to content";
        readonly view: "View";
        readonly unselect: "Unselect";
        readonly search: "Search";
        readonly clear: "Clear";
        readonly more: "More";
        readonly moveUp: "Move up";
        readonly moveDown: "Move down";
        readonly thumbsUp: "Like";
        readonly thumbsDown: "Dislike";
        readonly other: "Other actions";
    };
    readonly status: {
        readonly selected: {
            readonly singular: "Selected";
            readonly plural: "Selected";
        };
    };
    readonly filters: {
        readonly label: "Filters";
        readonly applyFilters: "Apply filters";
        readonly cancel: "Cancel";
        readonly failedToLoadOptions: "Failed to load options";
        readonly retry: "Retry";
    };
    readonly collections: {
        readonly sorting: {
            readonly noSorting: "No sorting";
            readonly toggleDirection: "Toggle sorting direction";
            readonly sortBy: "Sort by";
        };
        readonly grouping: {
            readonly noGrouping: "No grouping";
            readonly groupBy: "Group by";
            readonly toggleDirection: "Toggle direction";
        };
        readonly actions: {
            readonly actions: "Actions";
        };
        readonly visualizations: {
            readonly table: "Table view";
            readonly card: "Card view";
            readonly list: "List view";
            readonly pagination: {
                readonly of: "of";
            };
        };
        readonly itemsCount: "items";
        readonly emptyStates: {
            readonly noData: {
                readonly title: "No data";
                readonly description: "No data available";
            };
            readonly noResults: {
                readonly title: "No results";
                readonly description: "No results found try another search or clear the filters";
                readonly clearFilters: "Clear filters";
            };
            readonly error: {
                readonly title: "Error";
                readonly description: "An error occurred while loading the data";
                readonly retry: "Retry";
            };
        };
        readonly summaries: {
            readonly types: {
                readonly sum: "sum";
            };
        };
    };
    readonly shortcut: "Shortcut";
    readonly date: {
        readonly from: "From";
        readonly to: "To";
        readonly none: "None";
        readonly date: "Date";
        readonly custom: "Custom period";
        readonly selectDate: "Select Date";
        readonly compareTo: "Compare to";
        readonly presets: {
            readonly last7Days: "Last 7 days";
            readonly last30Days: "Last 30 days";
            readonly last3Months: "Last 3 months";
            readonly last6Months: "Last 6 months";
            readonly lastYear: "Last year";
            readonly last3Years: "Last 3 years";
            readonly last100Years: "Last 100 years";
        };
        readonly range: "Range";
        readonly selectedBy: "Selected by";
        readonly groups: {
            readonly today: "Today";
            readonly yesterday: "Yesterday";
            readonly lastWeek: "Last week";
            readonly lastMonth: "Last month";
            readonly other: "Other";
        };
        readonly granularities: {
            readonly day: {
                readonly currentDate: "Today";
                readonly label: "Day";
            };
            readonly week: {
                readonly currentDate: "This week";
                readonly label: "Week";
            };
            readonly month: {
                readonly currentDate: "This month";
                readonly label: "Month";
            };
            readonly quarter: {
                readonly currentDate: "This quarter";
                readonly label: "Quarter";
            };
            readonly halfyear: {
                readonly currentDate: "This half year";
                readonly label: "Half year";
            };
            readonly year: {
                readonly currentDate: "This year";
                readonly label: "Year";
            };
            readonly range: {
                readonly currentDate: "Today";
                readonly label: "Range";
            };
        };
        readonly month: {
            readonly january: "January";
            readonly february: "February";
            readonly march: "March";
            readonly april: "April";
            readonly may: "May";
            readonly june: "June";
            readonly july: "July";
            readonly august: "August";
            readonly september: "September";
            readonly october: "October";
            readonly november: "November";
            readonly december: "December";
        };
    };
    readonly favorites: {
        readonly favorites: "Favorites";
        readonly remove: "Remove favorite";
    };
    readonly notifications: "Notifications";
    readonly ai: {
        readonly openChat: "Open Chat";
        readonly description: "Chat with AI";
    };
};

declare type DropdownItem = DropdownItemObject | DropdownItemSeparator;

declare type DropdownItemObject = NavigationItem & {
    type?: "item";
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare type DropdownItemSeparator = {
    type: "separator";
};

export declare function EmojiImage({ emoji, size }: EmojiImageProps): JSX_2.Element;

export declare interface EmojiImageProps extends VariantProps<typeof emojiVariants> {
    emoji: string;
}

declare const emojiVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare interface ErrorMessageProps {
    title: string;
    description: string;
}

export declare const experimental: <T extends (...args: any[]) => any>(name: string, component: T) => T;

export declare const F0Card: ForwardRefExoticComponent<F0CardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: ({ compact }: {
        compact?: boolean;
    }) => JSX_2.Element;
};

export declare type F0CardProps = Omit<CardInternalProps, (typeof privateProps_2)[number]>;

/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0Checkbox: typeof _F0Checkbox;

declare function _F0Checkbox({ title, onCheckedChange, id, disabled, indeterminate, checked, value, hideLabel, presentational, stopPropagation, name, ...rest }: CheckboxProps): JSX_2.Element;

export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    link?: LinkContextValue;
    privacyModeInitiallyEnabled?: boolean;
    image?: ImageContextValue;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
    i18n: Omit<I18nProviderProps, "children">;
    l10n: Omit<L10nProviderProps, "children">;
    isDev?: boolean;
    showExperimentalWarnings?: boolean;
}>;

/**
 * Union of all available filter types.
 * Used to define possible filter configurations in a collection.
 * @template T - Type of values for the InFilterDefinition
 */
export declare type FilterDefinition = FilterDefinitionsByType[keyof FilterDefinitionsByType];

/**
 * All the available filter types
 */
declare type FilterDefinitionsByType<T = unknown> = {
    in: InFilterDefinition<T>;
    search: SearchFilterDefinition;
    date: DateFilterDefinition;
};

/**
 * Configuration options for filters in a collection.
 * Defines the structure and behavior of available filters.
 * @template FilterKeys - String literal type for filter keys
 */
export declare type FilterOptions<FilterKeys extends string> = Record<FilterKeys, FilterDefinition>;

/**
 * Record of filter definitions for a collection.
 * Maps filter keys to their respective definitions.
 * Used to configure the available filters for a collection.
 * @template Keys - String literal type for filter keys
 */
export declare type FiltersDefinition<Keys extends string = string> = Record<Keys, FilterDefinition>;

/**
 * Current state of all filters in a collection.
 * Maps filter keys to their current values.
 * This represents the active filter selections at any given time.
 * @template Definition - Record of filter definitions
 */
export declare type FiltersState<Definition extends Record<string, FilterDefinition>> = {
    [K in keyof Definition]?: FilterValue<Definition[K]>;
};

declare type FilterTypeContext<Options extends object = never> = {
    schema: FilterTypeSchema<Options>;
};

declare type FilterTypeDefinition<Value = unknown, Options extends object = never, EmptyValue = Value> = {
    /** Check if the value is empty */
    emptyValue: EmptyValue;
    isEmpty: (value: Value, context: FilterTypeContext<Options>) => boolean;
    /** Render the filter form */
    render: <Schema extends FilterTypeSchema<Options>>(props: {
        schema: Schema;
        value: Value;
        onChange: (value: Value) => void;
    }) => React.ReactNode;
    /**
     * The value label to display in the filter chips
     */
    chipLabel: (value: Value, context: FilterTypeContext<Options>) => string | Promise<string>;
    /**
     * The default options to render a filter of this type, for example max and min date for a date filter, the list of options for an in filter, etc
     */
    defaultOptions?: Options;
    /**
     * The height of the filter form container in pixels
     */
    formHeight?: number;
};

declare type FilterTypeKey = keyof typeof filterTypes;

declare const filterTypes: {
    readonly in: FilterTypeDefinition<string[], InFilterOptions<string>>;
    readonly search: FilterTypeDefinition<string>;
    readonly date: FilterTypeDefinition<Date | DateRange | undefined, DateFilterOptions>;
};

declare type FilterTypeSchema<Options extends object = never> = {
    options: Options extends never ? never : Options;
    label: string;
};

/**
 * Extracts the appropriate value type for a given filter:
 * - InFilter -> Array of selected values of type T
 * - SearchFilter -> Search string
 *
 * This type is used to ensure type safety when working with filter values.
 * @template T - The filter definition type
 */
export declare type FilterValue<T extends FilterDefinition> = T extends InFilterDefinition<infer U> ? U[] : T extends SearchFilterDefinition ? string : T extends DateFilterDefinition ? DateRange | Date | undefined : never;

export declare function getEmojiLabel(emoji: string): string;

export declare const HomeLayout: ForwardRefExoticComponent<Omit<{
widgets?: ReactNode[];
children?: ReactNode;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface I18nProviderProps {
    children: ReactNode;
    translations: TranslationsType;
}

export declare const Icon: ForwardRefExoticComponent<Omit<Omit<IconProps, "ref"> & RefAttributes<SVGSVGElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const iconSizes: {
    readonly xs: "xs";
    readonly sm: "xs";
    readonly md: "sm";
    readonly lg: "md";
};

export declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare type ImageContextValue = {
    src?: (props: ImageProps) => SrcProps;
};

declare type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

declare type InFilterDefinition<T = unknown> = BaseFilterDefinition<"in"> & {
    options: InFilterOptions_2<T>;
};

/**
 * Represents a selectable option in filter components.
 * Used primarily with InFilterDefinition.
 * @template T - Type of the underlying value
 */
declare type InFilterOptionItem<T = unknown> = {
    /** The value used for filtering */
    value: T;
    /** Human-readable label for the option */
    label: string;
};

/**
 * Represents the options for the InFilter component.
 * @template T - Type of the underlying value
 */
declare type InFilterOptions_2<T> = {
    cache?: boolean;
    options: Array<InFilterOptionItem<T>> | (() => Array<InFilterOptionItem<T>> | Promise<Array<InFilterOptionItem<T>>>);
};

declare type L10nContextValue = {
    locale: string;
};

declare interface L10nProviderProps {
    children: ReactNode;
    l10n: L10nContextValue;
}

declare interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}

declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;

declare const layoutVariants: (props?: ({
    variant?: "narrow" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const LineChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "natural" | "linear";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Link: ForwardRefExoticComponent<Omit<LinkProps_3 & RefAttributes<HTMLAnchorElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkContextValue = {
    currentPath?: string;
    component?: (props: LinkProps_2, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
};

export declare interface LinkProps extends LinkProps_2, VariantProps<typeof linkVariants>, DataAttributes {
    stopPropagation?: boolean;
}

declare type LinkProps_2 = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};

declare const linkVariants: (props?: ({
    variant?: "link" | "unstyled" | undefined;
    disabled?: boolean | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare interface LoadingStateProps {
    label: string;
}

declare type ModuleId = keyof typeof modules;

declare const modules: {
    readonly "ai-reports": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly analytics: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly ats: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly benefits: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly billing: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly calendar: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly cards: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "clock-in": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_attendance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_projects: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly company_trainings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly compensations: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly complaints: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly discover: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly employee_attendance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly employees: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly engagement: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly engagement_insights: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-accounting": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-sales": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-spending": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-treasury": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "finance-workspace": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly goals: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly home: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly hub: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly kudos: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly meetings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_benefits: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_documents: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_projects: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_spending: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly my_trainings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "new-trainings": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly notifications: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly inbox: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly overviews: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly pages: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly payroll_bundle: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly performance_v2: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly performance: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly playground: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly processes: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly profile: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly project_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly reports: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly settings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly personal_settings: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly shift_management: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly shifts: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly social: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly software: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly space_control: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly talent_analytics: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly tasks: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly "time-tracking": ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly timeoff: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    readonly workflows: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
};

declare type NavigationItem = Pick<LinkProps_2, "href" | "exactMatch" | "onClick"> & {
    label: string;
} & DataAttributes;

export declare interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}

/**
 * OneFiltersPicker component to use as a single component
 */
export declare const OneFilterPicker: {
    <Definition extends FiltersDefinition>(props: OneFilterPickerRootProps<Definition>): JSX_2.Element;
    displayName: string;
};

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
declare interface OneFilterPickerRootProps<Definition extends FiltersDefinition> {
    /** The definition of available filters and their configurations */
    filters?: Definition;
    /** Current state of applied filters */
    value: FiltersState<Definition>;
    /** Optional preset configurations that users can select */
    presets?: PresetsDefinition<Definition>;
    /** Callback fired when filters are changed */
    onChange: (value: FiltersState<Definition>) => void;
    /** The children of the component */
    children?: React.ReactNode;
}

declare const PersonAvatar: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: PersonAvatarProps_2): JSX_2.Element;
    displayName: string;
};

declare type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;

declare type PersonAvatarProps_2 = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: BaseAvatarProps["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

export declare const PieChart: ForwardRefExoticComponent<Omit<PieChartProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

/**
 * Defines preset filter configurations that can be applied to a collection.
 * @template Filters - The available filter configurations
 */
export declare type PresetDefinition<Filters extends FiltersDefinition> = {
    /** Display name for the preset */
    label: string;
    /** Filter configuration to apply when this preset is selected */
    filter: FiltersState<Filters>;
    /** Function to count the number of items that match the filter */
    itemsCount?: (filters: FiltersState<Filters>) => Promise<number | undefined> | number | undefined;
};

export declare type PresetsDefinition<Filters extends FiltersDefinition> = PresetDefinition<Filters>[];

export declare const PrivacyModeProvider: React_2.FC<{
    initiallyEnabled?: boolean;
    children: ReactNode;
}>;

declare const privateProps: readonly ["append", "appendButton", "className"];

declare const privateProps_2: readonly ["forceVerticalMetadata"];

export declare const ProductBlankslate: ForwardRefExoticComponent<ProductBlankslateProps & RefAttributes<HTMLDivElement>>;

declare type ProductBlankslateProps = {
    title: string;
    subtitle?: string;
    image: string;
    benefits: string[];
    actions?: React.ReactNode;
    withShadow?: boolean;
    icon?: IconType;
    moduleName?: string;
};

export declare function ProductCard({ title, description, onClick, onClose, isVisible, dismissable, trackVisibility, ...props }: ProductCardProps): false | JSX_2.Element;

export declare type ProductCardProps = {
    title: string;
    description: string;
    onClick: () => void;
    onClose?: () => void;
    isVisible: boolean;
    dismissable?: boolean;
    trackVisibility?: (open: boolean) => void;
} & ({
    module: ModuleId;
} | {
    icon: IconType;
});

export declare function ProductModal({ isOpen, onClose, title, image, benefits, errorMessage, successMessage, loadingState, nextSteps, closeLabel, primaryAction, modalTitle, modalIcon, secondaryAction, portalContainer, }: ProductModalProps): JSX_2.Element;

declare type ProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    modalTitle: string;
    modalIcon: IconType;
    title: string;
    image: string;
    benefits: string[];
    errorMessage: {
        title: string;
        description: string;
    };
    successMessage: {
        title: string;
        description: string;
        buttonLabel: string;
        buttonOnClick: () => void;
    };
    loadingState: {
        label: string;
    };
    nextSteps: {
        title: string;
        items: {
            text: string;
            isCompleted?: boolean;
        }[];
    };
    closeLabel: string;
    primaryAction?: Action_2;
    secondaryAction?: Action_2;
    portalContainer?: HTMLElement | null;
};

export declare function ProductWidget({ mediaUrl, title, description, onClose, dismissible, width, trackVisibility, actions, showConfirmation, }: ProductWidgetProps): JSX_2.Element;

declare type ProductWidgetProps = {
    mediaUrl?: string;
    title: string;
    description: string;
    onClose: () => void;
    dismissible: boolean;
    width?: string;
    trackVisibility?: (visible: boolean) => void;
    actions?: Action[];
    showConfirmation?: boolean;
};

export declare const ProgressBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
value: number;
max?: number;
label?: string;
color?: string;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type PromoteAction = {
    variant: "promote";
    label: string;
    onClick: () => void;
    errorMessage: UpsellingButtonProps["errorMessage"];
    successMessage: UpsellingButtonProps["successMessage"];
    loadingState: UpsellingButtonProps["loadingState"];
    nextSteps: UpsellingButtonProps["nextSteps"];
    closeLabel: UpsellingButtonProps["closeLabel"];
    showIcon?: boolean;
    showConfirmation?: boolean;
};

/**
 * Renders a property value based on the renderer type.
 * @param renderer - The renderer type to use
 * @param args - The arguments to pass to the renderer
 * @returns The rendered property value
 */
declare const propertyRenderers: {
    readonly text: (args: TextCellValue_2) => JSX_2.Element;
    readonly number: (args: NumberCellValue_2, meta: PropertyRendererMetadata_2<never>) => JSX_2.Element;
    readonly date: (args: DateCellValue_2) => JSX_2.Element;
    readonly amount: (args: AmountCellValue_2, meta: PropertyRendererMetadata_2<never>) => JSX_2.Element;
    readonly avatarList: (args: AvatarListCellValue_2) => JSX_2.Element;
    readonly status: (args: StatusCellValue_2) => JSX_2.Element;
    readonly alertTag: (args: AlertTagCellValue_2) => JSX_2.Element;
    readonly person: (args: PersonCellValue_2) => JSX_2.Element;
    readonly company: (args: CompanyCellValue_2) => JSX_2.Element;
    readonly team: (args: TeamCellValue_2) => JSX_2.Element;
    readonly tag: (args: TagCellValue_2) => JSX_2.Element;
    readonly dotTag: (args: DotTagCellValue_2) => JSX_2.Element;
    readonly tagList: (args: TagListCellValue_2) => JSX_2.Element;
    readonly icon: (args: IconCellValue) => JSX_2.Element;
};

declare type Props = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_2["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type Props_2 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_3["size"];
    badge?: AvatarBadge;
} & Pick<BaseAvatarProps_3, "aria-label" | "aria-labelledby">;

declare type RegularAction = BaseAction & {
    type: "regular";
    variant: ButtonVariant;
};

declare type SearchFilterDefinition = BaseFilterDefinition<"search">;

declare type ShadAvatarProps = ComponentProps<typeof Avatar>;

declare const sizes: readonly ["sm", "md", "lg"];

declare const sizes_2: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

declare type SrcProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes">;

export declare const StandardLayout: ForwardRefExoticComponent<Omit<StandardLayoutProps & HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface StandardLayoutProps extends VariantProps<typeof layoutVariants> {
    children?: default_2.ReactNode;
}

export declare interface StepItemProps {
    text: string;
    isCompleted?: boolean;
}

export declare interface SuccessMessageProps {
    title: string;
    description: string;
    buttonLabel: string;
    buttonOnClick: () => void;
}

declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, badge, }: Props): JSX_2.Element;
    displayName: string;
};

declare type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;

declare type TranslationShape<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends Record<string, string | Record<string, unknown>> ? TranslationShape<T[K]> : never;
};

export declare type TranslationsType = TranslationShape<typeof defaultTranslations>;

export declare const TwoColumnLayout: ForwardRefExoticComponent<Omit<TwoColumnLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface TwoColumnLayoutProps {
    children: ReactNode;
    sideContent: ReactNode;
    mainColumnPosition?: "left" | "right";
}

declare const type: readonly ["base", "rounded"];

declare type UpsellAction = BaseAction & {
    type: "upsell";
    variant: "promote" | "outlinePromote";
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    loadingState: LoadingStateProps;
    nextSteps: NextStepsProps;
    closeLabel: string;
    showConfirmation: boolean;
};

export declare const UpsellingBanner: ForwardRefExoticComponent<Omit<BaseBannerProps, "children" | "primaryAction" | "secondaryAction"> & {
primaryAction?: DefaultAction | PromoteAction;
secondaryAction?: DefaultAction | PromoteAction;
} & RefAttributes<HTMLDivElement>>;

export declare function UpsellingButton({ label, showIcon, onRequest, showConfirmation, loading: externalLoading, errorMessage, successMessage, loadingState, nextSteps, closeLabel, variant, onModalStateChange, portalContainer, ...props }: UpsellingButtonProps): JSX_2.Element;

export declare interface UpsellingButtonProps extends Omit<ButtonProps, "icon"> {
    variant?: "promote" | "outlinePromote";
    /**
     * The text to be displayed in the button
     */
    label: string;
    /**
     * Whether to show the Upsell icon. Defaults to true.
     */
    showIcon?: boolean;
    /**
     * Function to be executed when the button is clicked
     */
    onRequest?: () => Promise<void> | void;
    /**
     * Whether to show the confirmation dialog after the request
     */
    showConfirmation?: boolean;
    /**
     * The error message to be displayed in the confirmation dialog
     */
    errorMessage: ErrorMessageProps;
    /**
     * The success message to be displayed in the confirmation dialog
     */
    successMessage: SuccessMessageProps;
    /**
     * The label to be displayed in the button when the request is being processed
     */
    loadingState: LoadingStateProps;
    /**
     * The next steps to be displayed in the confirmation dialog
     */
    nextSteps: NextStepsProps;
    /**
     * The label to be displayed in the close button of the confirmation dialog
     */
    closeLabel: string;
    /**
     * Callback to notify when the modal state changes (open/closed)
     */
    onModalStateChange?: (isOpen: boolean) => void;
    /**
     * Portal container for the confirmation dialog
     */
    portalContainer?: HTMLElement | null;
}

export declare function UpsellingPopover({ isOpen, setIsOpen, label, variant, size, showIcon, side, align, icon, mediaUrl, title, description, width, trackVisibility, actions, onClick, hideLabel, }: UpsellingPopoverProps): JSX_2.Element;

declare type UpsellingPopoverProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    label: string;
    variant: ButtonProps["variant"];
    size?: ButtonProps["size"];
    side?: PopoverContentProps["side"];
    align?: PopoverContentProps["align"];
    icon?: IconType;
    showIcon?: boolean;
    mediaUrl: string;
    title: string;
    description: string;
    width?: string;
    trackVisibility?: (visible: boolean) => void;
    actions?: Action[];
    onClick?: () => void;
    hideLabel?: boolean;
};

export declare const UpsellRequestResponseDialog: ForwardRefExoticComponent<UpsellRequestResponseDialogProps & RefAttributes<HTMLDivElement>>;

declare interface UpsellRequestResponseDialogProps {
    open: boolean;
    onClose?: () => void;
    success: boolean;
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    nextSteps: NextStepsProps;
    closeLabel: string;
    portalContainer?: HTMLElement | null;
}

export declare const useEmojiConfetti: () => {
    fireEmojiConfetti: (emoji: string, elementRef: RefObject<HTMLElement>) => void;
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

declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote"];

export declare const VerticalBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
label?: boolean;
showRatio?: boolean;
valueFormatter?: (value: string | number | undefined) => string | number;
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


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfigWithLabels) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        liveCompanion: {
            insertLiveCompanion: (data: LiveCompanionData, config?: LiveCompanionConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        transcript: {
            insertTranscript: (data: TranscriptData, config?: TranscriptConfig) => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        moodTracker: {
            insertMoodTracker: (data: MoodTrackerData, config?: MoodTrackerConfig) => ReturnType;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}
