import { Component } from "@/lib/component"
import { AreaChartInsight as AreaChartInsightComponent } from "./AreaChartInsight"
import { LineChartInsight as LineChartInsightComponent } from "./LineChartInsight"

export const AreaChartInsight = Component(
  {
    name: "AreaChartInsight",
    type: "info",
  },
  AreaChartInsightComponent
)

export const LineChartInsight = Component(
  {
    name: "LineChartInsight",
    type: "info",
  },
  LineChartInsightComponent
)
