import { ComponentProps } from 'react';
import { XAxis, YAxis } from 'recharts';
import { AxisConfig } from './types';

export declare const xAxisProps: (config?: AxisConfig) => Partial<ComponentProps<typeof XAxis>>;
export declare const yAxisProps: (config?: AxisConfig) => Partial<ComponentProps<typeof YAxis>>;
export declare const cartesianGridProps: () => {
    vertical: boolean;
};
