import { ChartItem } from "./types"

export function prepareData<Keys extends string>(data: ChartItem<Keys>[]) {
  return data.map((item) => ({ x: item.label, ...item.values }))
}
