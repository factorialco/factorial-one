// organize-imports-ignore
import React from "react"
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from "@storybook/blocks"
import { addons } from "@storybook/preview-api"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode"
import lightTheme, { darkTheme } from "./FactorialOne.ts"
import { DOCS_RENDERED } from "@storybook/core-events"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/experimental/Information/Alert"

const channel = addons.getChannel()

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = (
  props
) => {
  const [isDark, setDark] = useState(false)
  const { context, children } = props
  const [storyId, setStoryId] = useState<string | null>(null)

  context.channel.on(DOCS_RENDERED, (id) => {
    setStoryId(id)
  })

  const experimental = storyId && storyId.startsWith("experimental-")

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark)
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
  }, [])

  return (
    <BaseContainer theme={isDark ? darkTheme : lightTheme} {...props}>
      {experimental && (
        <div className="sb-unstyled">
          <Alert variant="destructive" className="mb-8">
            <AlertTitle>Experimental component</AlertTitle>
            <AlertDescription>
              Please don&apos;t use experimental components in production unless
              you&apos;re part of a testing group. To know more about our
              testing process please check out our{" "}
              <a href="/?path=/docs/components-maturity--documentation">
                Component Maturity Model
              </a>
            </AlertDescription>
          </Alert>
        </div>
      )}
      {children}
    </BaseContainer>
  )
}
