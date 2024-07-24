import { VariantProps } from 'class-variance-authority';

import * as React from "react";
export declare const variants: readonly ["default", "secondary", "outline", "destructive", "positive", "ghost"];
export declare const sizes: readonly ["default", "sm"];
declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | "destructive" | "positive" | "ghost" | null | undefined;
    rounded?: boolean | null | undefined;
    size?: "default" | "sm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
