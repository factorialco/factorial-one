import { Component } from "@/lib/component"

import { AreaChart as AreaChartComponent } from "./AreaChart"
import { BarChart as BarChartComponent } from "./BarChart"
import { LineChart as LineChartComponent } from "./LineChart"
import { PieChart as PieChartComponent } from "./PieChart"
import { VerticalBarChart as VerticalBarChartComponent } from "./VerticalBarChart"

export const AreaChart = Component(
  {
    name: "AreaChart",
    type: "info",
  },
  AreaChartComponent
)

export const BarChart = Component(
  {
    name: "BarChart",
    type: "info",
  },
  BarChartComponent
)

export const LineChart = Component(
  {
    name: "LineChart",
    type: "info",
  },
  LineChartComponent
)

export const PieChart = Component(
  {
    name: "PieChart",
    type: "info",
  },
  PieChartComponent
)

export const VerticalBarChart = Component(
  {
    name: "VerticalBarChart",
    type: "info",
  },
  VerticalBarChartComponent
)
