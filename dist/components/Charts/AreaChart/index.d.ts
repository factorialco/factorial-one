import { ForwardedRef } from 'react';
import { ChartConfig, ChartPropsBase, InferChartKeys } from '../utils/types';

export type AreaChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = ChartPropsBase<DataConfig, Keys> & {
    lineType?: "natural" | "linear" | "step";
};
export declare const _AreaChart: <DataConfig extends ChartConfig, Keys extends string = string>({ data, dataConfig, xAxis, yAxis, lineType, }: AreaChartProps<DataConfig, Keys>, ref: ForwardedRef<HTMLDivElement>) => import("react").JSX.Element;
export declare const AreaChart: <DataConfig extends ChartConfig, Keys extends string = string>(props: ChartPropsBase<DataConfig, Keys> & {
    lineType?: "natural" | "linear" | "step";
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
