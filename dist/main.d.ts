/// <reference types="react" />

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type * as CLSX from 'clsx';
import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import * as React_2 from 'react';
import { RefAttributes } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "destructive" | "positive" | "info" | "warning" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "sm" | "md" | "lg" | null | undefined;
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: "small" | "xsmall" | "medium" | "large" | "xlarge" | "xxlarge" | undefined;
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarFallback: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & React_2.RefAttributes<HTMLSpanElement>>;

export declare const AvatarImage: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React_2.RefAttributes<HTMLImageElement>, "ref"> & React_2.RefAttributes<HTMLImageElement>>;

export declare function Badge({ className, variant, ...props }: BadgeProps): React_2.JSX.Element;

export declare interface BadgeProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "positive" | "info" | "warning" | "neutral" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React.FC<Props>;

declare const Button_2: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
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

export declare const Dialog: React_2.FC<DialogPrimitive.DialogProps>;

export declare const DialogClose: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const DialogContent: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogDescription: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React_2.RefAttributes<HTMLParagraphElement>, "ref"> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const DialogFooter: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): React_2.JSX.Element;
    displayName: string;
};

export declare const DialogHeader: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): React_2.JSX.Element;
    displayName: string;
};

export declare const DialogIcon: {
    ({ className, ...props }: React_2.HTMLAttributes<HTMLDivElement>): React_2.JSX.Element;
    displayName: string;
};

export declare const DialogOverlay: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const DialogPortal: React_2.FC<DialogPrimitive.DialogPortalProps>;

export declare const DialogTitle: React_2.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React_2.RefAttributes<HTMLHeadingElement>, "ref"> & React_2.RefAttributes<HTMLHeadingElement>>;

export declare const DialogTrigger: React_2.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    layout?: LayoutProps;
}>;

export declare const Input: ForwardRefExoticComponent<Omit<Pick<InputProps & RefAttributes<HTMLInputElement>, "size" | "disabled" | "type" | "value" | "onChange" | "ref" | "placeholder">, "ref"> & RefAttributes<HTMLElement>>;

declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement> {
}

declare interface LayoutProps {
    fullScreen?: boolean;
}

declare type OmitUndefined<T> = T extends undefined ? never : T;

declare type Props = Pick<ComponentProps<typeof Button_2>, "variant" | "size" | "onClick"> & {
    label: string;
    icon?: LucideIcon;
    hideLabel?: boolean;
};

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
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
wrap?: boolean | null | undefined;
verticalAlign?: "center" | "stretch" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const SplitCol: default_2.ForwardRefExoticComponent<default_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    overflow?: "hidden" | "auto" | null | undefined;
    paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
    maxWidth?: "sm" | "xs" | "md" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
    paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
    basis?: "0" | null | undefined;
    inline?: boolean | null | undefined;
    grow?: boolean | null | undefined;
    shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & default_2.RefAttributes<HTMLDivElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "sm" | "xs" | "md" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement>>;

export declare const StackRow: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "sm" | "xs" | "md" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>>;

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsContent: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsList: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsTrigger: React_2.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React_2.RefAttributes<HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

export declare const useXRay: () => {
    enabled: boolean;
    filter: ComponentTypes[];
    enable: (filter?: ComponentTypes[]) => void;
    disable: () => void;
};

declare type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;

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

