import { ChartItem } from './types';

export declare function prepareData<Keys extends string>(data: ChartItem<Keys>[]): ({
    x: string;
} & Record<Keys, number>)[];
