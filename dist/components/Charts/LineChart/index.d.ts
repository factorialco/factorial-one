import { ForwardedRef } from 'react';
import { ChartConfig, ChartPropsBase, InferChartKeys } from '../utils/types';

export type LineChartProps<DataConfig extends ChartConfig = ChartConfig, Keys extends string = InferChartKeys<DataConfig>> = ChartPropsBase<DataConfig, Keys> & {
    lineType?: "natural" | "linear" | "step";
};
export declare const _LineChart: <DataConfig extends ChartConfig, Keys extends string = string>({ data, dataConfig, xAxis, yAxis, lineType, }: LineChartProps<DataConfig, Keys>, ref: ForwardedRef<HTMLDivElement>) => import("react").JSX.Element;
export declare const LineChart: <DataConfig extends ChartConfig, Keys extends string = string>(props: ChartPropsBase<DataConfig, Keys> & {
    lineType?: "natural" | "linear" | "step";
} & import('react').RefAttributes<HTMLDivElement>) => React.ReactNode;
