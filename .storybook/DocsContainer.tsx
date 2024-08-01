// organize-imports-ignore
import React from "react"
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from "@storybook/blocks"
import { addons } from "@storybook/preview-api"
import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode"
import lightTheme, { darkTheme } from "./FactorialOne"

const channel = addons.getChannel()

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({
  children,
  context,
}) => {
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark)
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark)
  }, [channel])

  return (
    <BaseContainer theme={isDark ? darkTheme : lightTheme} context={context}>
      {children}
    </BaseContainer>
  )
}
