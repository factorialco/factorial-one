import { Component } from "@/lib/component"

import { AreaChart as AreaChartComponent } from "./AreaChart"
import { LineChart as LineChartComponent } from "./LineChart"

export const AreaChart = Component(
  {
    name: "AreaChart",
    type: "info",
  },
  AreaChartComponent
)

export const LineChart = Component(
  {
    name: "LineChart",
    type: "info",
  },
  LineChartComponent
)
