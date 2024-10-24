import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ButtonHTMLAttributes } from 'react';
import type * as CLSX from 'clsx';
import { ComponentProps } from 'react';
import { ComponentType } from 'react';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { JSX as JSX_2 } from 'react';
import { PropsWithChildren } from 'react';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import { SVGProps } from 'react';
import { useForm } from 'react-hook-form';

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "info" | "positive" | "warning" | "destructive" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement | SVGElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX";

export declare function ApplicationFrame({ children, sidebar }: ApplicationFrameProps): JSX_2.Element;

declare interface ApplicationFrameProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

declare type AreaChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: allowedLineTypes;
    marginTop?: number;
};

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<AreaChartWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface AreaChartWidgetProps extends ComposeChartContainerProps<AreaChartProps> {
    hasBlur?: boolean;
}

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "lg" | "md" | "sm" | null | undefined;
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type AvailableColors = (typeof avatarColors)[keyof typeof avatarColors];

export declare const Avatar: ForwardRefExoticComponent<AvatarType & RefAttributes<HTMLDivElement>>;

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

declare type BarChartProps<K extends ChartConfig_2 = ChartConfig_2> = ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
};

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type BreadcrumbItemType = NavigationItem & {
    icon?: IconType;
};

declare const Button: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "disabled" | "type" | "round"> & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    loading?: boolean;
    icon?: IconType_2;
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

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

declare interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
}

export declare function CategoryBarSection({ label, title, subtitle, data, helpText, legend, }: CategoryBarSectionProps): JSX_2.Element;

