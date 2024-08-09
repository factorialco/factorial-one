import { ComponentProps } from 'react';
import { default as default_2 } from 'react';
import { ForwardRefExoticComponent } from 'react';
import * as React_2 from 'react';
import { RefAttributes } from 'react';
import { SVGProps } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

declare const Breadcrumb: ForwardRefExoticComponent<BreadcrumbsType & RefAttributes<HTMLDivElement>>;

declare interface BreadcrumbsType {
    icon: IconType;
    routes: RouteType[];
    title: string;
}

export declare const Details: ForwardRefExoticComponent<DetailsType & RefAttributes<HTMLDivElement>>;

declare interface DetailsItemType {
    title: string;
    content: string | default_2.ReactNode;
    className?: string;
}

declare interface DetailsType {
    details: DetailsItemType[];
    title?: string;
    activatedDays?: ComponentProps<typeof Weekdays>["activatedDays"];
    manager?: string;
    teams?: string[];
}

export declare const Header: ForwardRefExoticComponent<HeaderProps & RefAttributes<HTMLDivElement>>;

declare interface HeaderProps {
    title: string;
    subtitle: string;
    src: string;
    alt: string;
}

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

declare interface RouteType {
    title: string;
    url: string;
}

export declare const Tabs: default_2.ForwardRefExoticComponent<TabsProps & default_2.RefAttributes<HTMLDivElement>>;

declare const Tabs_2: React_2.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React_2.RefAttributes<HTMLDivElement>>;

declare interface TabsProps {
    tabs: TabType[];
    title: ComponentProps<typeof Header>["title"];
    subtitle: ComponentProps<typeof Header>["subtitle"];
    src: ComponentProps<typeof Header>["src"];
    alt: ComponentProps<typeof Header>["alt"];
    defaultTab?: ComponentProps<typeof Tabs_2>["defaultValue"];
    breadcrumbTitle: ComponentProps<typeof Breadcrumb>["title"];
    routes: ComponentProps<typeof Breadcrumb>["routes"];
    icon: ComponentProps<typeof Breadcrumb>["icon"];
    details?: ComponentProps<typeof Details>["details"];
    activatedDays?: ComponentProps<typeof Details>["activatedDays"];
    manager?: ComponentProps<typeof Details>["manager"];
    teams?: ComponentProps<typeof Details>["teams"];
}

declare interface TabType {
    name: string;
    key: string;
    content: default_2.ReactNode;
}

declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: string[];
    daysOfTheWeek?: string[];
}

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

