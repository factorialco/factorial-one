import { Component } from "@/lib/component"

import {
  Card as RawCard,
  CardDescription as RawCardDescription,
  CardFooter as RawCardFooter,
  CardHeader as RawCardHeader,
  CardTitle as RawCardTitle,
  CardContent as RawContent,
} from "./Card"

export const Card = Component(
  {
    name: "Card",
    type: "info",
  },
  RawCard
)

export const CardContent = Component(
  {
    name: "CardContent",
    type: "info",
    internal: true,
  },
  RawContent
)

export const CardDescription = Component(
  {
    name: "CardDescription",
    type: "info",
    internal: true,
  },
  RawCardDescription
)

export const CardFooter = Component(
  {
    name: "CardFooter",
    type: "info",
    internal: true,
  },
  RawCardFooter
)

export const CardHeader = Component(
  {
    name: "CardHeader",
    type: "info",
    internal: true,
  },
  RawCardHeader
)

export const CardTitle = Component(
  {
    name: "CardTitle",
    type: "info",
    internal: true,
  },
  RawCardTitle
)
