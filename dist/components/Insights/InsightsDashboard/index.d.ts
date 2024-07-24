import { AutoGrid } from '../../../factorial-one';
import { ComponentProps, ReactNode } from 'react';

type InsightsDashboardProps = {
    header?: {
        title: string;
        description?: string;
    };
    tileSize?: ComponentProps<typeof AutoGrid>["tileSize"];
    children?: ReactNode;
};
export declare const InsightsDashboard: import('react').ForwardRefExoticComponent<InsightsDashboardProps & import('react').RefAttributes<HTMLDivElement>>;
export {};
