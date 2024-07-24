import { ComponentProps } from 'react';

interface LayoutProps {
    fullScreen?: boolean;
    addBodyClasses?: boolean;
}
export declare const useLayout: () => {
    inLayoutContext: boolean;
    element: HTMLElement | null;
};
export declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
} & LayoutProps>;
export declare const FactorialOneProvider: React.FC<{
    children: React.ReactNode;
    layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">;
}>;
export {};