declare interface CategoryBarSectionProps {
    label: string;
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
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

declare interface Company {
    id: string;
    name: string;
    logo?: string;
}

declare type CompanySelectorProps = {
    companies: Company[];
    selected: string;
    onChange: (value: string) => void;
};

declare type ComposeChartContainerProps<T extends object> = ChartContainerPropsBase & {
    chart: T;
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

export declare const DetailsItem: default_2.ForwardRefExoticComponent<DetailsItemType & default_2.RefAttributes<HTMLDivElement>>;

export declare const DetailsItemsList: ForwardRefExoticComponent<DetailsItemsListProps & RefAttributes<HTMLDivElement>>;

declare interface DetailsItemsListProps {
    title: string;
    details: DetailsItemType[];
}

export declare interface DetailsItemType {
    title: string;
    content: string | default_2.ReactNode;
}

export declare const Dialog: ForwardRefExoticComponent<Omit<{
header?: {
icon?: IconType_2;
title: string;
description: string;
};
actions?: {
primary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined;
};
secondary?: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined;
};
};
loading?: boolean;
children: ReactNode;
open?: boolean;
onClose?: () => void;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface EventProps {
    title: string;
    subtitle: string;
    description: string;
    color: string;
    isPending: boolean;
}

export declare const EventsList: ForwardRefExoticComponent<EventsListProps & RefAttributes<HTMLDivElement>>;

export declare interface EventsListProps {
    events: EventProps[];
    title?: string;
    limit?: 1 | 2 | 3 | 4 | 5;
}

declare const ForwardRef = forwardRef(SvgInProgressTask);

declare const ForwardRef_10 = forwardRef(SvgModuleKudos);

declare const ForwardRef_100 = forwardRef(SvgExternalLink);

declare const ForwardRef_101 = forwardRef(SvgEyeInvisible);

declare const ForwardRef_102 = forwardRef(SvgEyeVisible);

declare const ForwardRef_103 = forwardRef(SvgFaceId);

declare const ForwardRef_104 = forwardRef(SvgFeed);

declare const ForwardRef_105 = forwardRef(SvgFeedback);

declare const ForwardRef_106 = forwardRef(SvgFileFilled);

declare const ForwardRef_107 = forwardRef(SvgFile);

declare const ForwardRef_108 = forwardRef(SvgFiles);

declare const ForwardRef_109 = forwardRef(SvgFilter);

declare const ForwardRef_11 = forwardRef(SvgModuleMyDocuments);

declare const ForwardRef_110 = forwardRef(SvgFlag);

declare const ForwardRef_111 = forwardRef(SvgFolder);

declare const ForwardRef_112 = forwardRef(SvgGlobe);

declare const ForwardRef_113 = forwardRef(SvgGroup);

declare const ForwardRef_114 = forwardRef(SvgH1);

declare const ForwardRef_115 = forwardRef(SvgH2);

declare const ForwardRef_116 = forwardRef(SvgH3);

declare const ForwardRef_117 = forwardRef(SvgHeart);

declare const ForwardRef_118 = forwardRef(SvgHideSidebar);

declare const ForwardRef_119 = forwardRef(SvgHistory);

declare const ForwardRef_12 = forwardRef(SvgModuleOrganization);

declare const ForwardRef_120 = forwardRef(SvgHome);

declare const ForwardRef_121 = forwardRef(SvgImage);

declare const ForwardRef_122 = forwardRef(SvgInbox);

declare const ForwardRef_123 = forwardRef(SvgInfoCircleLine);

declare const ForwardRef_124 = forwardRef(SvgInfoCircle);

declare const ForwardRef_125 = forwardRef(SvgInfo);

declare const ForwardRef_126 = forwardRef(SvgInputField);

declare const ForwardRef_127 = forwardRef(SvgItalic);

declare const ForwardRef_128 = forwardRef(SvgLaptop);

declare const ForwardRef_129 = forwardRef(SvgLayersFront);

declare const ForwardRef_13 = forwardRef(SvgModulePayroll);

declare const ForwardRef_130 = forwardRef(SvgLightbulb);

declare const ForwardRef_131 = forwardRef(SvgLinkRemove);

declare const ForwardRef_132 = forwardRef(SvgLink);

declare const ForwardRef_133 = forwardRef(SvgList);

declare const ForwardRef_134 = forwardRef(SvgLockLocked);

declare const ForwardRef_135 = forwardRef(SvgLockUnlocked);

declare const ForwardRef_136 = forwardRef(SvgLogoAvatar);

declare const ForwardRef_137 = forwardRef(SvgLogoEruditai);

declare const ForwardRef_138 = forwardRef(SvgLogoMeetingdoctors);

declare const ForwardRef_139 = forwardRef(SvgLogoTravelperk);

declare const ForwardRef_14 = forwardRef(SvgModulePerformance);

declare const ForwardRef_140 = forwardRef(SvgManager);

declare const ForwardRef_141 = forwardRef(SvgMarketplace);

declare const ForwardRef_142 = forwardRef(SvgMedia);

declare const ForwardRef_143 = forwardRef(SvgMegaphone);

declare const ForwardRef_144 = forwardRef(SvgMobileOptions);

declare const ForwardRef_145 = forwardRef(SvgMobile);

declare const ForwardRef_146 = forwardRef(SvgMoneyBag);

declare const ForwardRef_147 = forwardRef(SvgMoreOptions);

declare const ForwardRef_148 = forwardRef(SvgMoveShifts);

declare const ForwardRef_149 = forwardRef(SvgMove);

declare const ForwardRef_15 = forwardRef(SvgModuleProfile);

declare const ForwardRef_150 = forwardRef(SvgMyDocuments);

declare const ForwardRef_151 = forwardRef(SvgNumbers);

declare const ForwardRef_152 = forwardRef(SvgOffice);

declare const ForwardRef_153 = forwardRef(SvgOlList);

declare const ForwardRef_154 = forwardRef(SvgPaperclip);

declare const ForwardRef_155 = forwardRef(SvgPauseFilled);

declare const ForwardRef_156 = forwardRef(SvgPause);

declare const ForwardRef_157 = forwardRef(SvgPayroll);

declare const ForwardRef_158 = forwardRef(SvgPencil);

declare const ForwardRef_159 = forwardRef(SvgPerformance);

declare const ForwardRef_16 = forwardRef(SvgModuleProjects);

declare const ForwardRef_160 = forwardRef(SvgPerson);

declare const ForwardRef_161 = forwardRef(SvgPhone);

declare const ForwardRef_162 = forwardRef(SvgPinSmall);

declare const ForwardRef_163 = forwardRef(SvgPin);

declare const ForwardRef_164 = forwardRef(SvgPixBrazil);

declare const ForwardRef_165 = forwardRef(SvgPlayFilled);

declare const ForwardRef_166 = forwardRef(SvgPlay);

declare const ForwardRef_167 = forwardRef(SvgPrinter);

declare const ForwardRef_168 = forwardRef(SvgProjects);

declare const ForwardRef_169 = forwardRef(SvgPushPin);

declare const ForwardRef_17 = forwardRef(SvgModuleRecruitment);

declare const ForwardRef_170 = forwardRef(SvgQuestionCircleLine);

declare const ForwardRef_171 = forwardRef(SvgQuestionCircle);

declare const ForwardRef_172 = forwardRef(SvgQuestion);

declare const ForwardRef_173 = forwardRef(SvgQuote);

declare const ForwardRef_174 = forwardRef(SvgReaction);

declare const ForwardRef_175 = forwardRef(SvgRecruiting);

declare const ForwardRef_176 = forwardRef(SvgRefresh);

declare const ForwardRef_177 = forwardRef(SvgRemove);

declare const ForwardRef_178 = forwardRef(SvgReplace);

declare const ForwardRef_179 = forwardRef(SvgReports);

declare const ForwardRef_18 = forwardRef(SvgModuleReports);

declare const ForwardRef_180 = forwardRef(SvgRocket);

declare const ForwardRef_181 = forwardRef(SvgSave);

declare const ForwardRef_182 = forwardRef(SvgSearch);

declare const ForwardRef_183 = forwardRef(SvgSettings);

declare const ForwardRef_184 = forwardRef(SvgShare);

declare const ForwardRef_185 = forwardRef(SvgShiftCheck);

declare const ForwardRef_186 = forwardRef(SvgShiftManagement);

declare const ForwardRef_187 = forwardRef(SvgShowSidebar);

declare const ForwardRef_188 = forwardRef(SvgSign);

declare const ForwardRef_189 = forwardRef(SvgSignature);

declare const ForwardRef_19 = forwardRef(SvgModuleShifts);

declare const ForwardRef_190 = forwardRef(SvgSocial);

declare const ForwardRef_191 = forwardRef(SvgSpaceControl);

declare const ForwardRef_192 = forwardRef(SvgSpinner);

declare const ForwardRef_193 = forwardRef(SvgSplit);

declare const ForwardRef_194 = forwardRef(SvgStarCircleLine);

declare const ForwardRef_195 = forwardRef(SvgStarFilled);

declare const ForwardRef_196 = forwardRef(SvgStar);

declare const ForwardRef_197 = forwardRef(SvgStop);

declare const ForwardRef_198 = forwardRef(SvgStrikethrough);

declare const ForwardRef_199 = forwardRef(SvgTable);

declare const ForwardRef_2 = forwardRef(SvgModuleCalendar);

declare const ForwardRef_20 = forwardRef(SvgModuleSoftware);

declare const ForwardRef_200 = forwardRef(SvgTarget);

declare const ForwardRef_201 = forwardRef(SvgTextSize);

declare const ForwardRef_202 = forwardRef(SvgText);

declare const ForwardRef_203 = forwardRef(SvgThumbsDown);

declare const ForwardRef_204 = forwardRef(SvgThumbsUp);

declare const ForwardRef_205 = forwardRef(SvgThunder);

declare const ForwardRef_206 = forwardRef(SvgTicket);

declare const ForwardRef_207 = forwardRef(SvgTimeOff);

declare const ForwardRef_208 = forwardRef(SvgTimer);

declare const ForwardRef_209 = forwardRef(SvgToday);

declare const ForwardRef_21 = forwardRef(SvgModuleSpaces);

declare const ForwardRef_210 = forwardRef(SvgTouchId);

declare const ForwardRef_211 = forwardRef(SvgTrainings);

declare const ForwardRef_212 = forwardRef(SvgUnderline);

declare const ForwardRef_213 = forwardRef(SvgUpgradePlan);

declare const ForwardRef_214 = forwardRef(SvgUpload);

declare const ForwardRef_215 = forwardRef(SvgUser);

declare const ForwardRef_216 = forwardRef(SvgUsers);

declare const ForwardRef_217 = forwardRef(SvgValidation);

declare const ForwardRef_218 = forwardRef(SvgVerified);

declare const ForwardRef_219 = forwardRef(SvgVideo);

declare const ForwardRef_22 = forwardRef(SvgModuleSpending);

declare const ForwardRef_220 = forwardRef(SvgWhatsappChat);

declare const ForwardRef_221 = forwardRef(SvgZoomIn);

declare const ForwardRef_222 = forwardRef(SvgZoomOut);

declare const ForwardRef_23 = forwardRef(SvgModuleTasks);

declare const ForwardRef_24 = forwardRef(SvgModuleTimeOff);

declare const ForwardRef_25 = forwardRef(SvgModuleTimeTracking);

declare const ForwardRef_26 = forwardRef(SvgModuleTrainings);

declare const ForwardRef_27 = forwardRef(SvgModuleWorkflows);

declare const ForwardRef_28 = forwardRef(SvgAcademicCap);

declare const ForwardRef_29 = forwardRef(SvgAdd);

declare const ForwardRef_3 = forwardRef(SvgModuleClockIn);

declare const ForwardRef_30 = forwardRef(SvgAi);

declare const ForwardRef_31 = forwardRef(SvgAlertCircleLine);

declare const ForwardRef_32 = forwardRef(SvgAlertCircle);

declare const ForwardRef_33 = forwardRef(SvgAlertSign);

declare const ForwardRef_34 = forwardRef(SvgAlert);

declare const ForwardRef_35 = forwardRef(SvgAlignTextCenter);

declare const ForwardRef_36 = forwardRef(SvgAlignTextJustify);

declare const ForwardRef_37 = forwardRef(SvgAlignTextLeft);

declare const ForwardRef_38 = forwardRef(SvgAlignTextRight);

declare const ForwardRef_39 = forwardRef(SvgAppearance);

declare const ForwardRef_4 = forwardRef(SvgModuleDocuments);

declare const ForwardRef_40 = forwardRef(SvgArchiveOpen);

declare const ForwardRef_41 = forwardRef(SvgArchive);

declare const ForwardRef_42 = forwardRef(SvgAreaGraph);

declare const ForwardRef_43 = forwardRef(SvgArrowLeft);

declare const ForwardRef_44 = forwardRef(SvgArrowRight);

declare const ForwardRef_45 = forwardRef(SvgBalance);

declare const ForwardRef_46 = forwardRef(SvgBell);

declare const ForwardRef_47 = forwardRef(SvgBold);

declare const ForwardRef_48 = forwardRef(SvgBriefcase);

declare const ForwardRef_49 = forwardRef(SvgBucket);

declare const ForwardRef_5 = forwardRef(SvgModuleEngagement);

declare const ForwardRef_50 = forwardRef(SvgBusinessTrip);

declare const ForwardRef_51 = forwardRef(SvgCalculator);

declare const ForwardRef_52 = forwardRef(SvgCalendar);

declare const ForwardRef_53 = forwardRef(SvgCameraPlus);

declare const ForwardRef_54 = forwardRef(SvgCardPin);

declare const ForwardRef_55 = forwardRef(SvgChartLine);

declare const ForwardRef_56 = forwardRef(SvgCheckCircleLine);

declare const ForwardRef_57 = forwardRef(SvgCheckCircle);

declare const ForwardRef_58 = forwardRef(SvgCheckMulti);

declare const ForwardRef_59 = forwardRef(SvgCheck);

declare const ForwardRef_6 = forwardRef(SvgModuleFinance);

declare const ForwardRef_60 = forwardRef(SvgChevronDown);

declare const ForwardRef_61 = forwardRef(SvgChevronLeft);

declare const ForwardRef_62 = forwardRef(SvgChevronRight);

declare const ForwardRef_63 = forwardRef(SvgChevronUp);

declare const ForwardRef_64 = forwardRef(SvgCircleLine);

declare const ForwardRef_65 = forwardRef(SvgCircle);

declare const ForwardRef_66 = forwardRef(SvgClock);

declare const ForwardRef_67 = forwardRef(SvgCloud);

declare const ForwardRef_68 = forwardRef(SvgCmd);

declare const ForwardRef_69 = forwardRef(SvgCode);

declare const ForwardRef_7 = forwardRef(SvgModuleGoals);

declare const ForwardRef_70 = forwardRef(SvgCoffee);

declare const ForwardRef_71 = forwardRef(SvgCollapse);

declare const ForwardRef_72 = forwardRef(SvgCommand);

declare const ForwardRef_73 = forwardRef(SvgComment);

declare const ForwardRef_74 = forwardRef(SvgComplaint);

declare const ForwardRef_75 = forwardRef(SvgContactless);

declare const ForwardRef_76 = forwardRef(SvgContract);

declare const ForwardRef_77 = forwardRef(SvgCornerResize);

declare const ForwardRef_78 = forwardRef(SvgCreditCard);

declare const ForwardRef_79 = forwardRef(SvgCrossCircle);

declare const ForwardRef_8 = forwardRef(SvgModuleHome);

declare const ForwardRef_80 = forwardRef(SvgCross);

declare const ForwardRef_81 = forwardRef(SvgCrown);

declare const ForwardRef_82 = forwardRef(SvgDashboard);

declare const ForwardRef_83 = forwardRef(SvgDelete);

declare const ForwardRef_84 = forwardRef(SvgDeny);

declare const ForwardRef_85 = forwardRef(SvgDesktop);

declare const ForwardRef_86 = forwardRef(SvgDollarBill);

declare const ForwardRef_87 = forwardRef(SvgInProgressTask);

declare const ForwardRef_88 = forwardRef(SvgDownload);

declare const ForwardRef_89 = forwardRef(SvgDragAndDrop);

declare const ForwardRef_9 = forwardRef(SvgModuleInbox);

declare const ForwardRef_90 = forwardRef(SvgDuplicate);

declare const ForwardRef_91 = forwardRef(SvgEditFileFilled);

declare const ForwardRef_92 = forwardRef(SvgEllipsisHorizontal);

declare const ForwardRef_93 = forwardRef(SvgEllipsis);

declare const ForwardRef_94 = forwardRef(SvgEngagement);

declare const ForwardRef_95 = forwardRef(SvgEnvelopeOpen);

declare const ForwardRef_96 = forwardRef(SvgEnvelope);

declare const ForwardRef_97 = forwardRef(SvgEquals);

declare const ForwardRef_98 = forwardRef(SvgExpand);

declare const ForwardRef_99 = forwardRef(SvgExpenses);

declare type HeaderProps = {
    module: {
        name: string;
        href: string;
        icon: IconType;
    };
    breadcrumbs?: BreadcrumbItemType[];
    actions?: {
        label: string;
        icon: IconType_2;
        onClick: () => void;
    }[];
};

declare type Icon = "area-graph" | "cash";

export declare const iconComponents: Record<"Calendar" | "Engagement" | "Home" | "Inbox" | "MyDocuments" | "Payroll" | "Performance" | "Projects" | "Reports" | "TimeOff" | "Trainings" | "ClockIn" | "Documents" | "Finance" | "Goals" | "Kudos" | "Organization" | "Profile" | "Recruitment" | "Shifts" | "Software" | "Spaces" | "Spending" | "Tasks" | "TimeTracking" | "Workflows", ComponentType<SVGProps<SVGSVGElement>>>;

declare type IconName = keyof typeof Icons;

declare namespace Icons {
    export {
        ForwardRef as InProgressTask,
        ForwardRef_2 as ModuleCalendar,
        ForwardRef_3 as ModuleClockIn,
        ForwardRef_4 as ModuleDocuments,
        ForwardRef_5 as ModuleEngagement,
        ForwardRef_6 as ModuleFinance,
        ForwardRef_7 as ModuleGoals,
        ForwardRef_8 as ModuleHome,
        ForwardRef_9 as ModuleInbox,
        ForwardRef_10 as ModuleKudos,
        ForwardRef_11 as ModuleMyDocuments,
        ForwardRef_12 as ModuleOrganization,
        ForwardRef_13 as ModulePayroll,
        ForwardRef_14 as ModulePerformance,
        ForwardRef_15 as ModuleProfile,
        ForwardRef_16 as ModuleProjects,
        ForwardRef_17 as ModuleRecruitment,
        ForwardRef_18 as ModuleReports,
        ForwardRef_19 as ModuleShifts,
        ForwardRef_20 as ModuleSoftware,
        ForwardRef_21 as ModuleSpaces,
        ForwardRef_22 as ModuleSpending,
        ForwardRef_23 as ModuleTasks,
        ForwardRef_24 as ModuleTimeOff,
        ForwardRef_25 as ModuleTimeTracking,
        ForwardRef_26 as ModuleTrainings,
        ForwardRef_27 as ModuleWorkflows,
        ForwardRef_28 as AcademicCap,
        ForwardRef_29 as Add,
        ForwardRef_30 as Ai,
        ForwardRef_31 as AlertCircleLine,
        ForwardRef_32 as AlertCircle,
        ForwardRef_33 as AlertSign,
        ForwardRef_34 as Alert,
        ForwardRef_35 as AlignTextCenter,
        ForwardRef_36 as AlignTextJustify,
        ForwardRef_37 as AlignTextLeft,
        ForwardRef_38 as AlignTextRight,
        ForwardRef_39 as Appearance,
        ForwardRef_40 as ArchiveOpen,
        ForwardRef_41 as Archive,
        ForwardRef_42 as AreaGraph,
        ForwardRef_43 as ArrowLeft,
        ForwardRef_44 as ArrowRight,
        ForwardRef_45 as Balance,
        ForwardRef_46 as Bell,
        ForwardRef_47 as Bold,
        ForwardRef_48 as Briefcase,
        ForwardRef_49 as Bucket,
        ForwardRef_50 as BusinessTrip,
        ForwardRef_51 as Calculator,
        ForwardRef_52 as Calendar,
        ForwardRef_53 as CameraPlus,
        ForwardRef_54 as CardPin,
        ForwardRef_55 as ChartLine,
        ForwardRef_56 as CheckCircleLine,
        ForwardRef_57 as CheckCircle,
        ForwardRef_58 as CheckMulti,
        ForwardRef_59 as Check,
        ForwardRef_60 as ChevronDown,
        ForwardRef_61 as ChevronLeft,
        ForwardRef_62 as ChevronRight,
        ForwardRef_63 as ChevronUp,
        ForwardRef_64 as CircleLine,
        ForwardRef_65 as Circle,
        ForwardRef_66 as Clock,
        ForwardRef_67 as Cloud,
        ForwardRef_68 as Cmd,
        ForwardRef_69 as Code,
        ForwardRef_70 as Coffee,
        ForwardRef_71 as Collapse,
        ForwardRef_72 as Command,
        ForwardRef_73 as Comment,
        ForwardRef_74 as Complaint,
        ForwardRef_75 as Contactless,
        ForwardRef_76 as Contract,
        ForwardRef_77 as CornerResize,
        ForwardRef_78 as CreditCard,
        ForwardRef_79 as CrossCircle,
        ForwardRef_80 as Cross,
        ForwardRef_81 as Crown,
        ForwardRef_82 as Dashboard,
        ForwardRef_83 as Delete,
        ForwardRef_84 as Deny,
        ForwardRef_85 as Desktop,
        ForwardRef_86 as DollarBill,
        ForwardRef_87 as DottedCircle,
        ForwardRef_88 as Download,
        ForwardRef_89 as DragAndDrop,
        ForwardRef_90 as Duplicate,
        ForwardRef_91 as EditFileFilled,
        ForwardRef_92 as EllipsisHorizontal,
        ForwardRef_93 as Ellipsis,
        ForwardRef_94 as Engagement,
        ForwardRef_95 as EnvelopeOpen,
        ForwardRef_96 as Envelope,
        ForwardRef_97 as Equals,
        ForwardRef_98 as Expand,
        ForwardRef_99 as Expenses,
        ForwardRef_100 as ExternalLink,
        ForwardRef_101 as EyeInvisible,
        ForwardRef_102 as EyeVisible,
        ForwardRef_103 as FaceId,
        ForwardRef_104 as Feed,
        ForwardRef_105 as Feedback,
        ForwardRef_106 as FileFilled,
        ForwardRef_107 as File,
        ForwardRef_108 as Files,
        ForwardRef_109 as Filter,
        ForwardRef_110 as Flag,
        ForwardRef_111 as Folder,
        ForwardRef_112 as Globe,
        ForwardRef_113 as Group,
        ForwardRef_114 as H1,
        ForwardRef_115 as H2,
        ForwardRef_116 as H3,
        ForwardRef_117 as Heart,
        ForwardRef_118 as HideSidebar,
        ForwardRef_119 as History,
        ForwardRef_120 as Home,
        ForwardRef_121 as Image,
        ForwardRef_122 as Inbox,
        ForwardRef_123 as InfoCircleLine,
        ForwardRef_124 as InfoCircle,
        ForwardRef_125 as Info,
        ForwardRef_126 as InputField,
        ForwardRef_127 as Italic,
        ForwardRef_128 as Laptop,
        ForwardRef_129 as LayersFront,
        ForwardRef_130 as Lightbulb,
        ForwardRef_131 as LinkRemove,
        ForwardRef_132 as Link,
        ForwardRef_133 as List,
        ForwardRef_134 as LockLocked,
        ForwardRef_135 as LockUnlocked,
        ForwardRef_136 as LogoAvatar,
        ForwardRef_137 as LogoEruditai,
        ForwardRef_138 as LogoMeetingdoctors,
        ForwardRef_139 as LogoTravelperk,
        ForwardRef_140 as Manager,
        ForwardRef_141 as Marketplace,
        ForwardRef_142 as Media,
        ForwardRef_143 as Megaphone,
        ForwardRef_144 as MobileOptions,
        ForwardRef_145 as Mobile,
        ForwardRef_146 as MoneyBag,
        ForwardRef_147 as MoreOptions,
        ForwardRef_148 as MoveShifts,
        ForwardRef_149 as Move,
        ForwardRef_150 as MyDocuments,
        ForwardRef_151 as Numbers,
        ForwardRef_152 as Office,
        ForwardRef_153 as OlList,
        ForwardRef_154 as Paperclip,
        ForwardRef_155 as PauseFilled,
        ForwardRef_156 as Pause,
        ForwardRef_157 as Payroll,
        ForwardRef_158 as Pencil,
        ForwardRef_159 as Performance,
        ForwardRef_160 as Person,
        ForwardRef_161 as Phone,
        ForwardRef_162 as PinSmall,
        ForwardRef_163 as Pin,
        ForwardRef_164 as PixBrazil,
        ForwardRef_165 as PlayFilled,
        ForwardRef_166 as Play,
        ForwardRef_167 as Printer,
        ForwardRef_168 as Projects,
        ForwardRef_169 as PushPin,
        ForwardRef_170 as QuestionCircleLine,
        ForwardRef_171 as QuestionCircle,
        ForwardRef_172 as Question,
        ForwardRef_173 as Quote,
        ForwardRef_174 as Reaction,
        ForwardRef_175 as Recruiting,
        ForwardRef_176 as Refresh,
        ForwardRef_177 as Remove,
        ForwardRef_178 as Replace,
        ForwardRef_179 as Reports,
        ForwardRef_180 as Rocket,
        ForwardRef_181 as Save,
        ForwardRef_182 as Search,
        ForwardRef_183 as Settings,
        ForwardRef_184 as Share,
        ForwardRef_185 as ShiftCheck,
        ForwardRef_186 as ShiftManagement,
        ForwardRef_187 as ShowSidebar,
        ForwardRef_188 as Sign,
        ForwardRef_189 as Signature,
        ForwardRef_190 as Social,
        ForwardRef_191 as SpaceControl,
        ForwardRef_192 as Spinner,
        ForwardRef_193 as Split,
        ForwardRef_194 as StarCircleLine,
        ForwardRef_195 as StarFilled,
        ForwardRef_196 as Star,
        ForwardRef_197 as Stop,
        ForwardRef_198 as Strikethrough,
        ForwardRef_199 as Table,
        ForwardRef_200 as Target,
        ForwardRef_201 as TextSize,
        ForwardRef_202 as Text,
        ForwardRef_203 as ThumbsDown,
        ForwardRef_204 as ThumbsUp,
        ForwardRef_205 as Thunder,
        ForwardRef_206 as Ticket,
        ForwardRef_207 as TimeOff,
        ForwardRef_208 as Timer,
        ForwardRef_209 as Today,
        ForwardRef_210 as TouchId,
        ForwardRef_211 as Trainings,
        ForwardRef_212 as Underline,
        ForwardRef_213 as UpgradePlan,
        ForwardRef_214 as Upload,
        ForwardRef_215 as User,
        ForwardRef_216 as Users,
        ForwardRef_217 as Validation,
        ForwardRef_218 as Verified,
        ForwardRef_219 as Video,
        ForwardRef_220 as WhatsappChat,
        ForwardRef_221 as ZoomIn,
        ForwardRef_222 as ZoomOut
    }
}

declare const iconsMap: {
    office: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    briefcase: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    home: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
};

export declare const IconText: ForwardRefExoticComponent<IconTextProps & RefAttributes<HTMLDivElement>>;

declare interface IconTextProps {
    icon: keyof typeof iconsMap;
    texts: string[];
}

export declare const IconTextsList: ForwardRefExoticComponent<IconTextsListProps & RefAttributes<HTMLDivElement>>;

declare interface IconTextsListProps {
    list: ComponentProps<typeof IconText>[];
}

export declare type IconType = keyof typeof iconComponents;

declare type IconType_2 = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

declare const Indicator: ForwardRefExoticComponent<IndicatorProps & RefAttributes<HTMLDivElement>>;

declare interface IndicatorProps {
    content: string;
    label: string;
    color?: string;
    icon?: IconType_2;
}

export declare const IndicatorsList: ForwardRefExoticComponent<IndicatorsListProps & RefAttributes<HTMLDivElement>>;

export declare interface IndicatorsListProps {
    items: ComponentProps<typeof Indicator>[];
}

export declare const InfoPaneLayout: ForwardRefExoticComponent<Omit<InfoPaneLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface InfoPaneLayoutProps {
    mainContent: default_2.ReactNode;
    sideContent: default_2.ReactNode;
}

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Input_2: React_2.ForwardRefExoticComponent<InputProps_2 & React_2.RefAttributes<HTMLInputElement>>;

declare type InputProps = Pick<ComponentProps<typeof Input_2>, "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"> & {
    type?: Exclude<HTMLInputTypeAttribute, "number">;
};

declare type InputProps_2 = React_2.InputHTMLAttributes<HTMLInputElement>;

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
    icon: IconType_2;
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

export declare const moduleIconNames: readonly ["Calendar", "ClockIn", "Documents", "Engagement", "Finance", "Goals", "Home", "Inbox", "Kudos", "MyDocuments", "Organization", "Payroll", "Performance", "Profile", "Projects", "Recruitment", "Reports", "Shifts", "Software", "Spaces", "Spending", "Tasks", "TimeOff", "TimeTracking", "Trainings", "Workflows"];

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
};

