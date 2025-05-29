import { AnchorHTMLAttributes } from 'react';
import { CategoryBarProps } from './CategoryBarChart';
import { ChartConfig } from '../../ui/chart';
import { ChartConfig as ChartConfig_2 } from './utils/types';
import { ChartPropsBase } from './utils/types';
import { ClassValue } from 'cva';
import { ComponentProps } from 'react';
import { default as default_2 } from 'react';
import { ForwardedRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { IconProps } from './Icon';
import { ImgHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react';
import { LineChartConfig } from '../../ui/chart';
import { LineChartPropsBase } from './utils/types';
import { LinkProps as LinkProps_3 } from './Link';
import { PieChartProps } from './PieChart';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';
import { SVGProps } from 'react';
import { VariantProps } from 'cva';

declare type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: ButtonVariant;
    size?: "md" | "lg";
    loading?: boolean;
};

declare type Action_2 = UpsellAction | RegularAction;

export declare const AreaChart: ForwardRefExoticComponent<Omit<LineChartPropsBase<LineChartConfig> & {
lineType?: "step" | "linear" | "natural" | "monotoneX";
marginTop?: number;
canBeBlurred?: boolean;
blurArea?: "l" | "r" | "lr";
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

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
    onClick: () => Promise<void>;
};

export declare const buildTranslations: (translations: TranslationsType) => TranslationsType;

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonInternalProps = Pick<ComponentProps<typeof Button_2>, "variant" | "size" | "disabled" | "type" | "round" | "className"> & DataAttributes & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    loading?: boolean;
    icon?: IconType;
    emoji?: string;
    hideLabel?: boolean;
    size?: "sm" | "md" | "lg";
    append?: React.ReactNode;
    appendButton?: React.ReactNode;
};

export declare type ButtonProps = Omit<ButtonInternalProps, (typeof privateProps)[number]>;

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    round?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    appendButton?: React_2.ReactNode;
}

declare type ButtonSize = (typeof sizes)[number];

declare type ButtonVariant = (typeof variants)[number];

declare const buttonVariants: (props?: ({
    disabled?: boolean | undefined;
    variant?: "default" | "outline" | "critical" | "neutral" | "ghost" | "promote" | undefined;
    size?: "lg" | "md" | "sm" | undefined;
} & ({
    class?: ClassValue;
    className?: never;
} | {
    class?: never;
    className?: ClassValue;
})) | undefined) => string;

export declare const CategoryBarChart: ForwardRefExoticComponent<Omit<CategoryBarProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type ComponentTypes = (typeof componentTypes)[number];

declare const componentTypes: readonly ["layout", "info", "action", "form"];

export declare const CopyButton: ForwardRefExoticComponent<Omit<CopyButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type CopyButtonProps = Omit<ComponentProps<typeof Button_2>, "onClick" | "children" | "title" | "label" | "hideLabel" | "icon" | "round"> & {
    valueToCopy: string;
    copiedTooltipLabel?: string;
    copyTooltipLabel?: string;
};

declare const defaultTranslations: {
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
    };
    readonly collections: {
        readonly actions: {
            readonly actions: "Actions";
        };
        readonly visualizations: {
            readonly table: "Table view";
            readonly card: "Card view";
            readonly pagination: {
                readonly of: "of";
            };
        };
        readonly filters: {
            readonly failedToLoadOptions: "Failed to load options";
            readonly retry: "Retry";
        };
        readonly itemsCount: "items";
    };
    readonly shortcut: "Shortcut";
    readonly date: {
        readonly from: "From";
        readonly to: "To";
        readonly date: "Date";
        readonly custom: "Custom period";
        readonly selectDate: "Select Date";
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

export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    link?: LinkContextValue;
    privacyModeInitiallyEnabled?: boolean;
    image?: ImageContextValue;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
    i18n: Omit<I18nProviderProps, "children">;
    l10n: Omit<L10nProviderProps, "children">;
}>;

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

export declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement> & {
    animate?: "normal" | "animate";
}>;

declare type ImageContextValue = {
    src?: (props: ImageProps) => SrcProps;
};

declare type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

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
    variant?: "link" | "text" | undefined;
    active?: boolean | undefined;
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

export declare interface NextStepsProps {
    title: string;
    items: StepItemProps[];
}

export declare const PieChart: ForwardRefExoticComponent<Omit<PieChartProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const PrivacyModeProvider: React_2.FC<{
    initiallyEnabled?: boolean;
    children: ReactNode;
}>;

declare const privateProps: readonly ["append", "appendButton", "className"];

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

export declare function ProductCard({ title, description, onClick, onClose, isVisible, icon, dismissable, trackVisibility, }: ProductCardProps): false | JSX_2.Element;

export declare type ProductCardProps = {
    title: string;
    description: string;
    onClick: () => void;
    onClose?: () => void;
    isVisible: boolean;
    icon: IconType;
    dismissable?: boolean;
    trackVisibility?: (open: boolean) => void;
};

export declare function ProductModal({ isOpen, onClose, title, image, benefits, errorMessage, successMessage, loadingState, nextSteps, closeLabel, primaryAction, modalTitle, modalIcon, secondaryAction, }: ProductModalProps): JSX_2.Element;

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
    primaryAction?: Action;
    secondaryAction?: Action;
};

export declare function ProductWidget({ mediaUrl, title, description, onClose, dismissible, width, trackVisibility, actions, }: ProductWidgetProps): JSX_2.Element;

declare type ProductWidgetProps = {
    mediaUrl: string;
    title: string;
    description: string;
    onClose: () => void;
    dismissible: boolean;
    width?: string;
    trackVisibility?: (visible: boolean) => void;
    actions?: Action_2[];
};

export declare const ProgressBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
value: number;
max?: number;
label?: string;
color?: string;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type RegularAction = BaseAction & {
    type: "regular";
    variant: ButtonVariant;
};

declare const sizes: readonly ["sm", "md", "lg"];

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

declare type UpsellAction = BaseAction & {
    type: "upsell";
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    loadingState: LoadingStateProps;
    nextSteps: NextStepsProps;
    closeLabel: string;
    showConfirmation: boolean;
};

export declare function UpsellingButton({ label, showIcon, onRequest, showConfirmation, loading: externalLoading, errorMessage, successMessage, loadingState, nextSteps, closeLabel, ...props }: UpsellingButtonProps): JSX_2.Element;

export declare interface UpsellingButtonProps extends Omit<ButtonProps, "variant" | "icon"> {
    /**
     * The text to be displayed in the button
     */
    label: string;
    /**
     * Whether to show the Upsell icon. Defaults to true.
     */
    showIcon?: boolean;
    /**
     * Function to be executed when the button is clicked. Must return a Promise.
     */
    onRequest?: () => Promise<void>;
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
}

export declare const UpsellRequestResponseDialog: ForwardRefExoticComponent<UpsellRequestResponseDialogProps & RefAttributes<HTMLDivElement>>;

declare interface UpsellRequestResponseDialogProps {
    open: boolean;
    onClose?: () => void;
    success: boolean;
    errorMessage: ErrorMessageProps;
    successMessage: SuccessMessageProps;
    nextSteps: NextStepsProps;
    closeLabel: string;
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

declare const variants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote"];

export declare const VerticalBarChart: ForwardRefExoticComponent<Omit<ChartPropsBase<ChartConfig_2> & {
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
