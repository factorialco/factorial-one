import { VariantProps } from 'class-variance-authority';

import * as React from "react";
declare const Alert: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "destructive" | "positive" | "info" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertDescription, AlertTitle };