export declare const NumberInput: ForwardRefExoticComponent<Omit<Omit<Omit<InputProps, "type" | "value" | "onChange"> & {
locale: string;
value?: number | null;
step?: number;
min?: number;
max?: number;
maxDecimals?: number;
onChange?: (value: number | null) => void;
}, "ref"> & RefAttributes<HTMLInputElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type OmitUndefined<T> = T extends undefined ? never : T;

export declare function Page({ children, header }: PageProps): JSX_2.Element;

export declare function PageHeader({ module, breadcrumbs, actions, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
}

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

export declare const PrivateBox: FC<PropsWithChildren>;

export declare interface Props {
    title: string;
    content: string;
    icon: Icon;
    buttonLabel?: string;
    buttonAction?: () => void;
    promote?: boolean;
}

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

export declare const Select: ForwardRefExoticComponent<SelectProps<string> & RefAttributes<HTMLButtonElement>>;

declare type SelectItemProps<T> = {
    value: T;
    label: string;
    icon?: IconName;
    description?: string;
};

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

export declare function Shortcut({ keys, variant }: ShortcutProps): JSX_2.Element;

declare interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}

declare const shortcutVariants: (props?: ({
    variant?: "default" | "inverse" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Sidebar({ header, body, footer }: SidebarProps): JSX_2.Element;

export declare function SidebarHeader({ companies, selected, onChange, }: SidebarHeaderProps): JSX_2.Element;

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

declare const sizes: readonly ["xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"];

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
maxWidth?: "xl" | "md" | "sm" | "xs" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
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

export declare function StandardLayout({ children }: StandardLayoutProps): default_2.JSX.Element;

export declare interface StandardLayoutProps {
    children: default_2.ReactNode;
}

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type TabItem = NavigationItem;

export declare function Tabs({ tabs, secondary }: TabsProps): JSX_2.Element;

declare interface TabsProps {
    tabs: TabItem[];
    secondary?: boolean;
}

declare const Tag: ForwardRefExoticComponent<TagProps & RefAttributes<HTMLDivElement>>;

declare interface TagProps {
    text: string;
    avatar?: ComponentProps<typeof Avatar>;
    onClick?: () => void;
}

export declare const TagsList: ForwardRefExoticComponent<TagsListProps & RefAttributes<HTMLDivElement>>;

declare interface TagsListProps {
    tags: ComponentProps<typeof Tag>[];
}

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
    inProgress?: Task[];
    noDue?: Task[];
    due?: Task[];
}

export declare interface TasksListProps {
    tasks: TasksList_2;
    maxTasksToShow?: number;
    onClickTask?: (task: Task) => void;
    emptyMessage?: string;
    hideIcons?: boolean;
}

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<TextareaProps_2 & React_2.RefAttributes<HTMLTextAreaElement>>;

declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols">;

declare type TextareaProps_2 = React_2.TextareaHTMLAttributes<HTMLTextAreaElement>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

export declare const TimeStatus: ForwardRefExoticComponent<TimeStatusProps & RefAttributes<HTMLDivElement>>;

declare interface TimeStatusProps {
    title: string;
    time: string;
    status: "in" | "out" | "break";
    statusText: string;
}

declare interface TwoColumnsItemType {
    title: string;
    info: string | ReactNode;
}

export declare const TwoColumnsList: ForwardRefExoticComponent<TwoColumnsListType & RefAttributes<HTMLDivElement>>;

declare interface TwoColumnsListType {
    title?: string;
    list: TwoColumnsItemType[];
}

export { useForm }

export declare function User({ name, avatarUrl, avatarAlt, options }: UserProps): JSX_2.Element;

declare interface UserProps {
    name: string;
    avatarUrl?: string;
    avatarAlt: string;
    options: {
        label: string;
        href?: string;
        onClick?: () => void;
    }[];
}

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

export declare const VerticalSeparator: () => JSX_2.Element;

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

export declare const WidgetEmptyState: ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>;

export declare interface WidgetProps {
    header?: {
        title?: string;
        subtitle?: string;
        comment?: string;
        hasBlur?: boolean;
        isBlur?: boolean;
        toggleBlur?: () => void;
        info?: string;
        link?: {
            title: string;
            url: string;
        };
    };
    action?: ButtonProps;
    alert?: string;
    summaries?: Array<{
        label: string;
        value: number;
        prefixUnit?: string;
        postfixUnit?: string;
    }>;
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
