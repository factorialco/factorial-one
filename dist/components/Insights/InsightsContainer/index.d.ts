import { ComponentProps, FC, ReactNode, RefAttributes } from 'react';

export interface InsightsContainerProps {
    header: {
        title: string;
        description: string;
    };
    footer: {
        trend: string;
        time: string;
    };
}
export declare const InsightsContainer: import('react').ForwardRefExoticComponent<InsightsContainerProps & {
    children: ReactNode;
} & RefAttributes<HTMLDivElement>>;
export type ContainerWrapType<Component extends FC<RefAttributes<HTMLElement>>, ChartKey extends string> = React.FC<RefAttributes<HTMLElement> & Omit<InsightsContainerProps, "children"> & {
    [key in ChartKey]: ComponentProps<Component>;
}>;
export declare function wrap<Component extends FC<any>, NestedKey extends string>(Component: Component, nestedKey: NestedKey): ContainerWrapType<Component, NestedKey>;
