import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import {
  Card,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "@/ui/card"
import { type ReactNode } from "react"
import { CardMetadata } from "./CardMetadata"
import { type Metadata } from "./types"

interface OneCardProps {
  title?: string
  description?: string
  metadata?: Metadata[]
  children?: ReactNode
  primaryAction?: {
    label: string
    onClick: () => void
  }
  secondaryAction?: {
    label: string
    icon: IconType
    onClick: () => void
  }
  otherAction?: {
    label: string
    onClick: () => void
    critical?: boolean
  }
}

export function OneCard({
  title,
  description,
  metadata,
  children,
  primaryAction,
  secondaryAction,
  otherAction,
}: OneCardProps) {
  const hasActions = primaryAction || secondaryAction || otherAction

  return (
    <Card className="bg-f1-background p-0 shadow-none">
      <div className="flex flex-col gap-2.5 p-4">
        <CardHeader className="flex-col gap-0.5">
          <CardTitle className="text-lg font-semibold text-f1-foreground">
            {title}
          </CardTitle>
          {description && (
            <CardSubtitle className="text-base text-f1-foreground-secondary">
              {description}
            </CardSubtitle>
          )}
        </CardHeader>
        {metadata && (
          <div className="flex flex-col gap-0.5">
            {metadata.map((item) => (
              <CardMetadata key={item.type} metadata={item} />
            ))}
          </div>
        )}
        {children}
      </div>
      {hasActions && (
        <CardFooter className="flex justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary px-4 py-3">
          {otherAction && (
            <Button
              label={otherAction.label}
              variant={otherAction.critical ? "critical" : "outline"}
            />
          )}
          <div className="flex gap-2">
            {secondaryAction && (
              <Button
                label={secondaryAction.label}
                icon={secondaryAction.icon}
                hideLabel
                round
                variant="outline"
              />
            )}
            {primaryAction && <Button label={primaryAction.label} />}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
