import { Component } from "@/lib/component"
import { InsightsDashboard as InsightsDashboardComponent } from "./Dashboard"
import { AreaInsight as AreaInsightComponent } from "./Types"

export const AreaInsight = Component(
  {
    name: "AreaInsight",
    type: "info",
  },
  AreaInsightComponent
)

export const InsightsDashboard = Component(
  {
    name: "InsightsDashboard",
    type: "info",
  },
  InsightsDashboardComponent
)
